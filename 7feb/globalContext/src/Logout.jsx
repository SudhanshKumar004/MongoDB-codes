import React, { useContext } from 'react'
import { myContext } from './GlobalContext'


const Logout = () => {
    const { user , logout } = useContext(myContext);
  return (
    <>
        <h1>Welcome : {user.name} 
            <button onClick={()=>{logout()}}>Logout</button>
        </h1>
      
    </>
  )
}

export default Logout
