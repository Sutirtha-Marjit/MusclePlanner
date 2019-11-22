import React from 'react';
import ReactDOM from 'react-dom';
import {SlideShow} from './components/slideshow/slideshow.comp';
import {Login} from './components/login/login.comp';

export class Application extends React.Component{
    constructor(props){
        super(props);
    }

    generateSlides(){
        const slides = [];
        for(let i=1;i<8;i++){
            slides.push(`./images/slides/PIC000${i}.jpg`);
        }

        return slides;
    }

    render(){
        
        const slides = [];
        const rootTSX = 
        <div>
        
        <SlideShow slides={this.generateSlides()}></SlideShow>
        <div className="mainContent">
        <header className="brand-logo">MusclePlanner</header>
        <Login></Login>
        </div>
        
        </div>;

        return rootTSX;
    }
}

export function init(div){
    const app = new Application({});
    ReactDOM.render(app.render(),div);
}

init(document.querySelector('.wrapper'));