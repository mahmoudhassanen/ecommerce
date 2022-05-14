
import React, { useContext, useEffect, useState  } from 'react'
import { DataContext } from '../../Data'
import './Cart.css'

function Cart() {
  let { Cart , total  , getTotal  ,RemoveProduct  , getLocalStorage  , increase , reductioon  } = useContext(DataContext);

console.log(getLocalStorage)


  useEffect(() => {
    getTotal()
   
   }, [Cart])
   if (Cart.lenth === 0 ) {
     return <h2 style={{testAlign : "center" , fontSize : "30px"}}> Cart Empty</h2>
   }
const JSXElem = Cart.map((elem) => 

    // console.log(nestedElem)
    
    <> 

    <div className='cart py-5'  >
    <div className='row  '>
   <div className='col-md-4   ' key={elem.id}>
     <img src={elem.img} alt={elem.desc} width="300px" height="370px" className='cart-ig'/>
   </div>
   <div className='col-md-8 '>
     <h2 className='cart2'> {elem.desc}  </h2>
     <h3  className='cart2'> SKU :   {elem.SKU}.  </h3>
     <span className='cart2'> price :  ${elem.price}.00 </span>
     <p className='cart2'> {elem.title}   </p>
    
    <div className='GroubBTN'>
    <button type="" className='count' onClick={()=>  reductioon(elem.id)} >  -  </button>
     <span> {elem.count}</span>
     <button type="" className='count' onClick={()=>   increase(elem.id)} >  +  </button>
     <div className='delete'>
     <i class="fa fa-times" aria-hidden="true" onClick={()=> RemoveProduct(elem.id)}></i>
     </div>
  
    </div>
     </div>
     </div>
      </div>
    </>
  
  )
  




  // console.log(Cart);
  return (
    <div className='Cart'>
      
    
    <div className='container'>

     

        {Cart && JSXElem}
       <h3 className='total' > Total : ${total}.00 </h3>
    </div>
    </div>
  )
}

export default Cart