import { Category } from "../../models/Category"
import { CreateCategoryDTO, ICategoryRepositories } from "../ICategoriesRepository"

// Repository = manupulação de dados
// Servise = Regras de negócio

// DTO = Data Transfer Object: objeto responsável por fazer a transferência de dados entre uma camada/classe e outra

class CategoriesRepository implements ICategoryRepositories{
    private categories: Category[]

    private static INSTANCE: CategoriesRepository

    private constructor () {
        this.categories = []
    }

    public static getIntance (): CategoriesRepository {
        if (!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository()
        }

        return CategoriesRepository.INSTANCE
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