import { ChangeEvent, CSSProperties, FormEvent, SetStateAction, useState } from 'react'
import './App.css'
import List from './componets/List/List'
import { IClans, IFilterClan } from './interfaces/IClans'
import { clanRequest } from './api-client'
import Spinner from './componets/Loaders/Spinner'

function App() {

    const [stateClan, setClans] = useState<IClans[]>([])

    const [state, setState] = useState<IFilterClan>({
        name: ''
    })

    const [ loadingState, setStateLoading ] = useState({
        isLoading: false
    })

    const getClans = async (e: FormEvent<HTMLFormElement>) => {
        setStateLoading({ isLoading: true })
        e.preventDefault()
        if (!state.name) return alert('Debe ingresar un nombre para listar los clanes')
        const {data, success} = await clanRequest.getClans(state)
        console.log('clanes', data)
        if (success && data.length > 0) {
            setClans(data)
        } else {
            alert('No se encontraron resutlados')
        }
        setStateLoading({ isLoading: false })
    }

    const handleChange = (call: { (value: SetStateAction<IFilterClan>): void; (arg0: (prev: any) => any): void }, e:  ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        call((prev) => ({ ...prev, [name]: value }));
    }

    const styleFilter: CSSProperties = {
        position: 'fixed',
        height: '100%'
    }

    return (
        <div className="container-fluid">
            <Spinner show={loadingState.isLoading}></Spinner>
            <div className="row">
                <div className="col-md-3 col-lg-4 fixed d-md-block bg-light sidebar collapse" style={styleFilter}>
                    <div className="container">
                        <div className="row justify-content-center mt-5">
                            <div >
                                <div className="card shadow">
                                    <div className="card-title text-center border-bottom">
                                        <h2 className="p-3">Filtros</h2>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={getClans}>
                                            <div className="mb-4">
                                                <label htmlFor="name" className="form-label">Nombre</label>
                                                <input value={state.name}
                                                       name="name"
                                                       onChange={ (status) => {
                                                           handleChange(setState, status)}}
                                                       type="text"
                                                       className="form-control"
                                                       id="name"/>
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="warFrequency" className="form-label">Frecuencia de guerras</label>
                                                <input value={ state.warFrequency }
                                                       name="warFrequency"
                                                       onChange={ (status) => {
                                                           handleChange(setState, status)}}
                                                       type="text"
                                                       className="form-control"
                                                       id="warFrequency"/>
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="minMembers" className="form-label">Mínimo de mimebros</label>
                                                <input value={ state.minMembers }
                                                       name="minMembers"
                                                       onChange={ (status) => {
                                                           handleChange(setState, status)}}
                                                       type="number"
                                                       className="form-control"
                                                       id="minMembers"/>
                                            </div>
                                            <div className="d-grid">
                                                <button type="submit" value="submit" className="btn btn-primary border  text-black main-bg">Filtrar</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-9 ms-sm-auto col-lg-8 px-md-4" >
                    <List clans={ stateClan }></List>
                </div>
            </div>
        </div>
    )
}

export default App