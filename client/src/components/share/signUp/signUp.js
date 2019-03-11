import React, {Component} from "react";
import {
    Paper,
    Avatar,
    Typography,
    Input,
    FormControl,
    InputLabel,
} from '@material-ui/core';
import LockIcon from '@material-ui/icons/LockOutlined';

import {withStyles} from '@material-ui/core/styles';
import "../login/login.scss";
import '../variables.scss';

import {ButtonReverse} from '../../home/components/button-reverse';
import {NavLink} from "react-router-dom";
import axios from "axios-jsonp-pro";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleClick(event){
        var apiBaseUrl = "http://localhost:3001/api/Users";
        var self = this;
        var payload={
            "email":this.state.username,
            "password":this.state.password
        }
        axios.post(apiBaseUrl+'login', payload)
            .then(function (response) {
                console.log(response);
                if(response.data.code == 200){
                    console.log("Register successfull");
                    var uploadScreen=[];
                    self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
                }
                else if(response.data.code == 204){
                    console.log("Username or password invalid");
                    alert("Username or password invalid")
                }
                else{
                    console.log("Username already exists");
                    alert("Username already exists");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="layout">
                <Paper className="papel columnaFlex">
                    <Avatar className="color-avatar-primary">
                        <LockIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Registro
                    </Typography>
                    <form className="columnaFlex">
                        <FormControl className="w-100">
                            <InputLabel>Email</InputLabel>
                            <Input id="email" name="email" autoComplete="email" autoFocus/>
                        </FormControl>
                        <FormControl className="w-100">
                            <InputLabel>Contraseña</InputLabel>
                            <Input
                                name="password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </FormControl>
                        <ButtonReverse href="/books" type="submit" variant="contained">
                            Registro
                        </ButtonReverse>
                    </form>
                    <Typography component="p">
                        ¿Ya tienes cuenta? <NavLink to="/login" linktext="Login" activeClassName="isActive"
                                                    className="header-link-reverse">
                        Login
                    </NavLink>
                    </Typography>
                </Paper>
            </div>
        );
    }
}

export default SignUp;