import React, { Component, Fragment } from 'react'
import spinner from './spinner.gif'

const spinner = () => {
    return (
        <Fragment>
            <img src={spinner} alt="loading ..." style={gifStyle} />

        </Fragment>
    )
}

gifStyle = {
    width: '200px',
    margin: 'auto',
    display: 'block'
}

export default loading
