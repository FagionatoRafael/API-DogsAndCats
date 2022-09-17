import {Collection} from 'mongodb'
import { Request, Response } from 'express'
import ResultadoModel from '../model/ResultadoModel'
import IExpressController from '../model/IExpressController'

/**
 * Classe criada para controlar os requests
 */
class ExpressController implements IExpressController {

    /**
     * parametro privado result
     */
    private result: Array<ResultadoModel> = []

    /**
     * 
     * @param req Resquest feito pelo método
     * @param res Response frito pelo método
     * @param collection A coleção selecionada
    */
    selectAll(req: Request, res: Response, collection: Collection<any[]>) {
        collection.find().toArray()
        .then((result: any[]) => {
            console.log(result)
            this.result = result.sort((a, b) => {return a.id - b.id});
            res.json(this.result)
        })
        .catch((error: any) => console.error(error))
    }

    /**
     * 
     * @param req Resquest feito pelo método
     * @param res Response frito pelo método
     * @param collection A coleção selecionada
    */
    selectOne(req: Request, res: Response, collection: Collection<any[]>) {
        collection.find(req.body).toArray()
        .then((result: any) => {
            this.result = result
            res.json(this.result)
        })
        .catch((error: any) => console.error(error))
    }

    /**
     * 
     * @param req Resquest feito pelo método
     * @param res Response frito pelo método
     * @param collection A coleção selecionada
    */
    selectOneParams(req: Request, res: Response, collection: Collection<any[]>) {
        const id: any = {id: parseInt(req.params.id)}

        collection.find(id).toArray()
        .then((result: any) => {
            this.result = result
            res.json(this.result)
        })
        .catch((error: any) => console.error(error))
    }

    /**
     * 
     * @param req Resquest feito pelo método
     * @param res Response frito pelo método
     * @param collection A coleção selecionada
    */
    postOne(req: Request, res: Response, collection: Collection<any[]>) {
        collection.insertOne(req.body)
        .then((result: any) => {
            this.result = result
            res.json(this.result)
        })
        .catch(error => console.error(error))
    }
}

export default new ExpressController 