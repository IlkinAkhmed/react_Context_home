import { createContext, useContext, useState } from "react";


export const Shopcontext = createContext()

function ShopProvider({ children }) {

    const [category, setCategory] = useState('All')
    const [brand, setBrand] = useState('All')
    const [size, setSize] = useState('All')
    const [color, setColor] = useState('All')


    const data = {
        size,
        color,
        brand,
        category,
        setBrand,
        setCategory,
        setColor,
        setSize
    }

    return (
        <Shopcontext.Provider value={data}>
            {children}
        </Shopcontext.Provider>
    )
}
export default ShopProvider