import React from 'react';
import ReactDOM from 'react-dom';

export class SlideShow extends React.Component{

    constructor(props){
        super(props);
        this.showID=0;
        this.count=0;
        this.delay=6500;
        this.state = {
            selection:0
        };
        
    }

    componentDidMount(){
        this.clockStrat();
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
                let scale=1.5;
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


        const slideshowContent = <div className="slideshow-container">
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