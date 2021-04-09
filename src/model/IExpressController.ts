import { Collection } from "mongodb";
import { Request, Response } from 'express'

/**
 * Interface para o ExpressController assinar
 */
interface IExpressController {
    selectAll(req: Request, res: Response, collection: Collection<any[]>): any
    selectOne(req: Request, res: Response, collection: Collection<any[]>): any
    postOne(req: Request, res: Response, collection: Collection<any[]>): any
}

export default IExpressController