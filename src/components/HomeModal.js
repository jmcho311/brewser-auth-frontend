import React , { Component } from "react";
import './HomeModal.scss';

export default class HomeModal extends Component {

    render() {

        if(!this.props.show){
            return null;
        }

        return (
            <div className="homeModal">

                {/* <div className="imgContainer">
                    <img src="https://i.imgur.com/5y6Jp8c.png?1" alt="beer" id="modalImg" />
                </div> */}
                <div className="modalContents">
                    {/* <h2>Welcome to Brewser!</h2> */}

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
            </div>
        )
    }
}