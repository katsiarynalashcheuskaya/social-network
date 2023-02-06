import React from "react";
import s from './Users.module.css'
import {UserType} from "../redux/usersReducer";
import axios from "axios";
import userAvatar from '../../assets/images/user-avatar-icon.png'

type UsersType = {
    users: UserType[]
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: UserType[]) => void
}

let Users = (props: UsersType) => {
    const getUsers = () => {
        if (props.users.length === 0){
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
                props.setUsers(response.data.items)
            })
        }
    }

    return <div className={s.usersContainer}>
        <button onClick={getUsers}>Get users</button>
        {props.users.map(u=>
            <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userAvatar} className={s.usersPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button> :
                            <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                     <div>{'u.location.city'}</div>
                    <div>{'u.location.country'}</div>
                </span>
            </div>)
        }

    </div>
}

export default Users;