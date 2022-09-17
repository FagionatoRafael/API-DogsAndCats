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
const port = process.env.PORT || 3001;

MongoClient.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(client => {
    
    const db = client.db('DogsAndCats')
    const dogs = db.collection('Dogs')
    const cats = db.collection('Cats')
    const dogVacc = db.collection('DogsVaccines')
    const catVacc = db.collection('CatsVaccines')

    app.get('/', (req, res) => {
      res.send('API de raças de cães e gatos.')
    })
    
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
    //Seleciona um dados com o body na coleção dogs
    app.get('/dog', (req, res) => {
      EControl.selectOne(req, res, dogs)
    })

    //Rotas Dogs Vaccines 
    //Adicionar os dados na coleção Dogs vaccines
    app.post('/vaccines/dog', (req, res) => { 
      EControl.postOne(req, res, dogVacc)
    })
    //Seleciona todos os dados na coleção Dogs vaccines
    app.get('/vaccines/dog', (req, res) => {
      EControl.selectAll(req, res, dogVacc)
    })
    //Seleciona um dados com a id na coleção Dogs  vaccines
    app.get('/vaccines/dog/:id', (req, res) => {
      EControl.selectOneParams(req, res, dogVacc)
    })
    // //Seleciona um dados com o body na coleção Dogs vaccines
    // app.get('/dogs/vaccines', (req, res) => {
    //   EControl.selectOne(req, res, dogVacc)
    // })

    //Rotas Cats Vaccines 
    //Adicionar os dados na coleção Cats vaccines
    app.post('/vaccines/cats', (req, res) => { 
      EControl.postOne(req, res, catVacc)
    })
    //Seleciona todos os dados na coleção Cats vaccines
    app.get('/vaccines/cats', (req, res) => {
      EControl.selectAll(req, res, catVacc)
    })
    //Seleciona um dados com a id na coleção Cats  vaccines
    app.get('/vaccines/cats/:id', (req, res) => {
      EControl.selectOneParams(req, res, catVacc)
    })
    //Seleciona um dados com o body na coleção Cats vaccines
    // app.get('/vaccines/cats', (req, res) => {
    //   EControl.selectOne(req, res, catVacc)
    // })

    app.listen(port, () => {
      console.log('Está rodando!')
    })
  })
  .catch(error => console.error(error))

