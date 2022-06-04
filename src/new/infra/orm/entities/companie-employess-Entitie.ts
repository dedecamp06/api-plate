import { CompaniesEntitie } from "./companiesEntitie";

export interface CompanieEmployessEntitie {
    id: number,
    companiesId: number,
    cpfColaborador: string,

    companie?: CompaniesEntitie,
}