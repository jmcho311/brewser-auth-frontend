const url = `http://localhost:4000/api/v1/beer`

class BeerModel {
    static all = () => {
        return fetch(`${url}/`).then(res => res.json())
    }

    static show = (category) => {
        return fetch(`${url}/category/${category}`).then(res => res.json())
    }

    static showPost = (userId) => {
        return fetch(`${url}/${userId}`).then(res => res.json())
    }

    static showBrewery = (breweryName) => {
        return fetch(`${url}/breweryPost/${breweryName}`).then(res => res.json())
    }

    static showBeer = (name) => {
        return fetch(`${url}/name/${name}`).then(res => res.json())
    }

    // static create = (beerData) => {
    //     return fetch(`${url}/`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(beerData)
    //     }).then(res => res.json())
    // }
}

export default BeerModel;
