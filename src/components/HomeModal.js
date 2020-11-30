import React , { Component } from "react"
import './HomeModal.scss'

export default class HomeModal extends Component {
    setLegal = () => {
        localStorage.setItem('legal', true)
        this.props.onClose()
    } 

    setNotLegal = () => {
        localStorage.setItem('legal', false)
        window.location.assign("https://us.teletubbies.com/")
    } 

    render() {
        if(!this.props.show){
            return null
        }

        return (
            <div className="masterModal">
                <div className="homeModal">
                    <div className="modalContents">
                        <h5 id="ageVerify"> Are you least 21 years of age?</h5>
                        <button className="modalBtn" onClick={ this.setLegal } >
                            Beer me!
                        </button>
                        <button className="modalBtn" onClick={ this.setNotLegal }>
                            I wish!
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}