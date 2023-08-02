import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import Header from './Container/Header'

const Orders = ({list}) => {
    return (
        <div>
            <Header />
            <center>
                {list.length > 0 ?
                <div className='container'>
                    <div className='row'>
                        {list.map((item) => (
                            <div className='col-md-3' style={{padding:"5px"}} key={item.id}>
                                <div className='card' style={{width:"18rem",padding:"3px"}}>
                                <img src={item.url} alt='imagr' className='card-img-top' />
                                <div className='card-body'>
                                    <h5 className='card-title'>{item.name}</h5>
                                    <div className='card-text ' style={{color:"blue"}}>Billing Amount: Rs.{item.prize}/-</div>
                                    <p style={{color:"blueviolet"}}>Table Number : {item.table_number}</p>
                                </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                : (
                    <div className="empty-cart-container">
                        <img
                            src="https://res.cloudinary.com/sravangunaganti/image/upload/v1653301939/TastyKitchens/OBJECTS_rqxtrj.png"
                            alt="empty cart"
                            className="empty-cart-image"
                        />
                    <h1 className="no-order-heading">No Order Yet!</h1>
               <p className="no-order-text">
                         Your cart is empty. Add something from the menu.
                 </p>
               <Link to="/">
                     <button type="button" className="btn btn-success">
               Order Now
                   </button>
                   </Link>
                 </div>
                )
                
            }
            </center>
        </div>
    )
}

const mapStateToProps = state => ({
    list : state.orderreducer
})

export default connect(mapStateToProps)(Orders)
