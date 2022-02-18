import { ISurePromise } from '../../interfaces/ISurePromise'
import { surePromise } from '../../utils/surePromise'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import jsonToURLEncoded from '../../utils/jsonToURLEncoded'
import apiClient from './instanceClient'

export class AxiosService<T, P> {
    
    /** ToDo Post Data
     * Peticiones post con la instancia de axios
     * @param payload
     * @param url
     * @type string
     * @return Promise<ISurePromise<T>>
     */

    async post (payload: P, url: string): Promise<ISurePromise<T>> {
        try {
            return await surePromise(apiClient.post<AxiosResponse>(url, payload))
        } catch (err) {
            throw err
        }
    }

    /** ToDo Get Data
     * Peticiones get con la instancia de axios
     * @param payload
     * @param config
     * @param url
     * @type string
     * @type AxiosRequestConfig?
     * @return Promise<ISurePromise<T>>
     */

    async get (payload: P, url: string, config?: AxiosRequestConfig): Promise<ISurePromise<T>> {
        try {
            let dataUrl = ''
            if (payload != undefined) {
                dataUrl = `${url}?${jsonToURLEncoded(payload)}`
            } else {
                dataUrl = url
            }
            return await surePromise(apiClient.get<AxiosResponse>(dataUrl, config))
        } catch (err) {

            throw err
        }
    }
}