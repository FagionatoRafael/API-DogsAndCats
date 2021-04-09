import dotenv from 'dotenv'
import express from 'express'
import { MongoClient } from 'mongodb'
import cors from 'cors'
import EControl from './src/controller/ExpressController'

const app = express()
app.use(express.json())
app.use(cors())
dotenv.config()

const url: any = process.env.DB_CONNECTION

MongoClient.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(client => {
    
    const db = client.db('DogsAndCats')
    const dogs = db.collection('Dogs')
    const cats = db.collection('Cats')
    
    //Rotas Cats
    //Adicionar os dados na coleção cats
    app.post('/cats', (req, res) => {
      EControl.postOne(req, res, cats)
    })
    //Seleciona todos os dados na coleção cats
    app.get('/cats', (req, res) => {
      EControl.selectAll(req, res, cats)
    })
    //Seleciona um dados com a id na coleção cats
    app.get('/cats/:id', (req, res) => {
      EControl.selectOneParams(req, res, cats)
    })
    //Seleciona um dados com o body na coleção cats
    app.get('/cat', (req, res) => {
      EControl.selectOne(req, res, cats)
    })

    //Rotas Dogs
    //Adicionar os dados na coleção dogs
    app.post('/dogs', (req, res) => {
      EControl.postOne(req, res, dogs)
    })
    //Seleciona todos os dados na coleção dogs
    app.get('/dogs', (req, res) => {
      EControl.selectAll(req, res, dogs)
    })
    //Seleciona um dados com a id na coleção dogs
    app.get('/dogs/:id', (req, res) => {
      EControl.selectOneParams(req, res, dogs)
    })
    //Seleciona um dados com o body na coleção cats
    app.get('/dog', (req, res) => {
      EControl.selectOne(req, res, dogs)
    })

    app.listen('3000', () => {
      console.log('Está rodando!')
    })
  })
  .catch(error => console.error(error))

