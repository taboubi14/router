import React , {useState } from 'react';
import './App.css';
import Filter from './/Component/Filter/Filter'
import AddMovie from './Component/AddMovie/AddMovie'
import NavBar from './Component/NavBar/NavBar'
import MovieDetails from './Component/MovieDetails/MovieDetails';
import {
  BrowserRouter as Root,
  Switch,
  Route
} from "react-router-dom";

const  App = () => {

   
  const [MovieData, setMovieData] = useState([
    {
      title: "Ripper Untold",
      trailer :"https://www.youtube.com/embed/7HRP_qWm4rI",
      description:
        "A detective and a forensic doctor team up to solve a series of gruesome murders in London, but one of them holds a deadly secret.",
      posterUrl:
        "https://cimalina.com/wp-content/uploads/2021/06/Ashampoo_Snap_2021.06.28_12h19m29s_002_-266x316.png",
      rating : 5 
    },
    {
      title: "White Demise",
      trailer :"https://www.youtube.com/embed/G4_BLinkQ8w",
      description:
        "A desperate woman embarks on a journey to find a life-saving bullet, seeking to reverse the tragic death of her daughter, but the only way to do so is through the man who resurrects her killer.",
      posterUrl:
        "https://cimalina.com/wp-content/uploads/2021/06/Ashampoo_Snap_2021.06.22_21h12m22s_001_-238x307.png",
      rating : 3  
      },
    {
      title: "Out of Death",
      trailer :"https://www.youtube.com/embed/oJUYwj3izT8",
      description:"Synopsis: From Death Retired Officer Jack Harris returns to the field when he finds a witness to a murder in a remote wilderness, and must protect her from a group of corrupt cops.",
      posterUrl:"https://cimalina.com/wp-content/uploads/2021/06/Ashampoo_Snap_2021.06.27_12h30m41s_006_-238x325.png",
      rating : 3  
      },
    {
      title: "Bats",
      trailer :"https://www.youtube.com/embed/ZOcXRymmK-w",
      description:
        "An alien virus that wiped out civilizations in ancient times through time has returned overnight due to a mysterious thunderstorm that infected all the bats in the area causing them to grow into giant cannibal beast bats",
      posterUrl:
        "https://cimalina.com/wp-content/uploads/2021/06/Ashampoo_Snap_2021.06.26_21h33m13s_001_-238x325.png",
        rating : 4  
      },
    { 
      title: "Nerve",
      trailer :"https://www.youtube.com/embed/2PR9MOPTI7g",
      description:
        " A high school official, Darede, is completely immersed in the online game Truth or Dare, until her every move is manipulated by an anonymous community calling itself the Watchers",
      posterUrl:
        "https://cimalina.com/wp-content/uploads/2021/06/Ashampoo_Snap_2021.06.27_18h18m02s_004_-238x321.png",
        rating : 1
      },
    { 
      title: "Jungle Run",
      trailer :"https://www.youtube.com/embed/5HNLUGgHaLY",
      description:
        "A group of friends travel to the Amazon in an attempt to find an archaeologist who has lost his way in the Amazon rainforest.",
      posterUrl:
        "https://cimalina.com/wp-content/uploads/2021/06/Ashampoo_Snap_2021.06.25_11h43m53s_005_-238x318.png",
        rating : 2  
      },
    { 
      title: "My Heart Can’t Beat Unless You Tell It To",
      trailer :"https://www.youtube.com/embed/mUIOv7ii_Wo",
      description:
        "A psychopath often quarrels with his siblings about his own care.",
      posterUrl: "https://cimalina.com/wp-content/uploads/2021/06/Ashampoo_Snap_2021.06.25_11h34m34s_004_-238x310.png",
      rating : 5
    },
    { 
      title: "Babysitter Must Die",
      trailer :"https://www.youtube.com/embed/vgR2oVolfsE",
      description:
        "A group of murderers break into a house while the babysitter is present, and the babysitter has to survive and confront them to save the family.",
      posterUrl:
        "https://cimalina.com/wp-content/uploads/2021/06/Ashampoo_Snap_2021.06.22_23h01m02s_008_-238x318.png",
        rating : 3  
      },
]);
const [searchTerm, setSearchTerm] = useState("");
const [rate, setRate] = useState(1);
const [handleShow, setHandleShow] = useState(false)

let addMovie=(newmovie)=>{

  setMovieData([...MovieData,newmovie]);
  setHandleShow(false);
 
}

  return (
    <Root>
    <div className="App">
      <NavBar setSearchTerm={setSearchTerm} setRate={setRate}   setHandleShow={setHandleShow} />
      {
        handleShow ? <AddMovie setHandleShow={setHandleShow} addMovie={addMovie} /> : null 
      }
      <Switch>
          <Route exact path="/">
          <h1 className="hheader">Movie Film</h1>

          <div className='filter'>
          <Filter MovieData={MovieData} searchTerm={searchTerm}  rate={rate}  />
          </div>
          </Route>
          <Route  path="/movie/:movieTitle">
            <MovieDetails MovieData={MovieData}/>
          </Route>
        </Switch>
     
    </div>
    <div className="footer">Created By mahdi </div>
    </Root>
  );
}

export default App;