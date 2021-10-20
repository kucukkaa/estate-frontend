export const GET_ESTATE_BY_ID = "GET_ESTATE_BY_ID"

export function getEstateById(id){
    return {
        type : GET_ESTATE_BY_ID,
        payload : id
    }
}