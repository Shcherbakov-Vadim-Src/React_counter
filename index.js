import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Counter from './counter';

class App extends Component {
    render(){
        return  (
            <Counter />
        );   
    }
}


const rootElement = document.querySelector('#root');
ReactDOM.render(<App />, rootElement);