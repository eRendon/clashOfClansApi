import './Spinner.css'

interface IProps {
    show: boolean
}

function spinner(props: IProps) {

    /** ToDo showComponent
     * Se valida la propiedad para mostrar el loader
     */

    const showComponent = () => {
        if (props.show) {
            return 'show'
        }
    }
        return (
            <div>
                <div className="overlay"></div>
                <div  className={`spanner ${showComponent()}`}>
                    <div className={`loader ${showComponent()}`}></div>
                    <p>Estamos buscando los clanes.</p>
                </div>
            </div>
        )
}

export default spinner