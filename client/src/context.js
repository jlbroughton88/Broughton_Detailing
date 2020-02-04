import React, { useState, useEffect, useContext, createContext } from "react";

export const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = (props) => {

    const [statusUrl, setStatusUrl] = useState("");

    useEffect(() => {
    if(process.env.NODE_ENV === "production") {
        setStatusUrl("https://broughton-detailing.herokuapp.com")
    } else if (process.env.NODE_ENV === "development") {
        setStatusUrl("http://localhost:5004")
    }
    }, [])



    const config = statusUrl;

    return (
        <AppContext.Provider value={config}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;