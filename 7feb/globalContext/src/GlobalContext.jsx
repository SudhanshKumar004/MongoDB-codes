import React, { createContext, useState } from 'react'

const myContext = createContext();

const GlobalContext = ({children}) => {
  const [user , setUser] = useState({name:"" , auth:false})

  const login=(nm)=>{
      setUser({name:nm , auth:true})
  }

  const logout =()=>{
    setUser({name:"", auth:false})
  }
  return (
    <>
      <myContext.Provider value={{user , login , logout }}>

        {children}

      </myContext.Provider>
    </>
  )
}

export default GlobalContext
export {myContext}