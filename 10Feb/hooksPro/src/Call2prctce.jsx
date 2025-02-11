import React, { memo } from 'react'


const Call2prctce = ({ task , data}) => {
    console.log("%%%%");
    

  return (
    <>
    {
        task.map((key)=>{
                return(
                    <>
                    <h1>{key}</h1>
                    </>
                )
        })
    }
      <button onClick={data}>add</button>
    </>
  )
}

export default memo(Call2prctce);
