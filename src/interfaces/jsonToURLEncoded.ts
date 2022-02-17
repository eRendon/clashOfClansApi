const jsonToURLEncoded = (jsonString: any): string => {
    return Object.keys(jsonString)
        .map(function (key) {
            return (
                encodeURIComponent(key) + '=' + encodeURIComponent(jsonString[key])
            )
        })
        .join('&')
}

export default jsonToURLEncoded