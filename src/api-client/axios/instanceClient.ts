import axios from 'axios'

/** ToDo Config Axios
 * Configuración de axios con la base url direccionada hacia el servidor local
 */

const apiClient = axios.create({
    baseURL: 'http://localhost:5000/api/',
})

export default apiClient
