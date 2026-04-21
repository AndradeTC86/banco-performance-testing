import http from 'k6/http'
const postLogin = JSON.parse(open('../fixtures/postLogin.json'))
import { getBaseURL } from '../utils/variables.js'

export function getToken(){
    const url = getBaseURL() + '/login'
    
    const payload = JSON.stringify(postLogin)

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    }

    const response = http.post(url, payload, params)
    return response.json('token')
}