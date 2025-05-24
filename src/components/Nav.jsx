import { Link } from "react-router-dom";

function Nav(){
return (

     <nav>
          <Link to="/">Home</Link>
          <Link to="/users/ronaLdo">Ronado</Link>  
          <Link to="/users/messi">Messi</Link>
          <Link to="/users/neymar">Neymar</Link>
         
        </nav>
)

}

export default Nav;