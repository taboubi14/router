import React from 'react'
import "./AddMovie.css"
import  {useState} from 'react'

function AddMovie({setHandleShow,addMovie}) {

   const handleshow = () => {
       setHandleShow(false);
     };

   const [newmovie , setNewMovie] = useState({
       title:"",
       description:"",
       posteUrl:"",
       rating:0
   })
    

   let onChangehand=(e)=>
       {
           setNewMovie({...newmovie,[e.target.name]:e.target.value})
       }

   
    return (
       
       <div className="form-popup"  > 
           <div   className="form-container">
           <div className="tagclose">
           <h1>Add Movie</h1>
           <button type="button" class="cancel" onClick={handleshow} >X</button>
           </div>
           <label ><b>Movie Title</b></label>
           <input onChange={onChangehand} type="text" placeholder="Enter Movie Title" name="title" required/>
       
           <label  ><b>Movie Description</b></label>
           <input onChange={onChangehand}  type="text" placeholder="Enter Movie Description" name="description" required/>
           
           <label  ><b>Movie Poster</b></label>
           <input onChange={onChangehand} type="text" placeholder="Enter Movie Poster" name="posterUrl" required/>
           
           <label  ><b>Movie Rate</b></label>
           <input onChange={onChangehand} type="text" placeholder="Enter Movie rate" name="rating" required/>
           
           <button type="submit" class="btn" onClick={()=>addMovie(newmovie)}>Add</button>
           
           
      </div>
       </div>
    )
}

export default AddMovie
