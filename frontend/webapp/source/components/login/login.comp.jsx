import React from 'react';
import ReactDOM from 'react-dom';
import { HttpClient } from '../../services/httpclient';

export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName:'',
            password:'',
            grant:'Auth'
        };
    }

    loginAction(){
        const loginData = {
            userName:this.state.userName,
            password:this.state.passWord
        };
        HttpClient.login.post(loginData);
        HttpClient.auth.get('');
    }

    render() {
        this.loginAction = this.loginAction.bind(this);
        const loginJSX =
            <div className="container appear-slide-up">
                <br/>
                <h4 className="text-light">Login</h4>
                
                <div>
                    <label className="text-light">Username</label>
                </div>
                <div>
                    <input type="text" name="unameField" className="form-control form-control-sm transinput" />
                </div>
                <div>
                    <label className="text-light">Password</label>
                </div>
                <div>
                    <input type="password" name="unameField" className="form-control form-control-sm transinput" />
                </div>
                <hr className="bg-light"/>
                <button className="btn btn-block btn-dark text-light" onClick={this.loginAction}>Login</button>
            </div>;

        return loginJSX;
    }


}