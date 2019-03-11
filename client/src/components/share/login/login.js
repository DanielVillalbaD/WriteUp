import React, { Component } from "react";
import axios from 'axios-jsonp-pro';
import {
  Paper,
  Avatar,
  Typography,
  Input,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel
} from '@material-ui/core';
import LockIcon from '@material-ui/icons/LockOutlined'
    ;
import { withStyles } from '@material-ui/core/styles';
import "./login.scss";
import '../variables.scss';

import { Background } from '../../home/components/background/background';
import { Button } from '../../home/components/button';
import {NavLink} from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleClick(event){
        var apiBaseUrl = "http://localhost:3001/api/Users/login";
        var self = this;
        var payload={
            "email":this.state.username,
            "password":this.state.password
        }
        axios.post(apiBaseUrl+'login', payload)
            .then(function (response) {
                console.log(response);
                if(response.data.code == 200){
                    console.log("Login successfull");
                    var uploadScreen=[];
                    self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
                }
                else if(response.data.code == 204){
                    console.log("Username password do not match");
                    alert("username password do not match")
                }
                else{
                    console.log("Username does not exists");
                    alert("Username does not exist");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="layout">
                <Background/>
                <Paper className="papel columnaFlex">
                    <Avatar className="color-avatar">
                        <LockIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <form className="columnaFlex">
                        <FormControl className="w-100">
                            <InputLabel>Email</InputLabel>
                            <Input id="email" name="email" autoComplete="email" autoFocus
                                   onChange = {(event,newValue) => this.setState({username:newValue})}/>
                        </FormControl>
                        <FormControl className="w-100">
                            <InputLabel>Contraseña</InputLabel>
                            <Input
                                name="password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange = {(event,newValue) => this.setState({password:newValue})}
                            />
                        </FormControl>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Recuerdame"
                        />
                        <Button primary={true} onClick={(event) => this.handleClick(event)}>
                            Login
                        </Button>
                    </form>
                    <Typography component="p">
                        ¿Todavia no tienes cuenta? <NavLink to="/signup" linktext="Registro" activeClassName="isActive" className="header-link">
                        Registro
                    </NavLink>
                    </Typography>
                </Paper>
            </div>
        );
    }
}

export default Login;