import React, { Component } from 'react';
import {NavBar} from './NavBar.jsx';
import {Display} from './Display.jsx';

class App extends Component {
    //begin at home slide index
    constructor(props) {
    	super(props);
    	this.state = {
            slideIndex: 1
    	}
        this.handleSlide = this.handleSlide.bind(this);
  	}

    //function to pass to tabs for handling tab slide
    handleSlide(value) {
    this.setState({
        slideIndex: value
        });
    };

    //call functional components as functions
    render() {
        return (
            <div>
                {NavBar({slideIndex:this.state.slideIndex})}
                {Display({slideIndex:this.state.slideIndex,handleSlide:this.handleSlide})}
            </div>
        );
    }
}

export {App};

