import { IClans, IFilterClan } from '../../interfaces/IClans'
import { AxiosService } from '../index'
import { ISurePromise } from '../../interfaces/ISurePromise'
import { IResponseClash } from '../../../server/server'

export default class Clan {
    async getClans(filter: IFilterClan): Promise<ISurePromise<IResponseClash<IClans[]>>> {
        const axiosService: AxiosService<IResponseClash<IClans[]>, IFilterClan> = new AxiosService()

        try {
            return await axiosService.get(filter, '/clans')
        } finally {

        }

    }
}