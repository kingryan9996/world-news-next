import {createContext,useState} from "react"
export const MyC = createContext<any>(null)

const MyContext = ({children}:any) => {
    // const [mapShow,setMapShow] = useState<boolean|any>(null)    

    return <MyC.Provider value={{}}>
        {children}
    </MyC.Provider>
}

export default MyContext;