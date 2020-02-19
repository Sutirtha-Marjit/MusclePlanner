import React from 'react';
import ReactDOM from 'react-dom';
import { SlideShow } from './components/slideshow/slideshow.comp';
import { AppRouting } from './components/app-routing/menu.comp';
import { AppHeader } from './components/app-header/appheader'
import { masterReducer, getInitialState } from './statemgnt/reducers';

export class Application extends React.Component {
    constructor(props) {
        super(props);
    }

    generateSlides() {
        const slides = [];
        for (let i = 1; i < 9; i++) {
            slides.push(`./images/slides/PIC000${i}.jpg`);
        }

        return slides;
    }

    render() {

        const rootTSX =
            <div className="innerWrapper">

                <SlideShow slides={this.generateSlides()}></SlideShow>
                <AppHeader></AppHeader>
                <div className="mainContent">                    
                <AppRouting></AppRouting>
                </div>
                

            </div>;

        return rootTSX;
    }
}

export function init(div) {
    const app = new Application({});
    ReactDOM.render(app.render(), div);
}

init(document.querySelector('.wrapper'));