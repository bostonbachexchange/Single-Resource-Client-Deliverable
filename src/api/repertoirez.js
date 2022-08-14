import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllRepertoirez = () => {
    return axios(`${apiUrl}/repertoirez`)
}

export const getOneRepertoire = (id) => {
    return axios(`${apiUrl}/repertoirez/${id}`)
}

export const CreateRepertoire = (user, newRep) => {

    console.log('createRep in api was hit')
    console.log('this is user', user)
    console.log('this is newRep', newRep)
}