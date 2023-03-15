import React, { useContext } from 'react'
import { MyC } from './MyContext';
import WorldMap from './WorldMap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";


const NavBar = () => {
    const {mapShow,setMapShow} = useContext(MyC)

  return (
    <div className="Navbar">
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
        <WorldMap />
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