import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllRepertoirez = () => {
    return axios(`${apiUrl}/repertoirez`)
}