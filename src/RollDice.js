import React, { Component } from 'react'
import Die from './Die'
import './RollDice.css'

class RollDice extends Component {

    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    }
    constructor(props) {
        super(props)
        this.state = {
            die1: 'one',
            die2: 'two',
            isRolling: false

        }
        this.roll = this.roll.bind(this)
    }


    genRand() {
        return Math.floor(Math.random() * 6)
    }

    roll() {
        let num1 = this.genRand()
        let num2 = this.genRand()
        this.setState({ die1: this.props.sides[num1], die2: this.props.sides[num2], isRolling: true })
        setTimeout(() =>
            this.setState({ isRolling: false }), 650)

    }
    render() {
        return (
            <div className='RollDice'>
                <div className='RollDice-container'>
                    <Die value={this.state.die1} rolling={this.state.isRolling} />
                    <Die value={this.state.die2} rolling={this.state.isRolling} />
                </div>
                <button onClick={this.roll} disabled={this.state.isRolling}>{this.state.isRolling ? 'Rolling' : 'Roll Dice!'}</button>




            </div>
        )
    }
}

export default RollDice

