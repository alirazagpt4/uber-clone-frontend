import { createContext , useState , } from "react";

export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
    const [captain , setCaptain] = useState(null);
    const [isLoading , setIsLoading] = useState(null)
    const [err , setErr] = useState(null);

    const updateCaptain  = (captainData)=>{
        setCaptain(captainData);
    }

    const value = {
        captain,
        setCaptain,
        isLoading,
        setIsLoading,
        err,
        setErr,
        updateCaptain
    }

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    )
}

export default CaptainContext;