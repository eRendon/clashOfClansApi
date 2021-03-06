import { ISurePromise } from '../interfaces/ISurePromise'
import { AxiosResponse } from 'axios'

/**
 ToDo SurePromise
 * Se validan todas las peticiones para crear una respuesta custom para tener un mejor manejo de errores
 * se crean dos funciones, una para el cliente y una para el servidor
 * @return Promise<ISurePromise>
 * @param promise
 * @type Promise<AxiosResponse>
 */


const surePromise = <T> (promise: Promise<AxiosResponse>): Promise<ISurePromise<T>> => (
    promise
        .then((result) => {
            const { data, status, request } = result
            return {
                success: true,
                data: data.items,
                status,
                blob: request.responseType === 'blob' ? data : null,
                paging: data.paging
            }
        })
        .catch(error => {
            console.log('el errro', error)
            if (!!error.isAxiosError && !error.response) {
                throw error
            } else {
                const { data, status } = error.response
                return Promise.resolve({ success: false, data: data.data, status, error })
            }

        })
)

const surePromiseServer = <T> (promise: Promise<AxiosResponse>): Promise<ISurePromise<T>> => (
    promise
        .then((result) => {
            const { data, status, request } = result
            return {
                success: true,
                data: data,
                status,
                blob: request.responseType === 'blob' ? data : null,
                paging: data.paging
            }
        })
        .catch(error => {
            console.log('el errro', error)
            if (!!error.isAxiosError && !error.response) {
                throw error
            } else {
                const { data, status } = error.response
                return Promise.resolve({ success: false, data: data.data, status, error })
            }

        })
)

export { surePromise, surePromiseServer }
