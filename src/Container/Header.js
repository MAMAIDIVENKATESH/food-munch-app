import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {connect} from 'react-redux'

const Header = ({count}) => {

    const [menu,setMenu]=useState(false)

    return (
        <>
        
        <div className='container mb-2'>
        <div className='row'>
        <div className='col-sm-6 d-md-none d-lg-none '>
          <nav className='navbar navbar-light bg-light   d-flex flex-row justify-content-between'>
        <Link to="/" style={{ gap:"10px",textDecoration:"none",display:"flex"}}  >
                    <img
                      src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/chef-food-restaurant-logo-editable-design-template-949091af7f6dc8b1fc80d8669faab4d6_screen.jpg?ts=1619030187"
                      width="100" height="100"
                      alt="website logo"
                      className ="mr-5"
                    />
                    <h1 style={{height:"32px", left: "21.32%" , right:" 66.74%" , top: "calc(50% - 32px / 2 - 174px)", fontFamily:"DM Sans", fontStyle: "italic",fontWeight: "700",fontSize: "24px",lineHeight: "32px",  color: "brown" ,textDecoration:"none"}}>Chef Food Restaurant</h1>
        </Link>
        <button
        style={{right:"35px", marginBottom:"10px",border:"none",outline:"none",marginLeft:"auto",backgroundColor: "transparent"}}
        onClick={()=>setMenu(true)}
        >
            <GiHamburgerMenu  />
        </button>
        </nav>
        {menu &&  (
          <div className='d-flex mt-3'>
          <ul style={{marginRight:"60px",gap:"20px",listStyleType:"none",display:"flex"}}>
             <Link to="/">
                <li>
                <button 
                type='button'
                className='btn btn-primary '
                style={{height:"35px",width:"55px",borderRadius:"5px",padding:"5px",color:"white",backgroundColor:"#f7931e",borderWidth:"0px"}}
                >Homevbn</button>
                    
                </li>
             </Link>
                <Link to="/orders">
                    <li className='mr-5' >
                        <button  
                        type='button'
                        //style={{fontSize:"15px",height:"35px",width:"75px",borderRadius:"5px",padding:"5px",color:"white",backgroundColor:"#f7931e",borderWidth:"0px"}}
                        className='btn btn-primary position-relative'
                        >Orders<span className='mt-1 position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>{count}</span></button>
                    </li>
                </Link>
               
               
                 
             </ul>

             <button
                    type="button"
                    style={{right:"35px", marginBottom:"10px",border:"none",outline:"none",marginLeft:"auto",backgroundColor: "transparent"}}
                    onClick={()=>setMenu(false)}
                  >
                    <AiFillCloseCircle size={35} />
                   
                  </button>
          </div>
        )}
        </div>
        </div>
        </div>
    


    <div className='container mt-1 d-lg-block d-none' >
        <div className='row'>
            <div className='' >
            <nav className='navbar navbar-light bg-light mb-3' style={{display:"flex",justifyContent:"space-between",width:"100%" }}>
            <div >
            <Link to="/" style={{ marginLeft:"10px",gap:"10px",textDecoration:"none",display:"flex"}}  >
                    <img
                      src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png"
                      alt="website logo"
                      style= {{marginLeft:"0px",height:"42px",width:"68px"}}
                    />
                    <h1  style={{height:"32px", left: "21.32%" , right:" 66.74%",  top:"30px",fontFamily:"DM Sans", fontStyle: "italic",fontWeight: "700",fontSize: "24px",lineHeight: "32px", color: "green" ,textDecoration:"none"}}>Food Munch</h1>
                  </Link>
                  </div>
             <ul style={{marginRight:"60px",gap:"20px",listStyleType:"none",display:"flex"}}>
             <Link to="/">
                <li>
                <button 
                type='button'
                className='btn btn-success '
                //style={{height:"35px",width:"55px",borderRadius:"5px",padding:"5px",color:"white",backgroundColor:"#f7931e",borderWidth:"0px"}}
                >Home</button>
                    
                </li>
             </Link>
                <Link to="/orders">
                    <li className='mr-5' >
                        <button  
                        type='button'
                        //style={{fontSize:"15px",height:"35px",width:"75px",borderRadius:"5px",padding:"5px",color:"white",backgroundColor:"#f7931e",borderWidth:"0px"}}
                        className='btn btn-success position-relative'
                        >Orders<span className='mt-1 position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>{count}</span></button>
                    </li>
                </Link>
             </ul>
           
        </nav> 
            </div>
        </div>
    </div>
        
    </>
    )
}

const mapStateToProps = state =>({
    count : state.orderreducer.length
})

export default connect(mapStateToProps)(Header);
