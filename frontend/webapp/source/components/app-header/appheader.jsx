import React from 'react';
import ReactDOM from 'react-dom';


export class AppHeader extends React.Component{

    constructor(props){
        super(props);
    }

    goToHomePage(){
        
    }


    render(){
        this.goToHomePage = this.goToHomePage.bind(this);
        const headerJSX = <header className="brand-header">
        <h3 onClick={this.goToHomePage}>MusclePlanner</h3>
        <span className="menu-short-hand"></span>
        </header>;

        return headerJSX;
    }

}