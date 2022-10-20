import { ISpecificationRepository } from "../repositories/ISpecificationRepository";

interface IRequest {
    name: string
    description: string
}

class CreateSpecificationService {

    constructor (private specificationRepository: ISpecificationRepository) {

    }

    execute({ name, description }: IRequest): void {
        
        const specificationAlrearyExists = this.specificationRepository.findByName(name)
        
        if(specificationAlrearyExists){
            throw new Error('Especification alreary exists!')
        }

        this.specificationRepository.create({
            name, description
        })
    }
}

export { CreateSpecificationService }