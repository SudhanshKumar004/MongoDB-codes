import React, { useCallback, useState } from 'react'
import Call2prctce from './Call2prctce';

const Callprctc = () => {
    const[count,setCount] =useState(0);
    const[task,setTask] = useState([])


    function myAdd(){
        setTask(values=>([...values, "added"]))
    }

    const CallBack = useCallback(myAdd , [task])
  return (
    <>
    <Call2prctce task={task} data={CallBack} />
      <button onClick={()=>{setCount(count+1)}}>Click</button>
      {count}
    </>
  )
}

export default Callprctc
