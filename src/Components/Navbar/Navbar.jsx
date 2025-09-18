import React, { useContext } from 'react'
import unitylogo from "../../assets/Logos/unitylogo.png"
import './Navbar.css'
import { Link } from 'react-router'
import { MyContext } from '../../Context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const { user, setUser, currentuser, setcurrentuser } = useContext(MyContext);

    return (

        <div className="navbar">
            <div className="logo-txt">
                <img src={unitylogo} alt="unity logosi" />
                {/* <ul>
                    <li><a href="#">Kurslarimi</a></li>
                    <li><a href="#">Yangiliklar</a></li>
                </ul> */}
            </div>
            <div className="login">
                {currentuser ?
                    <div className='user-icon'>
                        <div className="user-header">
                            <p className='username'>{currentuser.name}</p>
                            <FontAwesomeIcon className='user-logo' icon={faUser} />
                        </div>

                        <div className="user-side">
                            <Link to={"/courses"}><p className='menu-item'>📚 Kursla</p></Link>
                            <p className='menu-item logout'>🚪 Exit</p>
                        </div>
                    </div>
                    :
                    <Link to="login">
                        <button>Login</button>
                    </Link>
                }


            </div>
        </div>

    )
}

export default Navbar