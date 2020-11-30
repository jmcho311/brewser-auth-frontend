import React from 'react'
import { Redirect } from 'react-router-dom'

const Reset = () => {
    window.localStorage.clear()
    return (
        <Redirect to='/' />
    )
}

export default Reset