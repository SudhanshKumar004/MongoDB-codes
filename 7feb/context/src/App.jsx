import React, { createContext, useState } from 'react'
import Comp1 from './Comp1';
import College from './College';
import UseRef from './UseRef';
import UseReduce from './UseReduce';

const myContext = createContext();


const App = () => {
  // const [user,setUser] = useState("Sudhansh")

  return (
    <>
  {/* // <h1>My App : {user}</h1>
  // <button onClick={()=>{setUser("Anshul")}}>Click</button>
  // <myContext.Provider value={{user, setUser}}>
  //   <Comp1 />
  // </myContext.Provider>
  // <College>
  //   <h1>My College</h1>
  //   <h1>My Course</h1>
  // </College> */}

  {/* <UseRef /> */}
  <UseReduce />
    </>
  )
}

export default App
export {myContext}
