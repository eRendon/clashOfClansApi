import './Spinner.css'

interface IProps {
    show: boolean
}

function spinner(props: IProps) {

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
                    <p>Uploading music file, please be patient.</p>
                </div>
            </div>
        )
}

export default spinner