import { React, useState } from 'react';
import { useNavigate } from "react-router-dom";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';

import AuthenticationService from './AuthenticationService.js';

const LoginComponent = (props) => {

    let navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [hasLoginFailed, setHasLoginFailed] = useState(false);
    const [showSuccesMessage, setShowSuccesMessage] = useState(false);

    const handleUsernameChange = (event) => {
        const { value } = event.target;
        setUsername(value);
    }

    const handlePasswordChange = (event) => {
        const { value } = event.target;
        setPassword(value);
    }

    const loginClicked = () => {
        if (username === 'test' && password === 'test') {
            AuthenticationService.registerSuccessfulLogin(username, password);
            props.click(AuthenticationService.isUserLoggedIn());
            setHasLoginFailed(false);
            setShowSuccesMessage(true);
            navigate(`/welcome/${username}`);
        } else {
            setHasLoginFailed(true);
            setShowSuccesMessage(false);
        }
    }

    return (
        <>
            <Card sx={{ maxWidth: 450 }} style={{marginTop: "50px"}}>
                <CardContent className='text-center'>
                    <Typography gutterBottom variant="h5" component="div">
                        <h1>Todo Application</h1>
                    </Typography>

                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="username"
                            label="Username"
                            variant="standard"
                            type="text"
                            name="username"
                            value={username}
                            onChange={handleUsernameChange} />
                        <TextField
                            id="password"
                            label="Password"
                            variant="standard"
                            type="password"
                            name="password"
                            value={password}
                            onChange={handlePasswordChange} />
                    </Box>
                    <Button variant="contained" onClick={loginClicked}>Login</Button>
                </CardContent>
            </Card>
            <ShowCredensials hasLoginFailed={hasLoginFailed} showSuccesMessage={showSuccesMessage} />
        </>
    )
}

function ShowCredensials(props) {
    if (props.hasLoginFailed) {
        return (
            <Stack spacing={2} sx={{ width: '100%' }} style={{ marginTop: "20px" }}>
                <Alert severity="error">Credensial incorrect!</Alert>
            </Stack>
        )
    } else if (props.showSuccesMessage) {
        return (
            <Stack spacing={2} sx={{ width: '100%' }} style={{ marginTop: "20px" }}>
                <Alert severity="success">Credensial are correct!</Alert>
            </Stack>
        )
    }
    return null;
}

export default LoginComponent;