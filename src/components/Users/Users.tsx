import React from "react";
import s from './Users.module.css'
import {UserType} from "../redux/usersReducer";

type UsersType = {
    users: UserType[]
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: UserType[]) => void
}

let Users = (props: UsersType) => {
    if (props.users.length === 0){
    props.setUsers([
        {id: 1, photoUrl: 'https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg',
            followed: false, fullName: 'Katya L.', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, photoUrl: 'https://cdn2.vectorstock.com/i/1000x1000/54/41/young-and-elegant-woman-avatar-profile-vector-9685441.jpg',
            followed: true, fullName: 'Olya R.', status: 'I am a boss', location: {city: 'Murmansk', country: 'Russia'}},
        {id: 3, photoUrl: 'https://cdn2.vectorstock.com/i/1000x1000/26/06/young-executive-woman-profile-icon-vector-9692606.jpg',
            followed: false, fullName: 'Yuliya D.', status: 'I am a boss', location: {city: 'Charlotte', country: 'USA'}},
        {id: 4, photoUrl: 'https://cdn5.vectorstock.com/i/1000x1000/23/49/new-man-avatar-icon-flat-vector-19152349.jpg',
            followed: false, fullName: 'Dima S.', status: 'I am a boss', location: {city: 'Grodno', country: 'Belarus'}},
        {id: 5, photoUrl: 'https://cdn4.vectorstock.com/i/1000x1000/23/63/man-avatar-icon-flat-vector-19152363.jpg',
            followed: true, fullName: 'Anton M.', status: 'I am a boss', location: {city: 'Kiev', country: 'Ukraine'}}
    ])
    }

    return <div className={s.usersContainer}>
        {props.users.map(u=>
            <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={s.usersPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button> :
                            <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                     <div>{u.location.city}</div>
                    <div>{u.location.country}</div>
                </span>
            </div>)
        }

    </div>
}

export default Users;