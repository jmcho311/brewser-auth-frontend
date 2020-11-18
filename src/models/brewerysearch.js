const url = `http://localhost:4000/api/v1/brewery/test`

class BrewerySearchModel {
    static all = () => {
        return fetch(`${url}`).then(res => res.json())
    }

    //static show = (breweryId) => {
    //    return fetch(`${url}/${breweryId}`).then(res => res.json())
    //}

}

export default BrewerySearchModel