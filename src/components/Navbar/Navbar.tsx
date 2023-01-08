import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css'
import {SidebarBlockType} from "../redux/state";
import FriendsBar from "./FriendsBar/FriendsBar";

type NavbarType = {
    sidebar: SidebarBlockType
}

const Navbar = (props: NavbarType) => {
    let friendsBarElement = props.sidebar.sidebar.map(el => <FriendsBar key={el.id} id={el.id} name={el.name} ava={el.ava}/>)
    return (
        <nav className={s.nav}>
            <div className={s.navbar}>
                    <div className={s.item}>
                        <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/news" activeClassName={s.active}>News</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
                    </div>
                </div>
                <div className={s.friends}>
                    <div><span className={s.text}>My friends:</span></div>
                    <div className={s.friendsBlock}>{friendsBarElement}</div>
                </div>
        </nav>
    );
};

export default Navbar;