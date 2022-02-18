import { AxiosService } from '../axios'
import { IClans, IFilterClan } from '../../interfaces/IClans'
import { ISurePromise } from '../../interfaces/ISurePromise'

/** ToDo Get Clans
 * Obtiene todos los clanes haciendo la petición al servidor loca
 * @param filter
 * @type IFilterClan
 * @return Promise<ISurePromise<IClans[]>>
 */

export default class Clan {
    async getClans (filter: IFilterClan): Promise<ISurePromise<IClans[]>> {
        const axiosService: AxiosService<IClans[], IFilterClan> = new AxiosService()

        try {
            return await axiosService.get(filter, '/clans')
        } finally {

        }
    }
}