import { IClans } from '../../interfaces/IClans'
import { render } from 'react-dom'

interface Props {
    clans: IClans[]
}

function List(props: Props) {

    return (
        <div>
            {props.clans.map((propKey) => {
                return <p>{propKey.tag}</p>
            })}
        </div>
    )
}

export default List