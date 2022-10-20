import { Router } from 'express'

import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepository' 
import { CreateSpecificationService } from '../modules/cars/services/CreateSpacificationService' 

const specificationRoutes = Router()

const categoriesRepository = new SpecificationRepository()
specificationRoutes.post('/', (request, response) => {
    
    const { name, description } = request.body

    const createSpacificationService = new CreateSpecificationService(categoriesRepository)

    createSpacificationService.execute({ name, description })

    return response.status(201).json({ a: 'specification' })
})

specificationRoutes.get('/', (request, response) => {

    return response.status(201).json('cats') 
})

export { specificationRoutes }

