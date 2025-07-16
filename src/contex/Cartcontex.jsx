import { createContext } from "react"

const Cartcontex = createContext();


const Cartprovider = ({ children }) => {



    return (
        <Cartcontex.Provider>
            {children}
        </Cartcontex.Provider>)
}


export { Cartcontex, Cartprovider }