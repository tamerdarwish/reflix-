import './Landing.css';
import { BrowserRouter as Link } from 'react-router-dom';




const Landing = ({ usersData }) => {

  return (
    
    usersData.map(user => <span className ='user-card' style={{backgroundColor: user.backgroundColor}}>{user.name}</span>)

    
 
  );
}

export default Landing;
