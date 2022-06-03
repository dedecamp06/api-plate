
 export class FindEmployessController{
    constructor() { }

    async role() {
        try {
            const result = 'Entrou no role'
            return result
        } catch (error) {
            throw new Error('error of the controller' + error)
        }
    }
}

