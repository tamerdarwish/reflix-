import './Components.css';
import {  Link } from 'react-router-dom';




const Landing = ({ usersData }) => {

  return (
    <div className='users-cards-container'>
      
    
    {usersData.map((user) => <Link to={`/catalog/${user.id}/`}>
    <span className ='user-card'>
      <img src={user.img}></img>
       <h1 className='user-name'> {user.name} </h1>
      </span>
      </Link>)} 
      
    </div>
 
  );
}

export default Landing;
