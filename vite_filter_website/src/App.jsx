import './App.css'
import Shop from './Components/Shop'
import Wishlist from './Components/WishlistPage'
import ShopProvider from './Context/ShopContext'
import WishlistProvider from './Context/WishlistContext'

function App() {

  return (
    <>
      <WishlistProvider>
        <ShopProvider>
          <Shop />
          <Wishlist />
        </ShopProvider>
      </WishlistProvider>
    </>
  )
}

export default App
