import {
    FaPinterestSquare,
    FaInstagram,
    FaTwitter,
    FaFacebookSquare,
  } from 'react-icons/fa'
  
  import './Footer.css'
  
  const Footer = () => (
    <div className="footer-container ">
      <div className="logo-container">
        <img
          src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png"
          alt="website-footer-logo"
          className="logo"
        />
        <h1 className="footer-heading">Food Munch</h1>
      </div>
      <p className="footer-description">
        The only thing we are serious about is food.
        <br /> Contact us on
      </p>
      <div className="social-icons-container">
        <FaPinterestSquare
          testid="pintrest-social-icon"
          className="social-icon"
        />
        <FaInstagram testid="instagram-social-icon" className="social-icon" />
        <FaTwitter testid="twitter-social-icon" className="social-icon" />
        <FaFacebookSquare testid="facebook-social-icon" className="social-icon" />
      </div>
    </div>
  )
  
  export default Footer