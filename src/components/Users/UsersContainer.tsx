import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {
    follow, getUsers,
    setCurrentPage,
    setIsFollowingInProgress, unFollow,
    UserType
} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {Redirect} from "react-router-dom";

export type UsersType = {
    users: UserType[]
    follow: (id: number) => void
    unFollow: (id: number) => void
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    setCurrentPage: (currentPage: number) => void
    isFetching: boolean
    followingInProgress: Array<number>
    getUsers: (currentPage: number, pageSize: number) => void
    isAuth: boolean
}

class UsersContainer extends React.Component<UsersType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"} />
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth

    }
}
/*let mapDispatchToProps = (dispatch: (action: ActionsType) =>  void) => {
    return {
        follow: (userId: number) => dispatch(followAC(userId)),
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        setIsFetching: (isFetching: boolean) => {
            dispatch(setIsFetchingtAC((isFetching)))
        }
    }
}*/

export default connect(mapStateToProps, {
    follow, unFollow, setCurrentPage, setIsFollowingInProgress, getUsers
})(UsersContainer);