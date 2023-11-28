import { createContext, useContext, useEffect, useState } from "react";


export const Context = createContext()

const  WishlistProvider=({children})=>{
    const [isOpen, setIsOpen] = useState(false)

    const [favs, setFavs] = useState(localStorage.getItem('Products') ? JSON.parse(localStorage.getItem('Products')) : [])

    useEffect(() => {
        localStorage.setItem('Products',JSON.stringify(favs))
    }, [favs])
    

    const data = {
        favs,
        setFavs,
        isOpen,
        setIsOpen
    }
    return(
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}
export default WishlistProvider