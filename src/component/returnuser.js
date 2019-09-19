import React from 'react'
import '../index.css'
import EnterProgress from './enterprogress';
import ShowGymHistory from './showgymhistory';

class ReturnUser extends React.Component {
    constructor() {
        super()
        this.state = {
            id : -1,
            history : false,
            enter : false
        }
        this.HandleClick = this.HandleClick.bind(this)
    }

    HandleClick(event) {
        if (event.target.name === "enterProgress") {
            let myID = prompt("enter your id")
            this.setState({id: myID, enter: true, history: false})
        }
        else if (event.target.name === "showGymHistory") {
            this.props.history.push('/showgymhistory')
        }
    }

    render() {
        return(
            <div>
                <button type="button" className="beginButton" onClick={this.HandleClick} name="enterProgress"> Enter Progress </button>
                <button type="button" className="beginButton" onClick={this.HandleClick} name="showGymHistory"> Show Gym Progress </button>
                <EnterProgress parent={this.state}/>
            </div>
        )
    }
}

export default ReturnUser