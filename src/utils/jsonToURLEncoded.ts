
const jsonToURLEncoded = (jsonString: any): string => {
    return validateSchema(jsonString)
        .map(function (key, index, value) {
            return (
                encodeURIComponent(key) + '=' + encodeURIComponent(jsonString[key])
            )
        })
        .join('&')
}

const validateSchema = (object: any) => {
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