/** ToDo jsonToURLEncoded
 * Se formatean todos los objetos para convertilos en query params
 * @param jsonString
 * @type any
 * @return string
 */

const jsonToURLEncoded = (jsonString: any): string => {
    return validateSchema(jsonString)
        .map(function (key, index, value) {
            return (
                encodeURIComponent(key) + '=' + encodeURIComponent(jsonString[key])
            )
        })
        .join('&')
}

/** ToDo jsonToURLEncoded
 * Se valida que ninguna variable esté vacía para eliminarla del qery
 * @param object
 * @type any
 * @return string[]
 */

const validateSchema = (object: any): string[] => {
   return  Object.keys(object).map((key, index, keys) => {
       console.log(object[key])
       console.log(object)
        if (!object[key] || object[key] === undefined){
            delete object[key]
        }
        return key
    })
}

export default jsonToURLEncoded