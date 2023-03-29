import React, { useState } from 'react'
import { MyC } from './MyContext';
import WorldMap from './WorldMap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';


const NavBar = () => {

  const [mapShow, setMapShow] = useState<boolean>(false);

  if (mapShow) {
    //window.addEventListener("mouseover", setShow(false));
    //branch main test//
    console.log("showwhow");
  }

  return (
    <div className="Navbar"
    style={{
      position: "fixed",
  top: 0,
  left: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: 100,
  height: "100vh",
  backgroundColor: "#92ccea"
    }}>
      <button onClick={()=>{
        let obj = "자전거"
        let numRef = {current:10};
        axios.get(`http://127.0.0.1:5000/search/shop?query=${obj}&display=${numRef.current}`).
        then(res=>console.log(res.data))
      }}>네이버 데이터 겟</button>
      <div
        onClick={() => {
          setMapShow(false);
        }}
        style={{
          width: "100vw",
          height: "100vh",
          zIndex: 100000,
          background: "rgba(0,0,0,0.6)",
          display: mapShow ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: "0%",
          left: "0%",

        }}
      >
        <WorldMap mapShow={mapShow} setMapShow={setMapShow} />
      </div>
      <FontAwesomeIcon
        style={{ fontSize: "1.5rem" }}
        icon={faEarthAmericas}
        onClick={() => {
          setMapShow(true);
        }}
      />
      <span style={{ textAlign: "center", fontSize: "0.7rem" }}>MORE</span>
    </div>
  )
}

export default NavBar