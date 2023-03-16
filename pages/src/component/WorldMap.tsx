import React, { useState,useContext, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

import { Tooltip, OverlayTrigger } from "react-bootstrap";
import "react-tooltip/dist/react-tooltip.css";
import {useRouter} from 'next/router'
import { inflate } from "zlib";
import { MyC } from "./MyContext";


type WorldMapProps = {
    mapShow?: boolean|null;
    setMapShow?: (state:any)=>void|boolean;
  };

// const WorldMap = ({ mapShow, setShow }:WorldMapProps) => {
const WorldMap = ({mapShow,setMapShow}:WorldMapProps) => {

console.log(mapShow)
    const router = useRouter();
  const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
    const [content, setContent] = useState<string>("");


  const detailPage = (geo:any) => {

console.log(geo.id)
router.push(`/Country/${geo.id}`);
setMapShow?.(true);
};
console.log(mapShow)







  return (
    <div>
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5 },
      }}
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}
      className="WorldMap"
      style={
        !mapShow
          ? { width: "75vw", height: "85vh",marginLeft:"100px"}
          : { width: "75vw", height: "30vh"}
          // : { width: "25vw", height: "30vh"}
      }
    >
      <ComposableMap
        data-tip=""
        data-for="tooltip"
        className="navigate-push"
      >
        <ZoomableGroup zoom={1}>
          {/* {""} */}
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo, idx) => (
                // console.log('국가id', geo.id, '국가코드', geo.properties["Alpha-2"]),
                <OverlayTrigger
                  //  key={geo}
                  // geo={geo}
                  key={"map" + idx}
                  placement="top"
                  overlay={
                    <Tooltip
                      id={`tooltip-${geo.properties.name}`}
                      className="tooltip"
                    >
                      <strong>{geo.properties.name}</strong>
                    </Tooltip>
                  }
                >
                  <Geography
                    geography={geo}
                    id={content}
                    onClick={() => {
                      detailPage(geo);
                    }}
                    onMouseEnter={(e) => {
                      // console.log(geo, 'geo?')
                      const NAME = geo.properties.name;
                      // setContent(`${NAME}`);
                    }}
                    onMouseLeave={() => {
                      setContent("");
                    }}
                    style={{
                      hover: {
                        // fill: "#F53",
                        fill: "#6cc4aa",
                        outline: "none",
                      },
                    }}
                  />
                </OverlayTrigger>
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </motion.svg >
    </div>
  );
};

export default WorldMap;
