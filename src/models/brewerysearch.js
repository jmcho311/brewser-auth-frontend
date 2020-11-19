//Fetching from our backend's Axios API Request

const url = `http://localhost:4000/api/v1/brewery/search`

class BrewerySearchModel {
    static all = () => {
        return fetch(`${url}?q=san_diego`).then(res => res.json())
        //colorado will be user input
        //TODO: figure out how to get user input interpolated here
    }

    static show = (breweryId) => {
        return fetch(`${url}/${breweryId}`).then(res => res.json())
    }

}

export default BrewerySearchModel
