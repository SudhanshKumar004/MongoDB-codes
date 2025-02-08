import React, { useReducer } from 'react'


const UseReducer = () => {

    const imgChange = (state , actions) =>{
        switch(actions) 
        {
            case "cricket" :
                return state="https://assets.gqindia.com/photos/5cdc13d250ab3900cb2059f5/16:9/w_1920,c_limit/top-image53.jpg" ;
            
            case "football" :
                return state = "https://cdn.pixabay.com/photo/2013/02/19/02/24/football-83222_1280.jpg";

            case "hockey" :
                return state="https://www.thehockeypaper.co.uk/wp-content/uploads/2018/12/U4A5522.jpg";

            case "cars" :
                return state="https://racingnews.co/wp-content/uploads/2024/10/NASCAR-Cup-Series-4-Wide-at-Talladega-Superspeedway-1.jpg"
        }
    }

    const [myimg , dis] = useReducer(imgChange , "https://wallpapers.com/images/hd/random-pictures-zxti3l8kfhl5ojbh.jpg")
  return (
    <>
    <div style={{display:"grid", justifyContent:"center"}}>
    <h1 align="center"  >Image Changer</h1>
      <img src={myimg} height={"300px"} width={"500px"} alt="" />
    </div>
    <div style={{display:"grid", justifyContent:"center", marginTop:"10px"}}>
      <button style={{fontSize:"30px" , padding:"0px 80px", cursor:"pointer" , backgroundColor:"darkslateblue" , color:"whitesmoke" , marginTop:"10px" }} onClick={()=>{dis("cricket")}}>Cricket</button>

      <button  style={{fontSize:"30px" , padding:"0px 80px", cursor:"pointer" , backgroundColor:"darkslateblue" , color:"whitesmoke" , marginTop:"10px" }}  onClick={()=>{dis("football")}} >FootBall</button>

      <button  style={{fontSize:"30px" , padding:"0px 80px", cursor:"pointer" , backgroundColor:"darkslateblue" , color:"whitesmoke" , marginTop:"10px" }}  onClick={()=>{dis("hockey")}} >Hockey</button>

      <button  style={{fontSize:"30px" , padding:"0px 80px", cursor:"pointer" , backgroundColor:"darkslateblue" , color:"whitesmoke" , marginTop:"10px" }}  onClick={()=>{dis("cars")}} >Cars</button>
    </div>
    </>
  )
}

export default UseReducer
