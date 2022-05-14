import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { DataContext } from '../../Data'
import './QuickView.css'



function QuickView() {
  let { AllProduct , AddCart  } = useContext(DataContext);
  const [product1, setproduct1] = useState([])
 



  const [Toggle, setToggle] = useState(true)
  const [Toggle1, setToggle1] = useState(true)
  const [Toggle2, setToggle2] = useState(true)

let parm = useParams();  
 

 
  function GetProduct() {

    if (parm.id) {
      const Data = AllProduct.filter((item => {
        return item.id === parm.id
      })
      )
      setproduct1(Data)

      console.log(Data)


    }


  }  
  

  useEffect(() => {
    GetProduct();

  }, [])



  return (
    <div>



      <div className='container'>
        <div className='parent py-5 m-5'>
          {product1.map((item) =>
            <div>


              <div className=' py-4 m-5 wrap1' key={item.id}>
                <img src={item.img} alt="" width="500px" height="663.048" />
                <p > I'm a product description. I'm a great place to add more details about <br /> your product such as sizing, material, care instructions and cleaning <br /> instructions. </p>
              </div>
              <div className=' wrap2'>
                <h1 className='mb-2'>  {item.desc}. </h1>
                <h2> SKU : {item.SKU} </h2>
                <span> price :  ${item.price}.00 </span>
                <button type="button" class="btn btn-danger d-block text-center text-capitalize" onClick={()=> { AddCart(item.id)} } >Add To Cart</button>
                <button type="button" class="btn btn-dark">Buy Now</button>
                <p>


                  {Toggle ?
                    <div  className='set' onClick={() => setToggle(false)} >


                      <a data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1">
                        PRODUCT INFO
                      </a>
                      <i class="fa-solid fa-plus" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1"  >

                      </i>
                    </div>
                    :
                    <div className='set' onClick={() => setToggle(true)}>

                      <a data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1">
                        PRODUCT INFO
                      </a>
                      <i class="fa-solid fa-minus" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">

                      </i>
                    </div>
                  }

                </p>
                <div class="collapse" id="collapseExample1">
                  <div class="card card-body">
                    I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.


                  </div>
                </div>
                <p>


                  {Toggle1 ?
                    <div className='set' onClick={() => setToggle1(false)} >


                      <a  data-bs-toggle="collapse"  className="set2" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
                        RETURN & REFUND POLICY   
                      </a>
                      <i class="fa-solid fa-plus" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2"  >

                      </i>
                    </div>
                    :
                    <div className='set' onClick={() => setToggle1(true)}>

                      <a className='set2'  data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
                           RETURN & REFUND POLICY   
                      </a>
                      <i class="fa-solid fa-minus" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">

                      </i>
                    </div>
                  }

                </p>
                <div class="collapse" id="collapseExample2">
                  <div class="card card-body">
                  I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.


                  </div>
                </div>
                <p>


                  {Toggle2 ?
                    <div className='set' onClick={() => setToggle2(false)} >


                      <a className='set3' data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3">
                      SHIPPING INFO                      </a>
                      <i class="fa-solid fa-plus" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3"  >

                      </i>
                    </div>
                    :
                    <div  className='set' onClick={() => setToggle2(true)}>

                      <a data-bs-toggle="collapse" href="#collapseExample3" className='set3' role="button" aria-expanded="false" aria-controls="collapseExample3">
                      SHIPPING INFO
                      </a>
                      <i class="fa-solid fa-minus" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">

                      </i>
                    </div>
                  }

                </p>
                <div class="collapse" id="collapseExample3">
                  <div class="card card-body">
                  I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.


                  </div>
                </div>


              </div>


            </div>


          )

          }


        </div>

      </div>
    </div>



  )
}

export default QuickView