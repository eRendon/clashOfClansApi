import { IClans, IFilterClan } from '../../interfaces/IClans'
import { AxiosService } from '../index'
import { ISurePromise } from '../../interfaces/ISurePromise'
import { IResponseClash } from '../../../server/server'

/** ToDo Get Clans
 * Se obtienen todos los clanes desde la API externa con refente de los filtros
 * @param filter
 * @type IFilterClan
 * @return Promise<ISurePromise<IResponseClas<IClans[]>>>
 */

export default class Clan {
    async getClans(filter: IFilterClan): Promise<ISurePromise<IResponseClash<IClans[]>>> {
        const axiosService: AxiosService<IResponseClash<IClans[]>, IFilterClan> = new AxiosService()

        try {
            return await axiosService.get(filter, '/clans')
        } finally {

        }

    }
}