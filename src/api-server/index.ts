import { ISurePromise } from '../interfaces/ISurePromise'
import { surePromiseServer } from '../utils/surePromise'
import apiServer from './config'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import jsonToURLEncoded from '../utils/jsonToURLEncoded'


export class AxiosService<T, P> {
    
    /** ToDo Post Data
     * Post fetch whit axios instance in apiClient
     * @param payload
     * @param url
     * @type string
     * @return Promise<ISurePromise<T>>
     */

    async post (payload: P, url: string): Promise<ISurePromise<T>> {
        try {
            return await surePromiseServer(apiServer.post<AxiosResponse>(url, payload))
        } catch (err) {
            throw err
        }
    }

    /** ToDo Get Data
     * Post fetch whit axios instance in apiClient
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
            return await surePromiseServer(apiServer.get<AxiosResponse>(dataUrl, config))
        } catch (err) {

            throw err
        }
    }
}