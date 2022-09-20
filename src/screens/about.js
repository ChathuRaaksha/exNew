import React from 'react'
import '../css/about.css'
import img from '../images/abt.PNG'
import img2 from '../images/left.jpg'
import img3 from '../images/who.png'
import img4 from '../images/Smith.png'
import Button from '@mui/material/Button';
import {TeamList} from '../helper/TeamList';
import TeamItem from '../components/TeamItem';

function About() {
  return (
    <div className='set1' style={{height:'390vh'}}>
    <div className='aboutus2' style={{display:'flex'}}>
      <div className='ab'>
      <h2  style={{marginLeft:'50px',fontSize:'60px',width:'250px',marginTop:'50px',fontFamily:'Sole Serif Caption',fontWeight:'bold'}}>About Us</h2>
      <h5 style={{marginLeft:'50px',fontSize:'27px',width:'450px',marginTop:'50px', fontFamily:'Noto Sans',fontWeight:'Regular',}}>Trusted software development:delivered intelligently, designed to unlock growth</h5>
      <p style={{marginLeft:'50px',marginTop:'20px',color:'#929292',fontSize:'15px'}}>Whether you're driven by a need to modernise,to gain
        a competetive edge, or to overcome a frustrating operational blocker, we're adept at 
        crafting bespoke solutions that deliver real business value that will help your business grow.
      </p>
      </div>
        <div className='leftSide'>
        <div className=' images' style={{backgroundImage:`url(${img})`}}>

      </div>
        
      
        </div>
       
    </div>


    <div className='aboutus3' style={{display:'flex'}}>
      <div>
    

        <img style={{width:'550px',marginTop:'-280px',}}src={img2}/>
        <div>
      <h2  style={{marginLeft:'800px',fontSize:'50px',width:'450px',marginTop:'-650px',fontFamily:'Sole Serif Caption',fontWeight:'bold'}}>Who are we ? </h2>
      <p style={{marginLeft:'700px',width:'450px',marginTop:'20px',fontSize:'15px',fontFamily:'Noto Sans'}}>
        People's working hours are no longer 9-5, Monday to Friday. They expect to be able to work and
        access information from a company when they nee it from wherever they are;a web application offers
        companies a flexibility cost-effective way to meet this need. From a streamlined version of there an 
        internal system to increasing the efficency of remote or traveling the employees.to an interactive tool
        to help build brand loyality with customer a web application can deliver.Other web application examples inclue owl.
      </p>
      <img style={{marginLeft:'750px',width:'250px',marginTop:'1px',}}src={img3}/>
      </div>
      </div>
       
       
    </div>


    <div className='aboutus4' style={{display:'flex'}}>
      <div className='abt4'>
      <h2 className='ta' style={{marginLeft:'150px',fontSize:'50px',width:'450px',marginTop:'280px',color:'#FF5400',fontFamily:'Sole Serif Caption',fontWeight:'bold'}}>#Meet Our Team</h2>
      <p style={{marginLeft:'150px',width:'450px',marginTop:'20px',fontSize:'15px',alignContent:'center',fontFamily:'Noto Sans',alignItems:'center'}}>
        Our Team of 300+ people mixes together all of the ingredients we belive are required 
        for a successful software development company. We have highly talented, energetic software developers,architects and
        testers all recruited through a rigorous process. Analytical minds that can thel understand the naunces of our customer's business,
        the methodological project managers and designers, driven management with a focus for quality and delivery, and the inovaters 
        that transform the way we look at things.
      </p>
      <Button className='btn' style={{marginLeft:'150px',marginTop:'50px',color:'white',fontFamily:'Segoe UI',backgroundColor:'#18373C',borderInlineColor:'white',fontWeight:'Semibold',fontSize:'12px',height:'40px',borderBlockColor:'white',width:'175px', background: "linear-gradient(#DF4613, #8E0969)"}}>JOIN WITH OUR TEAM</Button>
      <img className='img1'style={{marginLeft:'750px',width:'450px',marginTop:'-351px',}}src={img4}/>
      <hr style={{width:'85%',marginLeft:'50px'}}/>
      </div>
      
      </div>
       


      <div className='aboutus5' style={{display:'flex'}}>
      <div>
      <h2  style={{marginLeft:'50px',fontSize:'40px',width:'450px',marginTop:'10px',fontFamily:'Sole Serif Caption',fontWeight:'bold'}}>Team Members</h2>
      
      </div>
      <div style={{display:'flex',marginTop:'50px',marginLeft:'-350px'}}className='menuList'>{TeamList.map((menuItem,key)=>{
        return <TeamItem key={key} image={menuItem.image} name={menuItem.name} title={menuItem.title}/>
      })}

      </div>

      <div style={{display:'flex',marginTop:'450px',marginLeft:'-1020px'}}className='menuList'>{TeamList.map((menuItem,key)=>{
        return <TeamItem key={key} image={menuItem.image} name={menuItem.name} title={menuItem.title}/>
      })}

      </div>
      </div>






       
    </div>





  
  )
}

export default About