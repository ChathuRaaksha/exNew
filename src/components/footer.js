import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import footerlogo from '../images/footer.PNG'
import footerlogo2 from '../images/footerNew.jpg'
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import '../css/footer.css';
import { Email, Mail, Twitter } from '@mui/icons-material';
function Footer() {
  return (
    <div className='footer'>
        <div className='topfooter' style={{direction:'flex'}}>
          <div className='logo'  style={{ fontSize:'13px',color:'blue', width:'257px',height:'150px'}}>
          <img style={{ fontSize:'13px',color:'blue'}}src={footerlogo} />
          </div>
          <div className='first'>
            <h1 className='fa3' style={{fontFamily:'normal normal 300 26px/30px Sole Serif Caption',color: '#FFFFFF',fontSize:'26px',marginTop:'-150px',marginLeft:'350px'}}>What We Do</h1>
            <div style={{height:'50px',width:'150px',marginLeft:'350px',}}> <p1 style={{fontFamily:'normal normal medium 16px/35px Noto Sans',color: '#FED8FF',fontSize:'12px',marginTop:'-150px'}}>Business Applications Web Applications Mobile Apps Development Software Consultancy IT Consultancy Software For Startups</p1>
     </div>
                </div>

                <div className='Second'>
            <h1 style={{fontFamily:'normal normal 300 26px/30px Sole Serif Caption',color: '#FFFFFF',fontSize:'26px',marginTop:'-90px',marginLeft:'650px'}}>About Us</h1>
            <div style={{height:'50px',width:'250px',marginLeft:'650px',}}> <p1 style={{fontFamily:'normal normal normal 15px/29px Noto Sans;',color: '#FED8FF',fontSize:'12px',marginTop:'0px'}}>TECXA designs & builds intelligent, cost-effective & intuitive bespoke applications, software prototyping & IT consultancy that help streamline processes for businesses. Company Registration No: PV00230408</p1>
     </div>
                </div>


                <div className='Third' style={{flexDirection:'row'}}>
            <h1 className='con'style={{fontFamily:'normal normal 300 26px/30px Sole Serif Caption',color: '#FFFFFF',fontSize:'26px',marginTop:'-90px',marginLeft:'1050px'}}>Contact us</h1>
            <div style={{height:'50px',width:'290px',marginLeft:'1050px',}}> <p1 style={{fontFamily:'normal normal normal 16px/22px Noto Sans;',color: '#FED8FF',fontSize:'12px',marginTop:'0px'}}>
              <LocationOnIcon style={{width:'15px',height:'15px',color:'white'}}/>120, New kandy road, Battaramulla, Sri Lanka, 10120.</p1>  
             <p style={{fontFamily:'normal normal normal 16px/22px Noto Sans;',color: '#FED8FF',fontSize:'12px'}}> <PhoneIcon style={{width:'15px',height:'15px',color:'white'}}/> Phone: +94-11-449-3087 
             </p>
             <p style={{fontFamily:'normal normal normal 16px/22px Noto Sans;',color: '#FED8FF',fontSize:'12px'}}> <Email style={{width:'15px',height:'15px',color:'white'}}/> contact@exrygen.com
             </p>

             <p style={{fontFamily:'normal normal normal 16px/22px Noto Sans;',color: '#FED8FF',fontSize:'12px'}}> <FacebookIcon style={{width:'15px',height:'15px',color:'white'}}/><LinkedInIcon style={{width:'15px',height:'15px',color:'white'}}/><Twitter style={{width:'15px',height:'15px',color:'white'}}/>
             </p>
           
              
              </div>
           
     
              


        </div>




        </div>   
    
      <div className='bottomfooter'>

            <p> Copyrights &copy; 2021 All Rights Reserved EXRYGEN LIMITED
                  </p>
      </div>

    </div>
  )
}

export default Footer