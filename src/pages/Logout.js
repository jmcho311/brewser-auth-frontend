import React from 'react';
import './App.scss'

const Logout = () => {
    return (
        <div>
            <h1>You have successfully logged out!</h1>
            <p>Would you like to log back in? </p>
            <p>
                <a href='/login' style={ { textDecorationLine: 'underline'} }>
                Click here
                </a>
            </p>
        </div>
    );
}

export default Logout;