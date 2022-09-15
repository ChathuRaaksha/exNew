import React from 'react'
import '../css/contact.css'
import img from '../images/software.png'
import facebook2 from '../images/facebook.jpg'
import inst from '../images/insta.jpg'
import twit from '../images/twitter.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from 'react-bootstrap';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import PhoneIcon from '@mui/icons-material/Phone';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Contact() {
 
  return (
     
<div className='contactus'>



<div className='contact'>
      <div className='leftSide'>
        <h1>Contact Us</h1>
        <h4>We'd love to hear about your project</h4>
            <p style={{color:'#929292'}}>Whether you're driven by a need to modernise,to gain
              a competetive edge,or to overcome a frustrating operational blocker,
              we're adept at crafting bespoke solutions that deliver real business
              value that will help your business grow.
            </p>

      </div>

      <div className=' rightSide' >
                <div className=' images' style={{backgroundImage:`url(${img})`}}>

                </div>
      </div>

    



  </div>
    <Card style={{color:'white', marginLeft:'90px',marginRight:'20px',height:'540px'}}>
  <div className='secondpage'style={{marginLeft:'35px'}}>
      <div className='card2' style={{marginLeft:'010px',width:'355px',height:'550px',marginTop:'50px'}}>
      <Box sx={{ minWidth: 275 ,width:'355px',height:'553px', backgroundColor:'#F0F7FF',marginLeft:'-44px' ,marginTop:'-45px',marginBottom:'-45px'}}>
     <Card style={{width:'355px',height:'540px', backgroundColor:'#F0F7FF',}}>
      <h1 style={{font:'normal normal medium 32px/48px Poppins',fontSize:'20px',marginLeft:'30px',marginTop:'50px'}}>Tell Us About Your Project</h1>
      <p style={{marginTop:'-25px',font:'normal normal normal 20px/46px SF Pro Display',fontSize:'13px',color:'#707070',marginLeft:'30px'}}>We are also active in social media. You can find us on below.</p>
       <h5 style={{marginTop:'-25px',font:'normal normal medium 20px/34px Noto Sans',fontSize:'13px',color:'#000000',marginLeft:'30px'}}><LocationOnIcon style={{color: '#A85EE7 ',width:'15px'}}/> Loreum Ipsum dummy (Sri Lanka) Dummy text , Colombo 03</h5>
      <h5 style={{marginLeft:"30px", fontSize:'13px'}}><PhoneIcon style={{color: '#A85EE7 ',width:'15px'}}/> 94 11 2xxxxxxx</h5>
      <h5 style={{marginLeft:"30px", fontSize:'13px'}}><EmailIcon style={{color: '#A85EE7 ',width:'15px'}}/> info@tecxa.com.llk</h5>
      <h1 style={{marginLeft:"30px", fontSize:'13px',marginTop:'30px',color:'#3F3F3F'}}>CONNECT WITH US</h1>
      <img alt='da'style={{marginLeft:"30px", fontSize:'13px',marginTop:'30px',color:'blue', width:'35px',height:'35px'}}src={facebook2} />
      <img alt='da'style={{marginLeft:"30px", fontSize:'13px',marginTop:'30px',color:'blue', width:'35px',height:'35px'}}src={inst} />
      <img alt='da' style={{marginLeft:"30px", fontSize:'13px',marginTop:'30px',color:'blue', width:'35px',height:'35px'}}src={twit} />
      </Card>
    
    </Box>
      </div>
      <div className='form'>

           <Form id='login-form' method='POST' style={{marginBottom:'900px'}}>
            <div style={{flexDirection:'row',display:'flex'}}>
            <Form.Group controlId="formBasicEmail" style={{marginTop:'30px'}}>
                               <Form.Label style={{alignItems:'center',alignContent:'center',color:'black',marginLeft:'210px'}}>Name </Form.Label>
                               <Form.Label style={{color:'red',marginLeft:'10px'}}>*</Form.Label>
                                <Form.Control style={{borderRadius:'90px',width:'270px',marginLeft:'100px',border:'1px solid #8F8F8F'}}  type="text"  name='fullname' 
  required />
                            </Form.Group>
      
                            <Form.Group controlId="formBasicEmail" style={{marginTop:'30px'}}>
                               <Form.Label style={{alignItems:'center',alignContent:'center',color:'black',marginLeft:'210px'}}>Email </Form.Label>
                               <Form.Label style={{color:'red',marginLeft:'10px'}}>*</Form.Label>
                                <Form.Control style={{borderRadius:'90px',width:'270px',marginLeft:'110px',marginRight:'100px',border:'1px solid #8F8F8F'}}  type="e-mail" name='email'
             required />
                            </Form.Group>

            </div>
                           
                          
            <div style={{flexDirection:'row',display:'flex'}}>
            <Form.Group controlId="formBasicEmail" style={{marginTop:'30px'}}>
                               <Form.Label style={{alignItems:'center',alignContent:'center',color:'black',marginLeft:'210px'}}>Subject </Form.Label>
                               <Form.Label style={{color:'red',marginLeft:'10px'}}>*</Form.Label>
                                <Form.Control style={{borderRadius:'90px',width:'270px',marginLeft:'100px',border:'1px solid #8F8F8F'}}  type="text"  name='Subject' 
  required />
                            </Form.Group>
      
                            <Form.Group controlId="formBasicEmail" style={{marginTop:'30px'}}>
                               <Form.Label style={{alignItems:'center',alignContent:'center',color:'black',marginLeft:'170px'}}>Contact Number </Form.Label>
                               <Form.Label style={{color:'red',marginLeft:'10px'}}>*</Form.Label>
                                <Form.Control style={{borderRadius:'90px',width:'270px',marginLeft:'110px',marginRight:'100px',border:'1px solid #8F8F8F'}}  type="e-mail" name='email'
             required />
                            </Form.Group>

            </div>

                            <Form.Group controlId="formBasicEmail">
                               <Form.Label style={{alignItems:'center',alignContent:'center',color:'black',marginLeft:'170px'}}>Project Details </Form.Label>
                               <Form.Label style={{color:'red',marginLeft:'10px'}}>*</Form.Label>
                               <textarea style={{borderRadius:'44px',width:'650px',height:'133px',marginLeft:'100px',border:'1px solid #8F8F8F'}} id="exampleFormControlTextarea1" rows="5" ></textarea>
                            </Form.Group>

                            <Button  style={{marginLeft:'290px',marginBottom:'150px',marginTop:'30px',color:'white',backgroundColor:'#18373C',borderInlineColor:'white',borderBlockColor:'white',width:'168px', background: "linear-gradient(#A95DE7, #727BF0)"}}>Submit  <ArrowForwardIcon style={{color:'white'}}/> </Button>
   
                            </Form>

      </div>

    </div></Card>
   

    
    <div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Ceylon%20electricity%20board%20colombo%2002&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
</div>
  )
}

export default Contact