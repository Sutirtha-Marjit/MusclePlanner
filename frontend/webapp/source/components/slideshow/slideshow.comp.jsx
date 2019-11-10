import React from 'react';
import ReactDOM from 'react-dom';

export class SlideShow extends React.Component{

    constructor(props){
        super(props);
        this.showID=0;
        this.count=0;
        this.delay=6500;
        this.state = {
            selection:0,
            baseClass:'landscape'
        };
        
    }

    eventBind(){
        
        const fn = ()=>{
            const h = window.outerHeight;
            const w = window.outerWidth;

            let baseClass = (h>w) ? 'potrait' : 'landscape';
            this.setState({baseClass:baseClass});
        }

        window.onresize = fn;
        window.onorientationchange = fn;
        
    }

    componentDidMount(){
        this.clockStrat();
        this.eventBind();
    }

    clockStrat(){
        clearInterval(this.showID);
        this.count=0;
        this.showID = setInterval(()=>{
            if(this.count<this.props.slides.length-1){
                this.count++;                
            }else{
                this.count=0;
            }
            this.setState({selection:this.count});            
        },this.delay);
    }

    getSlides(){
        const slideArr = [];
        
        if(this.props.slides && this.props.slides.length){
            this.props.slides.forEach((element,i) => {
                let op=0;
                let scale=1.1;
                if(i===this.state.selection){op=1;scale=1;}
                const styleObj = {
                    backgroundImage:`url("${element}")`,
                    backgroundPosition:`center center`,
                    backgroundRepeat:'no-repeat',
                    opacity:op,
                    transform:`scale(${scale})`
                };
                slideArr.push(
                    <Slide styleObj={styleObj} text={this.state.selection}></Slide>
                );
            });
            
        }

        return slideArr;
    }

    render(){

        const wrapClass = `slideshow-container ${this.state.baseClass}`;
        const slideshowContent = <div className={wrapClass}>
            <div className="slideshow-pack">
                {this.getSlides()}
            </div>
        </div>

        return slideshowContent;
    }

}

class Slide extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        const slideContent = 
        <div className="slide">
            <div className="slide-image-container" style={this.props.styleObj}>  
            {this.props.text}                          
            </div>
        </div>

        return slideContent;
    }

}