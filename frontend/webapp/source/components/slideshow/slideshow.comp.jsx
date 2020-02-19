import React from 'react';
import ReactDOM from 'react-dom';

export class SlideShow extends React.Component{

    constructor(props){
        super(props);
        this.showID=0;
        this.count=0;
        this.delay=6500;
        this.styleObj={
            background:this.getGradient()
        };
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

    getGradientConfig(){
        const colors = [
            {start:'#bf04db',stop:'##e14310'},
            {start:'#189add',stop:'#34a203'},
            {start:'#ed1159',stop:'#8f08c7'},
            {start:'#14c74a',stop:'#177aa8'},
            {start:'#cecece',stop:'#828282'},
        ]
        const randomNumber = (min, max)=>{  
            return Math.floor(Math.random() * (max - min) + min); 
        }; 
        const r = randomNumber(0,colors.length-1);
        return colors[randomNumber(0,colors.length-1)];
    }

    getGradient(){
        const grd = this.getGradientConfig();
        return `linear-gradient(0deg, ${grd.start}, ${grd.stop})`;
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
        const slideshowContent = <div className={wrapClass} style={this.styleObj}>
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