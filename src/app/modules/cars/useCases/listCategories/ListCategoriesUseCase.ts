import { Category } from '../../models/Category'
import { ICategoryRepositories } from '../../repositories/ICategoriesRepository'

class ListCategoriesUseCase {
    constructor (private categoriesRepository: ICategoryRepositories) {}

    execute(): Category[] {
        const categories = this.categoriesRepository.list()

        return categories
    }
}

export { ListCategoriesUseCase }