import React , { Component } from "react";
import './HomeModal.scss';

export default class HomeModal extends Component {

    render() {

        if(!this.props.show){
            return null;
        }

        return (
            <div className="homeModal">

                <h1>Brewser</h1>

                <img src="https://media.istockphoto.com/photos/glass-of-fresh-and-cold-beer-on-dark-background-picture-id1058117688?k=6&m=1058117688&s=612x612&w=0&h=1BkCusD8UIR2UvaD0NhU0RPHXmYdEdqiQF2MFysBDPk=" alt="beer" />

                <h2>Welcome to Brewser, your new favorite beer browser!</h2>

                <h5> Are you least 21 years of age?</h5>
                
                <button className="modalBtn"
                    onClick={ this.props.onClose } >
                        Yes, I am!
                </button>

                <button className="modalBtn">
                    <a href="https://us.teletubbies.com/" id="modalBtn"> 
                        I wish!
                    </a>
                </button>

            </div>
        )
    }
}