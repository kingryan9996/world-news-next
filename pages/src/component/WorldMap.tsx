import React, { useState,useContext } from "react";
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
    mapShow: boolean;
    setMapShow: (state:boolean)=>void;
  };

// const WorldMap = ({ mapShow, setShow }:WorldMapProps) => {
const WorldMap = () => {

    const {mapShow,setMapShow} = useContext(MyC)

console.log(mapShow)
    const router = useRouter();
  const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
    const [content, setContent] = useState("");

    // const aaa = (obj:object)=>{
    //     interface obj {
    //         id:number;
    //     }
    //     console.log(obj.id)
    // }
    // aaa({id:100})

    // 문제
    // function add(obj1:any):void {
    //     interface Developer {
    //         id:number;
    //         name:string;
    //     }
    //     let aa:Developer;
    //     console.log(obj1)
    //     aa = {id:123,name:"유리"};
    //     console.log(aa,'??')
    //     aa = obj1;
    //     aa = {id:234,name:"아이유"};
    //     console.log(aa)
    // }
    // add({id:357,name:"아이유"})

    // 해결방법 01.
    // function add(obj1:any):void {
    //     interface Developer {
    //         id:number;
    //         name:string;
    //     }
    //     let aa:Developer;
    //     console.log(obj1)
    //     aa = {id:123,name:"유리"};
    //     console.log(aa,'??')
    //     aa = obj1;
    //     aa = {id:234,name:"아이유"};
    //     console.log(aa)
    // }
    // add({id:357,name:"아이유"})

    // 해결방법 02.
    // function add(obj1:{id:number,name:string}):void {
    //     interface Developer {
    //         id:number;
    //         name:string;
    //     }
    //     let aa:Developer;
    //     console.log(obj1)
    //     aa = {id:123,name:"유리"};
    //     console.log(aa,'??')
    //     aa = obj1;
    //     aa = {id:234,name:"아이유"};
    //     console.log(aa)
    // }
    // add({id:357,name:"아이유"})
    
    

    // 이렇게 써도되고 #01
//     const detailPage = (geo:object) => {        
//         let useGeo: any = {};
//         useGeo = Object.assign({},geo);

//     console.log(geo)
//     console.log(useGeo,'??')
//     console.log(useGeo.id,'?????')
//     //router.push(`/Country/${geo.id}`);
//     // setShow(false);
//   };

// 이렇게 써도되고 #02
  const detailPage = (geo:any) => {

console.log(geo.id)
router.push(`/Country/${geo.id}`);
setMapShow(false);
};

  return (
    <div>
        <button onClick={()=>{setMapShow(!mapShow);console.log(mapShow,"클릭(쇼)")}}>쇼/!쇼</button>
        <div style={{display:mapShow?"none":"block"}}>보였다</div>
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
        mapShow
          ? { width: "75vw", height: "85vh", transform: "translateX(5%)" }
          : { width: "25vw", height: "30vh", transform: "translateX(5%)" }
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
                      setContent(`${NAME}`);
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
