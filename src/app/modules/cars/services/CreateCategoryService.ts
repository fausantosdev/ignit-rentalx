import { CategoriesRepository } from '../repositories/CategoriesRepository'

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

class CreateCategoryService {
    /*private categoriesRepository: CategoriesRepository

    constructor (categoriesRepository: CategoriesRepository) {
        this.categoriesRepository = categoriesRepository
    }*/

    // Inversão de dependência.      atributo                  tipo 
    constructor (private categoriesRepository: CategoriesRepository) {}

    execute({name, description}: IRequest): void {

        const categoryAwearyExixts = this.categoriesRepository.findByName(name)

        if(categoryAwearyExixts){
            throw new Error('Categoria já existe')
        }
    
        this.categoriesRepository.create({ name, description })
    }
}

export { CreateCategoryService }