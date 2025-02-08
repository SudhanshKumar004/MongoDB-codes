import React, { useReducer } from 'react'

const UseReduce = () => {

    // Counter Reducer
    const reducers=(state,actions)=>{
        switch(actions)
        {
            case "Increment" :
                return state+1;
            case "Decrement" :
                return state > 0 ? state - 1 : state;
            default :
            return state;
        }
    } 

    
    // Color Changing UseReduce
    const mybgcolor=(state,actions)=>{
        switch(actions)
        {
            case "redcolor":
                return state="red";
            case "greencolor":
                return state="green" ;
            case "bluecolor" :
                return state="blue";
            case "orangecolor":
                return state="orange";
        }
    }
    const[mycolor , mydis] = useReducer(mybgcolor, "pink")
    
    const [count , dispatch] = useReducer(reducers, 0)
  return (
    <>
       {/* For Counter */}

    <button onClick={()=>{dispatch("Increment")}}>Increment</button>
    <h1>Count is : {count} </h1>
    <button onClick={()=>{dispatch("Decrement")}}>Decrement</button>
    
    <hr />
    <h1 align="center">Color Change</h1>
    <div style={{display:"flex" , justifyContent:"center"}}>

      {/* For color Change */}
      
    <button onClick={()=>{mydis("redcolor")}}>Red</button>
    <button onClick={()=>{mydis("greencolor")}}>Green</button>
    <button onClick={()=>{mydis("bluecolor")}}>Blue</button>
    <button onClick={()=>{mydis("orangecolor")}}>Orange</button>
    <div style={{width:"400px", height:"200px", backgroundColor:mycolor}}></div>
      </div>
    </>
  )
}

export default UseReduce
