import { ListCategoriesController } from "./ListCategoriesController"
import { ListCategoriesUseCase } from "./ListCategoriesUseCase"
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'

const listCategoriesRepository = CategoriesRepository.getIntance()
const listCategoryUseCase = new ListCategoriesUseCase(listCategoriesRepository)
const listCategoriesController = new ListCategoriesController(listCategoryUseCase)

export { listCategoriesController }