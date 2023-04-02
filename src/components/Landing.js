import './Landing.css';
import {  Link } from 'react-router-dom';
import  {useState} from 'react';




const Landing = ({ usersData }) => {

 // let newUserID

  return (
    <div className='users-cards-container'>
    
    {usersData.map((user) => <Link to={`/catalog/${user.id}/`}>
    <span className ='user-card'>
      <img src={user.img}></img>
      
       <h1> {user.name} </h1>
      
      </span></Link>)} 
      

    </div>
 
  );
}

export default Landing;
