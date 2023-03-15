import {createContext,useState} from "react"
export const MyC = createContext<any>(null)

const MyContext = ({children}:any) => {
    const [mapShow,setMapShow] = useState<boolean>(false)    

    return <MyC.Provider value={{mapShow,setMapShow}}>
        {children}
    </MyC.Provider>
}

export default MyContext;