import { Category } from '../models/Category'

interface CreateCategoryDTO {
    name: string
    description: string
}


interface ICategoryRepositories {
    findByName(name: string): Category
    list(): Category[]
    create({}: CreateCategoryDTO): void
}    

export { ICategoryRepositories, CreateCategoryDTO }