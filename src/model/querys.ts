import {Collection} from 'mongodb'
import {Request, Response} from 'express'

interface resultado {
    _id: string
    id: number
    name: string
    weight: number
}


class Dogs {
    private dogs: Array<resultado>

    constructor() {
        this.dogs = []
    }

    selectAll(req: Request, res: Response, collection: Collection<any[]>) {
        collection.find().toArray()
        .then((result: any[]) => {
            this.dogs = result
            res.json(this.dogs)
        })
        .catch((error: any) => console.error(error))
    }

    selectOne(req: Request, res: Response, collection: Collection<any[]>) {
        collection.find(req.body).toArray()
        .then((result: any) => {
            this.dogs = result
            res.json(this.dogs)
        })
        .catch((error: any) => console.error(error))
    }

    postOne(req: Request, res: Response, collection: Collection<any[]>) {
        collection.insertOne(req.body)
        .then((result: any) => {
            this.dogs = result
            res.json(this.dogs)
        })
        .catch(error => console.error(error))
    }
}

export default new Dogs