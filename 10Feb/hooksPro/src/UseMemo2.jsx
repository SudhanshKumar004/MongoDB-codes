import React, { useMemo, useState } from 'react'

const UseMemo2 = () => {
    const [num,setNum] = useState(0)
    const [city,setCity] = useState("")

    //with this hook the loop will work in only num not in city 
    const MyMulti = useMemo(mymulti , [num])

    function mymulti(){
        for(var i=0;i<=1000000000;i++){}
        return num*2;
    }
  return (
    <>
      Enter Number : <input type="number" value={num} onChange={(e)=>{setNum(e.target.value)}}  />
      Enter City : <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}  />
      <h1>Multi : {MyMulti}</h1>
    </>
  )
}

export default UseMemo2
