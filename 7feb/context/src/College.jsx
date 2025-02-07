import React from 'react'

const College = ({children}) => {
  return (
    <>
    <hr />
    
      <h1>Welcome to College</h1>
      <div style={{color:"red", textDecoration:"underline" , textAlign:"center"}}>
        {children}
      </div>
    </>
  )
}

export default College
