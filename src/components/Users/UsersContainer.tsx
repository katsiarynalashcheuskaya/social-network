import React from 'react';
import {connect} from "react-redux";
import {ActionsType, AppStateType} from "../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../redux/usersReducer";
import Users from "./Users";

let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch: (action: ActionsType) =>  void) => {
    return {
        follow: (userId: number) => dispatch(followAC(userId)),
        unfollow: (userId: number) => {dispatch(unfollowAC(userId))},
        setUsers: (users: UserType[]) => {dispatch(setUsersAC(users))},
        setCurrentPage: (currentPage: number) => {dispatch(setCurrentPageAC(currentPage))},
        setTotalUsersCount: (totalCount: number) => {dispatch(setTotalUsersCountAC(totalCount))}
        }
    }


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;