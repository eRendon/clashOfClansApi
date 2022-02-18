import { AxiosService } from '../axios'
import { IClans, IFilterClan } from '../../interfaces/IClans'
import { ISurePromise } from '../../interfaces/ISurePromise'

export default class Clan {
    async getClans (filter: IFilterClan): Promise<ISurePromise<IClans[]>> {
        const axiosService: AxiosService<IClans[], IFilterClan> = new AxiosService()

        try {
            return await axiosService.get(filter, '/clans')
        } finally {

        }
    }
}