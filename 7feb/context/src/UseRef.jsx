import React, { useRef } from 'react'
 

const UseRef = () => {

    const myref = useRef('')
    const Val = () =>{
        
        myref.current.style.fontSize = "30px"
    }

    const Val2=()=>{ 
        myref.current.style.border ="2px solid red"
        myref.current.style.backgroundColor ="yellow"
    }

    const Val3=()=>{
        myref.current.style.borderRadius = "100px"
        myref.current.style.width = "150px"
        myref.current.style.height = "150px"
        myref.current.style.padding = "25px"
    }
  return (
    <>
     <h1>Welcome</h1> 
     <button onClick={Val}>Change Size</button>
     <button onClick={Val2}>Border</button>
     <button onClick={Val3}>Circle</button>
     <div ref={myref}>
        Welcome to Cybrom
     </div>
    </>
  )
}

export default UseRef
