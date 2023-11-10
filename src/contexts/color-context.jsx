import { createContext, useContext, useState } from "react";

const initialState = true;

const ColorContext = createContext({
    color: initialState
});

const ColorProvider = ({ children }) => {
    const [color, setColor] = useState(initialState);

    return <ColorContext.Provider value={{color}} >{children}</ColorContext.Provider>
}

const colorHook = () => {
    return useContext(ColorContext);
}

export { colorHook, ColorProvider as default }