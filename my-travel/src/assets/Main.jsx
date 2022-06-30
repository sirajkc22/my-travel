import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Main.css';
import pic from "../../src/images/nam.png"
const Main = () => {
  return (
    <div className='main'>
<div style={{ display: 'block', width: 1350, padding: 0 }}>
	
	<Carousel>
		<Carousel.Item interval={1500}>
		<img
			className="d-block w-100"
src="https://www.thameltravel.com/uploads/banner/Trekking.jpg"
		/>
		<Carousel.Caption>
			<h3>Mountains calling</h3>
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={500}>
		<img
			className="d-block w-100"
src="https://www.thameltravel.com/uploads/banner/Pokhara.jpg"
			
		/>
		<Carousel.Caption>
		
    <h3>Pokhara city</h3>
		
		</Carousel.Caption>
		</Carousel.Item>
    <Carousel.Item interval={500}>
		<img
			className="d-block w-100"
src="https://www.thameltravel.com/uploads/banner/Bhaktapur-Durbar-Square.jpg"
			
		/>
		<Carousel.Caption>
		
    <h3>Bhaktapur Durbar Square</h3>
		
		</Carousel.Caption>
		</Carousel.Item>
	</Carousel>
	</div>
	<div className="image">
        <img src={pic} alt='pic'/>      
        </div>
  <div className='text'>
    <h2>welcome to our website</h2>
    <p>We offer diverse attractions from the cultural jewels of the cities, Himalayan views, wildlife safari, and exploration of picturesque countryside. Travelers with all categories can enjoy their holiday tours in Nepal that embark on adventure lovers, honeymoon tours to the soft family tours with sightseeing and luxurious trips. Blue Himalaya is the perfect Nepal DMC</p>
  </div>
   <div className="info">
	<h3>TOP PLACES TO VISIT</h3>
  </div> 
    </div>
    
  )
}

export default Main