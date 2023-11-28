import React, { useContext } from 'react'
import { Context } from '../../Context/WishlistContext'
import "./index.css"

function Wishlist() {
    const { favs, setFavs, isOpen, setIsOpen } = useContext(Context)
    return (
        <div className={`wishlist ${isOpen ? 'active' : ''}`}>
            <i onClick={() => setIsOpen(!isOpen)} className='fa-solid fa-xmark'></i>
            {favs.length === 0 ? <h1>Wishlist is empty currently</h1> : <h1>Favorites</h1>}
            <div className="wrapper">
                {favs && favs.map((x) => {
                    return <div key={x.id}><div className="card" >
                    <div className="image">
                        <img src={x.image} alt="" />
                    </div>
                    <div className="texts">
                        <p><b>Name: </b>{x.name}</p>
                        <p><b>Category: </b> {x.category}</p>
                        <p><b>Price: </b>${x.price}</p>
                        <p><b>Color: </b>{x.color}</p>
                        <p><b>Brand: </b>{x.brand}</p>
                        <p><b>Size: </b>{x.size}</p>
                    </div>
                    <i  onClick={() => setFavs(favs.filter((item) => item.id !== x.id))} className='fa-regular fa-trash-can'></i>
                </div>
                <hr />
            </div>
                })}
        </div>

        </div >
    )
}

export default Wishlist