import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Display.css";

const Display = () => {
  const [mydata, setMydata] = useState([]);
  const [selectedImages, setSelectedImages] = useState({});

  useEffect(() => {
    const loadData = async () => {
      let response = await axios.get("http://localhost:8080/user/datadisplay");
      setMydata(response.data);
    };
    loadData();
  }, []);

  return (
    <>
      <h1>Display</h1>
      <hr />

      {mydata.map((item) => (
        <div key={item.id} className="product-container">
    
          <img
            src={`http://localhost:8080/${selectedImages[item.id] || item.defaultImage}`}
            width={300}
            height={250}
            alt="Main"
          />

          <br />

          {item.images.map((img, index) => (
            <img
              key={index}
              src={`http://localhost:8080/${img}`}
              height={60}
              width={60}
              alt="Thumbnail"
              className="thumbnail"
              onMouseEnter={() => setSelectedImages((prev) => ({ ...prev, [item.id]: img }))} 
              onMouseLeave={() => setSelectedImages((prev) => ({ ...prev, [item.id]: item.defaultImage }))}
            />
          ))}

          <h1>Product: {item.product}</h1>
          <h1>Brand: {item.brand}</h1>
          <h1>Price: {item.price}</h1>
        </div>
      ))}
    </>
  );
};

export default Display;
