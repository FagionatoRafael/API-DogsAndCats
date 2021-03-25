require('dotenv/config');
import express from 'express'
import {MongoClient} from 'mongodb'
import cors from 'cors'

import Query from './src/model/querys'

const app = express()
app.use(express.json())
app.use(cors())

const url: any = process.env.DB_CONNECTION

MongoClient.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(client => {
    
    const db = client.db('DogsAndCats')
    const dogs = db.collection('Dogs')
    const cats = db.collection('Cats')
    
    //Rotas Cats
    app.post('/cats', (req, res) => {
      Query.postOne(req, res, cats)
    })

    app.get('/cats', (req, res) => {
      Query.selectAll(req, res, cats)
    })

    app.get('/cat', (req, res) => {
      Query.selectOne(req, res, cats)
    })

    //Rotas Dogs
    app.post('/dogs', (req, res) => {
      Query.postOne(req, res, dogs)
    })

    app.get('/dogs', (req, res) => {
      Query.selectAll(req, res, dogs)
    })

    app.get('/dog', (req, res) => {
      Query.selectOne(req, res, dogs)
    })

    app.listen('3000', () => {
      console.log('Está rodando!')
    })

  })
  .catch(error => console.error(error))

