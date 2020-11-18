const url = `http://localhost:4000/api/v1/brewery/search`

class BrewerySearchModel {
    static all = () => {
        return fetch(`${url}?q=seattle`).then(res => res.json())
    }

    // static show = (breweryId) => {
    //     return fetch(`${url}/${breweryId}`).then(res => res.json())
    // }
}

// static all = () => {
//     return fetch(`${url}/`).then(res => res.json())
// }

// static show = (breweryId) => {
//     return fetch(`${url}/${breweryId}`).then(res => res.json())
// }

// static create = (breweryData) => {
//     return fetch(`${url}/`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(breweryData)
//     }).then(res => res.json())
// }

export default BrewerySearchModel