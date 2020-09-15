import React, { Component} from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import userImage from '../img/user-menu.png';
import userImageD from '../img/user-menu-down.png';

class User extends Component {
    constructor () {
        super ()
        this.state = {
            click: false,
            menu: <img src={userImageD} alt="userMenu"></img>,
            dropDownMenu: null
        }
        
    }

menu () {
    const dropDownMenu = (
        <div>
            <Router>
                <ul>
                    <li><Link to='/Profile'>Profile</Link></li>
                    <li><Link to='/Tasks'>Tasks</Link></li>
                    <li><Link to='/LogOut'>Log out</Link></li>
                </ul>
    
            </Router>
            
        </div>
    );
    

if (this.state.click === false) {
    this.setState ({
        menu: <img src={userImage} alt="userMenu"></img>,
        dropDownMenu: dropDownMenu,
        click: !this.state.click})
    } else { 
        this.setState ({
            menu: <img src={userImageD} alt="userMenu"></img>,
            dropDownMenu: null,
            click: !this.state.click})
    }
}

render() {
    return (
        <div>
            <div>
                <div onClick={this.menu.bind(this)}>{this.state.menu}</div>
                {this.state.dropDownMenu}
            </div>
            

        </div>
    )
    }
}
export default User

/*
function User () {
    const [element, setElement] = useState([click = false,
                                            menu = <img src={userImageD} alt="userMenu"></img>,
                                            dropDownMenu = null])
        dropDownMenu = (
            <div>
                <Router>
                    <ul>
                        <li><Link to='/Profile'>Profile</Link></li>
                        <li><Link to='/Tasks'>Tasks</Link></li>
                        <li><Link to='/LogOut'>Log out</Link></li>
                    </ul>

                </Router>
                
            </div>
        )

        function handleClick (menu, dropDownMenu) {
            const elems = element.map(click === true ? ({menu: <img src={userImage} alt="userMenu"></img>, dropDownMenu: dropDownMenu}) : ({element}),
            setElement(elems)}


            
    

    return (
        <div>
            <div>
                <button onClick={handleClick()}>{menu}</button>
                {dropDownMenu}
            </div>
        </div>
    )
}

export default User
*/