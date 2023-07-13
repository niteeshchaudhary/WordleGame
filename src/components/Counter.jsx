import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    increment(){
        this.setState({
            count:this.state.count+1
        })
    }
  render() {
    return (
        <div>          
            <div>Counter - {this.state.count} </div>
            <button onClick={() => this.increment()}>Increment</button>
        </div>
    )
  }
}

export default Counter