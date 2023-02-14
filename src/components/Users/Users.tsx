import React from "react";
import {UserType} from "../../redux/usersReducer";
import userAvatar from '../../assets/images/user-avatar-icon.png'
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersType = {
    users: UserType[]
    follow: (id: number) => void
    unfollow: (id: number) => void
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    onPageChanged: (pageNumber:number) => void;
}

const Users = (props:UsersType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i=1; i<=pagesCount; i++) {
        pages.push(i)
    }
        return <div className={s.usersContainer}>
            <div className={s.pages}>
                {pages.map((p, index) => {
                    return <span key={index} className={props.currentPage === p ? s.selectedPage : ''}
                    onClick={(e)=>{props.onPageChanged(p)}}>{p}</span>})
                }
            </div>
            {props.users.map((u, index) =>
                <div key={index}>
                <span>
                    <div>
                        <NavLink to={'/profile/'+ u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userAvatar} className={s.usersPhoto}/>
                            </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": '8c4679a6-f8d7-42df-b729-d189d06fd7dc'
                                }})
                                    .then(response => {
                                        if (response.data.resultCode !== 0) {
                                            props.unfollow(u.id)
                                        }

                                    })}}>Unfollow</button>
                            :  <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }

                                    })
                            }}>Follow</button>}
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