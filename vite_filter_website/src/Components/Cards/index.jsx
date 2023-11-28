import React, { useContext } from 'react'
import { Shopcontext } from '../../Context/ShopContext'
import { Context } from '../../Context/WishlistContext'
import useFetch from '../../Hooks/UseFetch'
import "./index.css"

function Cards() {


    const { data } = useFetch('http://localhost:3000/product')

    const { category, brand, color, size, } = useContext(Shopcontext)


    const { favs, setFavs } = useContext(Context)



    function addWishlist(item) {
        const find = favs.find((x) => x.id === item.id)
        if (find) {
            return
        } else {
            setFavs([...favs, { ...item }])
        }
    }


    return (
        <>
            <div className="product-part">
                {data && data
                    .filter((x) => x.color === color || color === "All")
                    .filter((x) => x.size === size || size === "All")
                    .filter((x) => x.brand === brand || brand === 'All')
                    .filter((x) => x.category === category || category === 'All')
                    .map((item) => (
                        <div className="card" key={item.id}>
                            <div className="image">
                                <img src={item.image} alt="" />
                                <div className="icons">
                                    <button onClick={() => addWishlist(item)} className="fa-regular fa-heart"></button>
                                    <i className="fa-solid fa-glasses"></i>
                                    <i className="fa-solid fa-code-compare"></i>
                                </div>
                                <div className="add">
                                    <p>Add To Basket</p>
                                </div>
                            </div>
                            <div className="texts">
                                <p style={{ color: "gray" }}>{item.category}</p>
                                <h4>{item.name}</h4>
                                <p>Color: {item.color}</p>
                                <p style={{ color: "orange" }}>Price: ${item.price}.00</p>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                            </div>
                        </div>

                    ))}
            </div>
        </>
    )
}

export default Cards