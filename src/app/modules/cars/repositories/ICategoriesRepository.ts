import { Category } from '../models/Category'

interface ICategoryRepositories {
    finsByName(name: string): Category
    list(): Category[]
    create(name: string, description: string): void
}    