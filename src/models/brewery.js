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
    static delete = (id) => {
        return fetch(`${url}/posts/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
}



export default BreweryModel