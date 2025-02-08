import React, { useRef } from 'react'

const UseRef = () => {

    const myref = useRef("") 

    const show=()=>{
            myref.current.innerHTML = "blue"; 
            myref.current.style.color = "blue"; 
            myref.current.style.fontSize = "60px"; 
    }
    const show2=()=>{
            myref.current.innerHTML = "BIG"; 
            myref.current.style.color = "red"; 
            myref.current.style.fontSize = "150px"; 
    }
    const show3=()=>{
            myref.current.innerHTML = "Round"; 
            myref.current.style.color = "white"; 
            myref.current.style.backgroundColor = "brown"; 
            myref.current.style.fontSize = "50px"; 
            myref.current.style.border = "2px solid blue"; 
            myref.current.style.borderRadius = "100px"; 
            myref.current.style.width = "170px"; 
            myref.current.style.height = "170px"; 
            myref.current.style.display = "flex"; 
            myref.current.style.justifyContent = "center"; 
            myref.current.style.alignItems = "center"; 

    }
  return (
    <>
      <h1 ref={myref}>The World is.....</h1>
      <button onClick={show}>Click to Know</button>
      <button onClick={show2}>Click to Know</button>
      <button onClick={show3}>Click to Know</button>
    </>
  )
}

export default UseRef
