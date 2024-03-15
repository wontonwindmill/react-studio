import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem"
import { ChakraProvider } from '@chakra-ui/react'


/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */



function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [total, setTotal] = useState(0)
  const [cartItems, setCartItems] = useState([])
  const addCart = (name, price) => {
    setTotal(total+price)
    setCartItems(cartItems => [...cartItems, name])
  }
  const cartItemsDict = () => {
    const dict = {}
    cartItems.forEach(item => {
      dict[item] = (dict[item] || 0) + 1
    })
    return dict
  }

  
  return (
    <ChakraProvider>
      <div className="App">
        {/* TODO: personalize your bakery (if you want) */}
        {/*<p>{cartItems.length}</p>*/}
        
        <main className="Main">
          <h1>My Bakery</h1>
          <div className="ItemContainer">
            {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
              //<p>{item.image}</p>
              //<p>{item}</p>
              <BakeryItem func={addCart} image={item.image} name={item.name} price={item.price} description={item.description}/>// replace with BakeryItem component
            ))}
          </div>
        </main>
      
        <div>
          <h2>Cart</h2>
          {Object.keys(cartItemsDict()).map((item) => (
            <p>{cartItemsDict()[item]}x {item}</p> 
          ))}
          {total == 0 ? <p>Nothing here just yet!</p> : <p>Total: {total}</p>}  
        </div>
      </div>
    </ChakraProvider>
    
  );
}

export default App;
