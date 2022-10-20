import { Category } from "../models/Category"

// Repository = manupulação de dados
// Servise = Regras de negócio

// DTO = Data Transfer Object: objeto responsável por fazer a transferência de dados entre uma camada/classe e outra
interface CreateCategoryDTO {
    name: string
    description: string
}

class CategoriesRepository {
    private categories: Category[]

    constructor () {
        this.categories = []
    }

    create ({ name, description } : CreateCategoryDTO): void {
        const category = new Category()
        
        Object.assign(category, {
            name,
            description,
            created_at: new Date()
        })

        this.categories.push(category)
    }

    list(): Category[] { 
        return this.categories
    }

    findByName(name: string): Category {
        const category = this.categories.find( category => category.name === name)
        
        return category
    }
}

export { CategoriesRepository }