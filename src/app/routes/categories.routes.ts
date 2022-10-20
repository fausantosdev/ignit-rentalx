import { Router } from 'express'

import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository'
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService'

const categoryRoutes = Router()

const categoriesRepository = new CategoriesRepository()

categoryRoutes.post('/', (request, response) => {
    const { name, description } = request.body

    const createCategoryService = new CreateCategoryService(categoriesRepository)

    createCategoryService.execute({ name, description })

    return response.status(201).json({ a: 'b' })
})

categoryRoutes.get('/', (request, response) => {

    const cats = categoriesRepository.list()

    return response.status(201).json(cats) 
})

export { categoryRoutes }

