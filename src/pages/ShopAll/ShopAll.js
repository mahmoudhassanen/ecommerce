import React, { useContext, useState } from 'react';
import { DataContext } from '../../Data'
import "./ShopAll.css"
import { Link } from 'react-router-dom'


function ShopAll() {
  let { product } = useContext(DataContext);
  const [Filter, setFilter] = useState(product)

  const [LoadingMore, setLoadingMore] = useState(16)
  const [Show, setShow] = useState(false)
  const [Toggle, setToggle] = useState(true)
  const [Toggle1, setToggle1] = useState(true)

  
 

  const  dataProduct = (cat) => {
    const UpdateData = product.filter((x)=>x.category === cat );
    setFilter(UpdateData)
    console.log(UpdateData)
   
    
}
const  FilterModel = (cat) => {
  const UpdateData = product.filter((x)=>x.model === cat );

    setFilter(UpdateData)
    console.log(UpdateData)


 
  
}

  return (
    <div className='Shop-parent'>
      <h1>  SHOP ALL </h1>

      <div className='container'>


        <div className='row'>
          <div className='col-md-2 mt-5 '>
            <h3>  Filter by </h3>
           <div  className='firstCOL'>
              
       {/* first filter  */}
            <p className='set mt-4'>
              {Toggle ? 
              <div className=''>
              <a  onClick={() => setToggle(false)} class="btn btn-primary me-5" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
 Collection
</a>
<i   onClick={() => setToggle(false)} class="fa fa-plus " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
</i>
           </div> : 
            <div >
            <a onClick={() => setToggle(true)} class="btn btn-primary me-5" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Collection
</a>
<i onClick={() => setToggle(true)} class="fa fa-minus " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
</i>
         </div>
           }
 

</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    <ul>
      <li  onClick={()=>{setFilter(product)}} > All </li>
      <li onClick={()=> dataProduct("bags") }> Bags </li>
      <li onClick={()=> dataProduct("Phone Cases") }> Phone Cases </li>
      <li onClick={()=> dataProduct("Mini leather goods") }> Mini leather goods </li>
      <li onClick={()=> dataProduct("Leather Belts") }> Leather Belts </li>
     

    </ul>
  </div>
</div>
 {/* second filter */}

</div>
<div  className='firstCOL'>
<p className='set1 mt-4'>
              {Toggle1 ? 
              <div className=''>
              <a  onClick={() => setToggle1(false)} class="btn btn-primary me-5" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1">
              Model</a>
<i   onClick={() => setToggle1(false)} class="fa fa-plus " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
</i>
           </div> : 
            <div >
            <a onClick={() => setToggle1(true)} class="btn btn-primary me-5" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1">
Model
</a>
<i onClick={() => setToggle1(true)} class="fa fa-minus " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
</i>
         </div>
           }
 

</p>
<div class="collapse" id="collapseExample1">
  <div class="card card-body">
    <ul>
  
    <li onClick={()=> FilterModel("iphone x") }>  iphone X </li>
    <li onClick={()=> FilterModel("iphone xs") }>  iphone XS </li>
    </ul>
  </div>
</div>
</div>


    

          </div>
          <div className='col-md-10'>

            <div className='row'>
              {Filter.slice(0, LoadingMore).map((item) =>
                <div className='col-md-3  py-4  position-relative' key={item.id} >
<Link to={`/QuickView/${item.id}`} className="link"> 
                  <img src={item.img} alt={item.desc} className="me-3 edit   
 " width="100%" height="80%" />
                  <h6 className='text-center mt-3' >  {item.desc}</h6>
                  <p className='text-center'>  ${item.price}.00 </p>
                  {item.best_sellers === "true" ? <div className='best'>
                    Best Sellers
                  </div>  : "" }
                  
                  </Link>

                </div>
              )}
              {Show ? ""
                :


                <button type="" className='bt mb-4 mt-5' onClick={() => {
                  setLoadingMore((prev => prev + 24))
                  setShow(true)


                }}> Load More</button>

              }
            </div>



          </div>

        </div>

      </div>

    </div>
  )
}

export default ShopAll