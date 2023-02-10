import React from "react";
import {UserType} from "../redux/usersReducer";
import axios from "axios";
import userAvatar from '../../assets/images/user-avatar-icon.png'
import s from "./Users.module.css";

type UsersType = {
    users: UserType[]
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: UserType[]) => void
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    setCurrentPage: (currentPage:number) => void
    setTotalUsersCount: (totalCount:number) => void
}

class Users extends React.Component<UsersType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber:number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i=1; i<=pagesCount; i++) {
            pages.push(i)
        }

        return <div className={s.usersContainer}>
            <div className={s.pages}>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p ? s.selectedPage : ''}
                    onClick={()=>{this.onPageChanged(p)}}>{p}</span>})
                }
            </div>
            {this.props.users.map((u, index) =>
                <div key={index}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userAvatar} className={s.usersPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button> :
                            <button onClick={() => {
                                this.props.follow(u.id)
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
}

export default Users;