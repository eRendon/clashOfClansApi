import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import './App.css'
import List from './componets/List/List'
import { IClans, IFilterClan } from './interfaces/IClans'
import { clanRequest } from './api-client'


function App() {
    const [count, setCount] = useState(0)

    const clans: IClans[] = []

    const [ state, setState ] = useState<IFilterClan>({
        name: '',
        warFrequency: ''
    })

    const getClans = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(state)
        if (!state.name) return alert('Debe ingresar un nombre para listar los clanes')
        const { data, success } = await clanRequest.getClans(state)
        console.log(data)
        if (success) {

        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setState(() => ({
            [name]: value
        }))
    }
    useEffect(() => {
        // getClans().then()
    })

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="card shadow">
                            <div className="card-title text-center border-bottom">
                                <h2 className="p-3">Login</h2>
                            </div>
                            <div className="card-body">
                                <form onSubmit={getClans}>
                                    <div className="mb-4">
                                        <label htmlFor="name" className="form-label">Nombre</label>
                                        <input value={state.name}
                                               name="name"
                                               onChange={handleChange}
                                               type="text"
                                               className="form-control"
                                               id="name"/>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="password" className="form-label">Frecuencia de guerras</label>
                                        <input value={ state.warFrequency }
                                               name="warFrequency"
                                               onChange={handleChange}
                                               type="text"
                                               className="form-control"
                                               id="password"/>
                                    </div>
                                    <div className="mb-4">
                                        <input type="checkbox" className="form-check-input" id="remember"/>
                                        <label htmlFor="remember" className="form-label">Remember Me</label>
                                    </div>
                                    <div className="d-grid">
                                        <button type="submit" value="submit" className="btn text-light main-bg">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <List clans={ clans }></List>

        </div>
    )
}

export default App