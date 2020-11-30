import React from 'react';
import './App.scss'

const Logout = () => {
    return (
        <div className="Page" id="logout">
            <h1>You have successfully logged out!</h1>

            <img src="https://images.pexels.com/photos/63633/bar-local-cong-ireland-63633.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" id="logoutImg" alt="logoutImg"/>

            <p>Would you like to log back in? </p>
            <p>
                <a 
                    href='/login' 
                    className="redirect"
                    style={ { textDecorationLine: 'underline'} }>
                Click here
                </a>
            </p>
        </div>
    );
}

export default Logout;