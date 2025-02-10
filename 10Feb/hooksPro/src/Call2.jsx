import React, { memo } from 'react'

const Call2 = ({task,addtask}) => {
    console.log("*****");
    
  return (
    <>
      {
        task.map((key)=>{
            return(
                <>
                <h2>{key}</h2>
                </>
            )
        })
      }
      <button onClick={addtask}>add</button>
    </>
  )
}

export default memo(Call2);
