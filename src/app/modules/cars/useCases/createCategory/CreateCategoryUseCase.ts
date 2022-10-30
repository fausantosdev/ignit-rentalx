import { CategoriesRepository } from '../../repositories/CategoriesRepository'
import { ICategoryRepositories } from '../../repositories/ICategoriesRepository'

interface IRequest {
    name: string,
    description: string
}

/**
 *  [x] - Definir o tipo de retorno
 *  [x] - Alterar retorno de error
 *  [x] - Acessar o repositório
 *  [x] - Retornar algo
 */

class CreateCategoryUseCase {
    /*private categoriesRepository: CategoriesRepository

    constructor (categoriesRepository: CategoriesRepository) {
        this.categoriesRepository = categoriesRepository
    }*/

    // Inversão de dependência.      atributo                  tipo 
    constructor (private categoriesRepository: ICategoryRepositories) {}

    execute({name, description}: IRequest): void {

        const categoryAwearyExixts = this.categoriesRepository.findByName(name)

        if(categoryAwearyExixts){
            throw new Error('Categoria já existe')
        }
    
        this.categoriesRepository.create({ name, description })
    }
}

export { CreateCategoryUseCase }