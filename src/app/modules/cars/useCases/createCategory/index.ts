import { CreateCategoryController } from './CreateCategoryController'
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

const categoriesRepository = CategoriesRepository.getIntance()
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)
const createCategoryController = new CreateCategoryController(createCategoryUseCase)

export { createCategoryController }