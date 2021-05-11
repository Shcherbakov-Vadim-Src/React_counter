import React, { Component } from 'react';

class Counter extends Component {
   state = {
      value: 0
   }

clickOnOff = (e) => {
      const paragraph = document.querySelector('.paragraph');
      if(this.state.value > -10 && this.state.value < 10) {
         this.setState({value: this.state.value - 1})
      }  
}

clickOnAdd = (e) => {
        const paragraph = document.querySelector('.paragraph');
        if(this.state.value > -10 && this.state.value < 10) {
            this.setState({value: this.state.value + 1})
   }  
}

render() {
    return (
      <div className='counter'>
         <button className="button buttonMinus" onClick={this.clickOnOff}>-</button>
         <p className="paragraph">{this.state.value}</p>
         <button className="button buttonPlus" onClick={this.clickOnAdd}>+</button>
      </div>
    );
  }
}

export default Counter;