const url = `http://localhost:4000/api/v1/brewery/search`

class BrewerySearchModel {
    static all = (userInput) => {
        return fetch(`${ url }?q=${ userInput }`).then(res => res.json())
    }

    static show = (breweryId) => {
        return fetch(`${ url }/${ breweryId }`).then(res => res.json())
    }

}

export default BrewerySearchModel