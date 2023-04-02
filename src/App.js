import logo from './logo/Reflex-Logo-Vita-Dark.png'
import './App.css';
import Landing from './components/Landing';
import Catalog from './components/Catalog';
import MovieDetail from './components/MovieDetail';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function App() {

  let moviesData = [
    { id: 0, isRented: true, title: "Tarzan", year: 1999, img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." },
    { id: 1, isRented: false, title: "The Lion King", img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies." },
    { id: 2, isRented: false, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself." },
    { id: 3, isRented: false, title: "The Sword in the Stone", year: 1963, img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg", descrShort: "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means." },
    { id: 4, isRented: false, title: "Beauty and the Beast", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." }
  ]

  let usersData = [
    { id: 0, name: 'Tamer', budget: 10, img: 'https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Penguin-512.png', catalogMovies: [...moviesData], rentedMovie: [{ id: 0, isRented: true, title: "Tarzan", year: 1999, img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." }] },
    { id: 1, name: 'Omer', budget: 10, img: 'https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Cat-512.png', catalogMovies: [...moviesData], rentedMovie: [{ id: 0, isRented: true, title: "Tarzan", year: 1999, img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." }] },
    { id: 2, name: 'Taha', budget: 10, img: 'https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Panda-512.png', catalogMovies: [...moviesData], rentedMovie: [{ id: 0, isRented: true, title: "Tarzan", year: 1999, img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." }] }
  ]

  let [usersDataStatus, setUserCatalogData] = useState(usersData)

  const plusClick = (movieID, userID) => {
    let newUsersData = [...usersDataStatus]
    if (newUsersData[userID].budget < 3) {

      alert('You don`t have enough budget')
    } 
    else {
      newUsersData[userID].catalogMovies[movieID].isRented = true
      newUsersData[userID].rentedMovie.push(newUsersData[userID].catalogMovies[movieID])
      newUsersData[userID].budget -= 3
      setUserCatalogData(newUsersData)
    }


  }

  const removeClick = (movieID, userID) => {
    let newUsersData = [...usersDataStatus]
    newUsersData[userID].catalogMovies[movieID].isRented = false
    newUsersData[userID].rentedMovie.slice(movieID, 1)
    newUsersData[userID].budget += 3
    setUserCatalogData(newUsersData)
  }

  let GetMovieID = () => {
    let { movieID } = useParams();
    let movieIndex = parseInt(movieID)
    return (
      <MovieDetail movie={moviesData[movieIndex]} />

    );
  }

  let GetUserID = () => {
    let { userID } = useParams();
    let UserIndex = parseInt(userID)
    return (
      <Catalog user={usersDataStatus[UserIndex]} plusClick={plusClick} removeClick={removeClick} />

    );
  }

  return (

    <Router>
      <div className="App">
        <Link to={'/'}> <img id='logo' src={logo} /> </Link>
        <Link to={'/'}> <div id='home' > Home</div></Link>


      </div>
      <Routes>
        <Route path="/" element={<Landing usersData={usersDataStatus} />} />
        <Route path="/catalog/:userID" Component={GetUserID} />
        <Route path="/movies/:movieID" Component={GetMovieID} />
      </Routes>
    </Router>

  );
}

export default App;
