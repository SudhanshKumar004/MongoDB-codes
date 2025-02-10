import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [add,setAdd] = useState(0)
  const [sub,setSub] = useState("100")

  const myMulti=useMemo(mymulti,[add])

  function mymulti(){
    return add*2
    console.log("***");
  }
  return (
    <>
      <h1>Multification : {myMulti}</h1>
      <h1>Addition : {add}</h1>
      <button onClick={()=>{setAdd(add+1)}}>Click Here</button>
      <h1>substraction : {sub}</h1>
      <button onClick={()=>{setSub(sub-1)}}>Click Here</button>
    </>
  )
}

export default UseMemo
