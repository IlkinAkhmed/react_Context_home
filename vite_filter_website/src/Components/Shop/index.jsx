import React, { useContext } from 'react'
import { Context } from '../../Context/WishlistContext'
import useFetch from '../../Hooks/UseFetch'
import Cards from '../Cards'
import Filter from '../Filter'
import "./index.css"

function Shop() {
    const { data, SortByName, SortByPrice } = useFetch('http://localhost:3000/product')


    const {isOpen,setIsOpen} = useContext(Context)



    return (
        <>
            <section>
                <div className="header">
                    <h1>Our Products</h1>
                    <p>Shopping</p>
                </div>
                <div className="container">
                    <div className="head-of-shop">
                        <div className="filters">
                            <p>Filters:</p>
                            <p>Clean All </p>
                        </div>
                        <div className="showing">
                            <p>Showing <span>9 of 56</span> Products</p>
                        </div>
                        <div className="sort">
                            <div className="buttons">
                                <p>Sort By:</p>
                                <button onClick={SortByName} className='sortOptions'>Name</button>
                                <button onClick={SortByPrice} className='sortOptions'>Price</button>
                            </div>
                            <button onClick={()=>setIsOpen(!isOpen)} className='favs'>Favorites</button>
                        </div>
                    </div>
                    <div className="products">
                        <Filter />
                        <Cards/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Shop