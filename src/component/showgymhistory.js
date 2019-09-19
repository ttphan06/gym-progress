import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getThemeProps } from '@material-ui/styles';

function createData(q,w,e,r,t,y) {
    return {q,w,e,r,t,y}
}

class ShowGymHistory extends React.Component {
    constructor() {
        super()
        this.state = {
            rows : []
        }
    }
    
    componentDidMount() {
        let id = prompt("enter your id")
        fetch("http://localhost:4000/usergymhistory?userID=" + id)
        .then(response => response.json())
        .then(data => {
            let id = data["data"]
            //console.log(id)
            let temp = []
            for(let i = 0; i < id.length; ++i) {
                let arr = {ename: id[i]['ename'], mins: id[i]['mins'], cals : id[i]['cals'], sets : id[i]['sets'], reps : id[i]['reps'], edate : id[i]['edate']}
                temp.push(arr)
            }
            this.setState({rows : temp})
        })
        .catch(err => console.error(err))    
    }

    render() {
        const classes = makeStyles(theme => ({
            root: {
            width: '100%',
            marginTop: theme.spacing(3),
            overflowX: 'auto',
            },
            table: {
            minWidth: 650,
            },
        }))
        console.log(this.state.rows)
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                    <TableCell>Exercise Name</TableCell>
                    <TableCell align="right">Minutes</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Sets</TableCell>
                    <TableCell align="right">Reps</TableCell>
                    <TableCell align="right">Dates</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.state.rows.map(row => (
                    <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                        {row.ename}
                        </TableCell>
                        <TableCell align="right">{row.mins}</TableCell>
                        <TableCell align="right">{row.cals}</TableCell>
                        <TableCell align="right">{row.sets}</TableCell>
                        <TableCell align="right">{row.reps}</TableCell>
                        <TableCell align="right">{row.edate}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </Paper>
        )
    }
}

export default ShowGymHistory