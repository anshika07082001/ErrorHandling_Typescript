import React from 'react'

type ErrorProps ={
  // error: string,
  resetErrorBoundary:()=>void,
}



const ErrorBoundaryFunc = (props:ErrorProps) => {
  return (
  <>
  <h4 className='error'>Number less than 5</h4>
  <button className='button' onClick={props.resetErrorBoundary}>Reset</button>
  </>
  )
}

export default ErrorBoundaryFunc