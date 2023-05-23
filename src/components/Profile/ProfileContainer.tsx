import React from 'react';
import Profile from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profileReducer";
import {compose} from "redux";

type MapStatePropsType = {
    profile: string | null
    status: string
}
type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
}
type PathParamsType = {
    userId: string | undefined
}
type ProfilePropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount(){
        let userId = Number(this.props.match.params.userId);
        if (!userId) {
            userId = 27758;
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render(){
    return (
        <div>
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        </div>
    );
};
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose<React.ComponentType>(
    (connect(mapStateToProps, {getUserProfile, getStatus, updateStatus})),
    withRouter,
 /*   withAuthRedirect*/
)(ProfileContainer)