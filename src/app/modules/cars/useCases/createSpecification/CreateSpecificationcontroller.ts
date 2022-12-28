import { Request, Response } from "express"
import { CreateSpecificationUseCase } from "./CreateSpacificationUseCase" 

class CreateSpecificationController {

    constructor(private createSpacificationService: CreateSpecificationUseCase){}     

    handle(request: Request, response: Response){
        const { name, description } = request.body

        this.createSpacificationService.execute({ name, description })
    
        return response.status(201).json({ a: 'specification' })
    }
}

export { CreateSpecificationController }