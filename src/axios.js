import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://sasta-tinder-backend.herokuapp.com'
})

export default instance;