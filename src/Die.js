import React, { Component } from 'react'
import './Die.css'

class Die extends Component {


    render() {

        return (

            <i className={`fas fa-dice-${this.props.value} ${this.props.rolling && 'shaking'}`}></i>

        )
    }
}

export default Die