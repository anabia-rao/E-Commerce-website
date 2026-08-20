import React from "react";
      import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import Products from "./components/products";
import cart from "./components/cart";   
import Adminpanel from "./components/Adminpanel";
import  mysupabase  from "./supabaseClient";

const App = () => {
  const [user, setUser] = useState(null);
  const [product, setProduct] = useState("");
  const [cart, setCart] = useState("");
  const [page, setPage] = useState("home");

  useEffect(() => {
    const { data: checkUser } = mysupabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      },
    );
    return () =>checkUser.subscription.unsubcribe();
  }, []);
    
  function addToCard (product){
    const find = addToCard.find((item) => item.id === product.id);
    if(find){
      setCart (cart.map ((item) => item.id === product.id?  {...item , qty :item.qty + 1} : item 
      ));
    }
    else {
      setCart([...cart , { ...product , qty : 1 } ]);
    }
   return   alert (product.title  + "added to cart");
  }
  
  function changeQty (id , amount) {
  setCart (cart.map( (item) =>{
  if(item.id ===  id) {
    const newqty= item.qty + amount;
    return newqty > 0 ? {...item , qty: newqty} : null;

  }
  return item
} ) .filter(Boolean));
  

  }
   function onDelete (id){
    setCart(cart.filter (item => item.id!== id));
   }
    


    async function logout (){
    await mysupabase.auth.signOut();
    setPage('home');
   }

 async function  getproducts(){

   const {data ,error} = await mysupabase

   .from('products')
   .select('*');
   if (!error && data){
    setProducts(data);
   }
 }

  useEffect(() =>{
    getproducts();
  })

  const cartcount = cart.reduce((total ,item) => total + item.qty ,0 );

  return (
    <div className="App">
      <Header  
       page={page} 
        setPage={setPage} 
        user={user} 
        onLogout={logout} 
        cartCount={cartCount} />
      <Home />
      <Products  
            products={products} 
            onAddToCart={addToCart} 
            onGoToAdmin={() => setPage('admin')} />
             {page === 'admin' && (
          <Adminpanel
            user={user} 
            onProductAdded={() => {
              getProducts();
              setPage('home');
            }} 
          />
        )}
          {page === 'cart' && (
          <Cart 
        
            cart={cart} 
            user={user}
           
            onChangeQty={changeQty} 
            onDelete={deleteCartItem} 
            onClearCart={() => {
              setCart([]);
              setPage('home');
            
            }} 
            onGoToHome={() => setPage('home')} 
          />
        )}
    <Footer/>
    </div>
  );
};
export default App;
