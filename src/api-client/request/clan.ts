import { AxiosService } from '../axios'
import { IFilterClan } from '../../interfaces/IClans'

export default class Clan {
    async getClans (filter: IFilterClan) {
        const axiosService = new AxiosService()

        try {
            return await axiosService.get(filter, '/clans')
        } finally {

        }
    }
}