import React from 'react';
import '../index.css';

class FrontPage extends React.Component {
    constructor() {
        super()
        this.HandleClick = this.HandleClick.bind(this)
    }

    HandleClick(event) {
        if (event.target.name === "returnUser") {
            console.log("return user")
            this.props.history.push('/returnuser')
        }
        else if (event.target.name === "newUser") {
            console.log("new user")
            const name = prompt("enter your name")
            fetch("http://localhost:4000/adduser?name=" + name)
            setTimeout(1000)
            fetch("http://localhost:4000/getuser?name=" + name)
                .then(response => response.json())
                .then(data => {
                    console.log(data["data"])
                    let id = data["data"][0]["MAX(uid)"]
                    console.log(id)
                    alert("Your new ID is " + id + " Please remember your ID for future log in")
                })
                .catch(err => console.error(err))
            alert("Your account has been created")            
        }
    }

    render() {
        return (
            <div>
                <h1 className="Header">Gym Progress</h1>
                <button type="button" className="beginButton" onClick={this.HandleClick} name="newUser"> New User </button>
                <button type="button" className="beginButton" onClick={this.HandleClick} name="returnUser"> Return User </button>           
            </div>
        )
    }
    
}

export default FrontPage