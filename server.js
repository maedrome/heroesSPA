let bodyParser = require('body-parser');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path')
let mongoose;
try {
  mongoose = require("mongoose");
} catch (e) {
  console.log(e);
}


// const enableCORS = function (req, res, next) {
//   if (!process.env.DISABLE_XORIGIN) {
//     const allowedOrigins = ["https://localhost:4200"];
//     const origin = req.headers.origin;
//     if (!process.env.XORIGIN_RESTRICT || allowedOrigins.indexOf(origin) > -1) {
//       console.log(req.method);
//       res.set({
//         "Access-Control-Allow-Origin": origin,
//         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//         "Access-Control-Allow-Headers":
//           "Origin, X-Requested-With, Content-Type, Accept",
//       });
//     }
//   }
//   next();
// };




const app = express()
mongoose.connect(process.env.MONGO_URI_COLLECTION, { useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

let userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  pass: { type: String, required: true },
  email: String,
  username: String
})

let tokenSchema = new mongoose.Schema({
  hash : { type: String, required: true },
  user: userSchema,
})

let heroSchema = new mongoose.Schema({
  id: { type: String, required: true },
  superhero: String,
  publisher: String,
  alter_ego: String,
  first_appearance: String,
  characters: String,
  alt_img: String
})

let heroes = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  heroes: [heroSchema]
})

let users = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  users: [userSchema]
}
)

const Heroes = mongoose.model('heroes', heroes);
const Users = mongoose.model('users', users);
const Tokens = mongoose.model('tokens', tokenSchema);

const findAllHeroes = async () => Heroes.findById('6660c4785617929046221a3e');
const findAllUsers = async () => Users.findById('665801cb5617929046e6fc1c');
 


// app.get('/heroes', function (req, res, next) {
//   findAllHeroes().then(collection => {
//     res.send(collection.heroes)
//   }).catch(err => {
//     return next(err)
//   })
// })

app.get('/api/heroes/:id', function (req, res, next) {
  const id = req.params.id;
  findAllHeroes().then(collection => {
    const hero = collection.heroes.find(hero => hero.id === id)
    if (hero) {
      res.send(hero)
    } else {
      res.status(404).send('Hero not found')
    }
  }).catch(err => {
    return next(err)
  })
})

app.get('/api/heroes', function(req, res, next){
  req.query.q = req.query.q || '';
  req.query._limit = req.query._limit;
  const query = req.query.q.toLowerCase();
  const limit = req.query._limit;
  findAllHeroes().then(collection => {
    const heroes = collection.heroes.filter(hero => hero.superhero.toLowerCase().includes(query)).slice(0, limit);
    res.send(heroes)
  }).catch(err => {
    return next(err)
  })
})

app.post('/api/heroes', function (req, res, next){
  findAllHeroes().then(collection => {
    collection.heroes.push(req.body);
    collection.save().then(data => res.send(data.heroes[data.heroes.length-1])).catch(err => {
      return next(err)
    })
  }).catch(err => {
    return next(err)
  })
})

app.patch('/api/heroes/:id', function (req, res, next){
  findAllHeroes().then(collection => {
    const hero = collection.heroes.filter(hero => hero.id==req.params.id)[0];
    for (const key in req.body) {
      if (req.body.hasOwnProperty(key)) {
        hero[key] = req.body[key];
      }
    }
    collection.save().then(data => res.send(hero)).catch(err => {
      return next(err)
    })
  }).catch(err => {
    return next(err)
  })
})

app.delete('/api/heroes/:id', function(req, res, next){
  findAllHeroes().then(collection => {
    collection.heroes = collection.heroes.filter(hero => hero.id !== req.params.id);
    collection.save().then(data => res.send(data.heroes)).catch(err => {
      return next(err)
    })
  }).catch(err => {
    return next(err)
  })
})

app.post('/api/login', function (req, res, next){
  const {email, pass} = req.body;
  findAllUsers().then(collection => { 
    const currentUser = collection.users.find(user => user.email === email && user.pass === pass);
    if (!currentUser) {
      res.status(401).send('User not found');
      return;
    }
    Tokens.create({hash: Math.random().toString(36).substring(2), user: currentUser}).then(data => res.send(data)).catch(err => {
      return next(err)
    })
  }).catch(err => {
  return next(err)
})})

app.get('/api/login/:hash', function (req, res, next){
  Tokens.findOne({hash: req.params.hash}).then(data => {
    res.send(data.user)
  }).catch(err => {
    return next(err)
  })
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.listen(3000)