import React from 'react';
import Header from "./Header";
import axios from "axios";
import {setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    isAuth: boolean,
    login: string | null
}

type MapDispatchPropsType = {
    setAuthUserData: (userId: string | null, email: string | null, login: string | null) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        /* this.props.setIsFetching(true);*/
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    this.props.setAuthUserData(id, email, login)
                }
                /*this.props.setIsFetching(false);*/
            })
    }

    render() {
        return <>
            <Header {...this.props} />
        </>
    };
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);