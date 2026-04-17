import http from 'k6/http'
import { sleep, check } from 'k6'

export const options = {
    iterations: 10
}

export default function () {
    const url = 'http://localhost:3000/login';
    
    const payload = JSON.stringify({
        username: 'julio.lima',
        senha: '123456',
    })

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    }

    const response = http.post(url, payload, params)

    check(response, {
        'Validar que status code é igual a 200': (r) => r.status===200,
        'Validar que o token é uma string': (r) => typeof(r.json().token) == 'string'
    })

    sleep(1)
}