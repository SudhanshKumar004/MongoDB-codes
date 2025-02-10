import React, { useCallback, useState } from 'react'
import Call2 from './Call2';

const UseCallback = () => {
  const[count,setCount] = useState(0);
  const[task,setTask] = useState([]);
  const myAdd=()=>{
    setTask(values=>([...values, "New Task"]))
  }

  const Mycallback = useCallback(myAdd ,[task])
  return (
    <>
      <Call2 task={task} addtask={Mycallback} />
      <button onClick={()=>{setCount(count+1)}}>Click</button>
      {count}
    </>
  )
}

export default UseCallback
