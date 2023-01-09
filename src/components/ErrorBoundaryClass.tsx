import React, { Component } from 'react'

type errorProps = {
  children:React.ReactNode,
  generator:()=> void,
  num:number
}

type IState = {
  hasError:boolean
}

export class ErrorBoundaryClass extends Component <errorProps,IState> {
    constructor(props:errorProps) {
      super(props)
    
      this.state = {
        hasError:false
      }
    }

     // Update state so the next render will show the fallback UI.
    static getDerivedStateFromError(error:unknown) {
        return { hasError: true };
    }

    // function log the error to an error reporting service
    componentDidCatch(error:unknown,info:unknown){
        console.log(error)
        console.log(info)
    }

  render() {
    if(this.state.hasError){
        return <>
        <h4>Number less than 5!!</h4>
        <button onClick={()=>{this.setState({hasError:false},()=>this.props.generator())}}>Reset</button>
        </>;   
    }
    return this.props.children
  }
}

export default ErrorBoundaryClass