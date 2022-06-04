import { React, Component } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


class TodoApp extends Component {
    render() {
        return (
            <div className='TodoApp'>
                <LoginComponent />
            </div>
        )
    }
}

class LoginComponent extends Component {

    state = {
        username: "",
        password: ""
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <>
                <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Todo Application
                        </Typography>

                        <Box
                            component="form"
                            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="standard-basic"
                                label="Username"
                                variant="standard"
                                type="text"
                                name="username"
                                value={this.state.username}
                                onChange={this.handleChange} />
                            <TextField
                                id="standard-basic"
                                label="Password"
                                variant="standard"
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange} />
                        </Box>
                        <Button variant="contained">Login</Button>
                    </CardContent>
                </Card>
            </>
        )
    }
}

export default TodoApp;
