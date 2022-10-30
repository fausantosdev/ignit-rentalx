import { Router } from 'express'

import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository'
import { createCategoryController } from '../modules/cars/useCases/createCategory'

const categoryRoutes = Router()

const categoriesRepository = new CategoriesRepository()

categoryRoutes.post('/', (request, response) => {
    return createCategoryController.handle(request, response)
})

categoryRoutes.get('/', (request, response) => {

    const cats = categoriesRepository.list()

    return response.status(201).json(cats) 
})

export { categoryRoutes }

