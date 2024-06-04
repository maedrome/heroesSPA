require('dotenv').config();
const express = require('express')
let mongoose;
try {
  mongoose = require("mongoose");
} catch (e) {
  console.log(e);
}

const enableCORS = function (req, res, next) {
  if (!process.env.DISABLE_XORIGIN) {
    const allowedOrigins = ["https://localhost:4200"];
    const origin = req.headers.origin;
    if (!process.env.XORIGIN_RESTRICT || allowedOrigins.indexOf(origin) > -1) {
      console.log(req.method);
      res.set({
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      });
    }
  }
  next();
};



const app = express()
mongoose.connect(process.env.MONGO_URI_COLLECTION, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(enableCORS);
let userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  user: String,
  email: String
})
let heroSchema = new mongoose.Schema({
  id: { type: String, required: true },
  superhero: String,
  publisher: String,
  alter_ego: String,
  first_appearance: String,
  characters: String
})

let heroes = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  heroes: [heroSchema]
})

const Heroes = mongoose.model('heroes', heroes)

const findAllHeroes = async () => Heroes.findById('665801875617929046e6f3cf')

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/heroes', function (req, res, next) {
  findAllHeroes().then(collection => {
    res.send(collection.heroes)
  }).catch(err => {
    return next(err)
  })
})

app.get('/heroes/:id', function (req, res, next) {
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

app.listen(3000)