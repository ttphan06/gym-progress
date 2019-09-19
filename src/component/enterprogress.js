import React from 'react';

class EnterProgress extends React.Component {
    constructor() {
        super()
        this.state = {
            ename : "",
            mins : 0,
            cals : 0,
            sets : 0,
            reps : 0,
            edate : ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        console.log(this.state)
        fetch("http://localhost:4000/addexercise?userId=" 
            + this.props.parent.id + "&ename=" + this.state.ename
            + "&mins="+ this.state.mins + "&cals=" + this.state.cals
            + "&sets=" + this.state.sets + "&reps=" + this.state.reps
            + "&visitdate=" + this.state.edate)
        event.preventDefault()
        console.log("DONE")
    }

    handleChange(event) {
        if (event.target.name === "ename") 
            this.setState({ename : event.target.value})
        else if (event.target.name === "minutes") 
            this.setState({mins : parseInt(event.target.value)})
        else if (event.target.name === "cals") 
            this.setState({cals : parseInt(event.target.value)})
        else if (event.target.name === "sets") 
            this.setState({sets : parseInt(event.target.value)})
        else if (event.target.name === "reps") 
            this.setState({reps : parseInt(event.target.value)})
        else if (event.target.name === "edate") 
            this.setState({edate : event.target.value})

    }

    render() {
        if (this.props.parent.enter === true) {
            return (
                <div>
                    <form className="EnterProgress" onSubmit={this.handleSubmit}>
                        <input type="text" name="ename" placeholder="exercise name" onChange={this.handleChange}/>
                        <input type="text" name="minutes" placeholder="minutes"onChange={this.handleChange}/>
                        <input type="text" name="cals" placeholder="cals" onChange={this.handleChange}/>
                        <input type="text" name="sets" placeholder="sets" onChange={this.handleChange}/>
                        <input type="text" name="reps" placeholder="reps" onChange={this.handleChange}/>
                        <input type="text" name="edate" placeholder="exercise date" onChange={this.handleChange}/>
                        <input type="submit" value="Submit"/>
                    </form> 
                </div>
            )
        }
        return (
            <h1></h1>
        )
    }
}

export default EnterProgress;