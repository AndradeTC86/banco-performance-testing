import http from 'k6/http'
import { sleep, check } from 'k6'
import { getToken } from '../helpers/authentication.js'
import { getBaseURL } from '../utils/variables.js'
const postTransferencias = JSON.parse(open('../fixtures/postTransferencias.json'))


export const options = {
    iterations: 1,
    thresholds: {
        http_req_failed: ['rate<0.01'],
        http_req_duration: ['p(90)<3000', 'max<5000']
    }
}

export default function () {
    const token = getToken()

    const url = getBaseURL() + '/transferencias'

    const payload = JSON.stringify(postTransferencias)
    
    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    }

    const response = http.post(url, payload, params)

    check(response, {
        'Validar que status code é igual a 201': (r) => r.status===201,
    })

    sleep(1)
}