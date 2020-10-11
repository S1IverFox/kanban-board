import React, { Component} from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import userAvatar from '../img/user-avatar1.png';
import arrowDown from '../img/arrow-down.png';
import arrowUp from '../img/arrow-up.png';
import './User.css'


class User extends Component {
    state = {
            click: false,
            menu: <img src={arrowDown} alt="userMenu"></img>,
            dropDownMenu: null
        }

menu () {
    const dropDownMenu = (
        <div className='user-menu'>
            <Router>
                <ul className='usermenu-list'>
                    <li><Link to='/Profile'>Profile</Link></li>
                    <li><Link to='/Tasks'>Tasks</Link></li>
                    <li><Link to='/LogOut'>Log out</Link></li>
                </ul>
            </Router>
        </div>
    );
    

if (this.state.click === false) {
    this.setState ({
        menu: <img src={arrowUp} alt="userMenu"></img>,
        dropDownMenu: dropDownMenu,
        click: !this.state.click})
    } else { 
        this.setState ({
            menu: <img src={arrowDown} alt="userMenu"></img>,
            dropDownMenu: null,
            click: !this.state.click})
    }
}

render() {
    return (
        <div className='header'>
            <div className='header-wrapper'>
                <img className='avatar' src={userAvatar} alt='Avatar'/>
                <div className='avatar-and-arrow' onClick={this.menu.bind(this)}>{this.state.menu}</div>
                <div>{this.state.dropDownMenu}</div>
            </div>
            

        </div>
    )
    }
}
export default User