import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllRepertoirez = () => {
    return axios(`${apiUrl}/repertoirez`)
}

export const getOneRepertoire = (id) => {
    return axios(`${apiUrl}/repertoirez/${id}`)
}