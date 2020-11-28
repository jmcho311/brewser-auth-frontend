const url = `http://localhost:4000/api/v1/brewery`

class BreweryModel {
    static all = () => {
        return fetch(`${url}/`).then(res => res.json())
    }

    static show = (breweryId) => {
        return fetch(`${url}/${breweryId}`).then(res => res.json())
    }

    static showPost = (userId) => {
        return fetch(`${url}/userPost/${userId}`).then(res => res.json())
    }

    static create = (breweryData) => {
        return fetch(`${url}/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(breweryData)
        }).then(res => res.json())
    }

    static edit = (breweryId) => {
        return fetch(`${url}/${breweryId}`, {
            method: "PUT"
        }).then(res => res.json())
    }

    static destroy = (breweryId) => {
        // return fetch(`${url}/${breweryId}`).then(res => res.json())
        return fetch(`${url}/${breweryId}`, {
            method: "DELETE"
        }).then(res => res.json())
    }
}



export default BreweryModel