import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import footerlogo from '../images/footer.PNG'
import footerlogo2 from '../images/footerNew.jpg'
import '../css/footer.css';
function Footer() {
  return (
    <div>
      

         <img style={{ fontSize:'13px',color:'blue', width:'100%',height:'220px'}}src={footerlogo2} />
    
      <div className='bottomfooter'>

            <p> Copyrights &copy; 2021 All Rights Reserved EXRYGEN LIMITED
                  </p>
      </div>

    </div>
  )
}

export default Footer