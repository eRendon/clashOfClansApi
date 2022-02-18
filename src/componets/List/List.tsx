import { IClans } from '../../interfaces/IClans'
import { render } from 'react-dom'

interface Props {
    clans: IClans[]
}

function List(props: Props) {

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <table className="table table-image">
                            <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Foto</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Miembros</th>
                                <th scope="col">Tipo de clan</th>
                                <th scope="col">Guerras Ganadas</th>
                                <th scope="col">Guerras Perdidas</th>
                            </tr>
                            </thead>
                            <tbody>
                            {props.clans.map((clan) => {
                                return (<tr>
                                    <td scope="row">
                                        { clan.tag }
                                    </td>
                                    <td className="w-25">
                                        <img
                                            src={clan.badgeUrls.small}
                                            className="img-fluid img-thumbnail" alt="Sheep"/>
                                    </td>
                                    <td>{clan.name}</td>
                                    <td>{clan.members}</td>
                                    <td>{clan.type}</td>
                                    <td>{clan.warWins}</td>
                                    <td>{clan.warLosses}</td>
                                </tr>)
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List