import React from 'react'
import{Navbar }from 'react-bootstrap';
import StarRatingComponent from "react-star-rating-component";
import "./NavBar.js"

const NavBar = ({rate ,searchTerm,setRate,setSearchTerm,setHandleShow} ) => {
     
    const handleChange = event => {
        setSearchTerm(event.target.value);
      };

      const handleshow = () => {
        setHandleShow(true);
      };

    return (
    <div >
        <Navbar style={{background:'#ffcdd2',height:70}} variant="dark">
        <div className="form">        
            <div className="nav">
                <img src="https://fabskill.com/assets/img/bus_cover/cropped/63_1565191317.webp" alt="Go My Code" style={{width : "10rem"}} />
            </div>
            <div className="starplusinput"> 
            <StarRatingComponent name="rate" className="reactstars" starCount={5}
                    value={rate}
                    onStarClick={(nextValue, prevValue) =>
                        setRate(nextValue, prevValue)
                    } />

            <input type="text" placeholder="Search" className="input" value={searchTerm} onChange={handleChange} />
            
            <button className="Add_btn" onClick={handleshow} >Add Movie</button>
            
            </div>   
               
    </div>
        </Navbar>
    </div>
    )
}

export default NavBar