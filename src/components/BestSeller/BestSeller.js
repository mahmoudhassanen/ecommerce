import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../Data'
import "./BestSeller.css"
import Slider from "react-slick";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import QUICK from './QUICK';





function BestSeller() {
 let parm = useParams()
  let { AllProduct } = useContext(DataContext);
  const [Filter, setFilter] = useState(AllProduct)
 let params = useParams();



  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: true,

  };
  const dataProduct = () => {
    const UpdateData = AllProduct.filter((x) => x.best_sellers === "true");
    setFilter(UpdateData)
    console.log(UpdateData)

  }
  useEffect(() => {
    dataProduct();
  }, [])

   
  return (
    <div className='Best-header d-flex flex-column justify-content-center align-center'>
      

      <h2 className='text-center '> BEST SELLERS</h2>
      
      <hr />

      <div className='container'>
        <Slider {...settings} className="mt-5  \ " >
          
          {Filter.map((item) =>
          
            
          
          
            <div key={item.id} className="mt-5 h-100 text-center  edit " >



              <img src={item.img} alt={item.desc} width="85%" height="350px" className='edit ms-4 '

              />
              <a href='' className='war btn-danger'> Best Sellers </a>

              <h6 className='mt-4 text-capitalize    text-center '> {item.desc}   </h6>
              <p className='mt-3  text-center'> ${item.price}.00  </p>

              <Link type="button" class="btn btn-light"  to={`/QuickView/${item.id}`}
                onClick={() => {
                  console.log();
                }}
              >Quick View</Link>







              
             

  
              
              

              










            </div>
            
            
              
          )}
                 
        </Slider>



      </div>
<div>
<Link type="button" to="/shopall"  class=" btn-warning ">Shop All Bagss</Link>

</div>
    </div>

  )
}

export default BestSeller;