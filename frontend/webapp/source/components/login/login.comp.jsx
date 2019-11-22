import React from 'react';
import ReactDOM from 'react-dom';

export class Login extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return <div className="container">
            <div>
                <label className="text-light">Username</label>
            </div>
            <div>
                <input type="text" name="unameField" className="form-control form-control-sm transinput"/>
            </div>
            <div>
                <label className="text-light">Password</label>
            </div>
            <div>
                <input type="password" name="unameField" className="form-control form-control-sm transinput"/>
            </div>
        </div>;
    }


}