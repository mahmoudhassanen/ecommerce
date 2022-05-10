import React , {useContext} from 'react'
import './FirstNavbar.css'
import { Link } from 'react-router-dom'
import { DataContext } from '../../Data'


function FirstNavbar() {
    let { cart} = useContext(DataContext);


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light py-3 bg-transparent mt-2">
                <div className="container">
                    <form>
                    <i class="fa fa-search ms-3 me-3" data-animation="fadeInUp" aria-hidden="true"></i>
                        <input type="search"  placeholder='Search...'/>
                        <hr/>
                    </form>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                            <Link className="navbar-brand" to="home" >adalene.</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </ul>
                        <ul className='edit'>
                            <div className='icons '>
                                <i className="fa-brands fa-facebook-f m-3"></i>
                                <i className="fa-brands fa-instagram me-3"></i>
                                <i className="fa-brands fa-twitter me-3"></i>
                                <i className="fa-brands fa-pinterest-p me-3"></i>
                                <Link to="login" className='btn btn-outline-dark border-0'>
                                    <i class="fa-solid fa-user me-2 "></i>Login
                                </Link>

                                <Link to="Cart" className='btn btn-outline-dark ms-2 border-0'>
                                    <i class="fa-solid fa-cart-plus me-1"></i> Cart <span> ( {cart.length})</span>
                                </Link>

                            </div>





                        </ul>

                    </div>
                </div>
            </nav>





        </div>
    )
}

export default FirstNavbar