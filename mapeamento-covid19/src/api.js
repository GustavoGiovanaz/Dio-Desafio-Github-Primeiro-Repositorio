const path = 'https://coronavirus-19-api.herokuapp.com/countries'

const headers = {
    method: 'get',
    mode: 'cors',
    cache: 'defalut'
}

function getCountry(country) {
    return fetch(`${path}/${country}`, headers)
        .then((Response) => Response.json())
}