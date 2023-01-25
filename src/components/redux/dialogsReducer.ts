import {ActionsType, DialogPageType, ProfilePageType} from "./state";

const initialState:DialogPageType =  {
    dialogs: [
        {
            id: 1,
            name: 'Dima',
            ava: 'https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg'
        },
        {
            id: 2,
            name: 'Olya',
            ava: 'https://cdn2.vectorstock.com/i/1000x1000/54/41/young-and-elegant-woman-avatar-profile-vector-9685441.jpg'
        },
        {
            id: 3,
            name: 'Marina',
            ava: 'https://cdn2.vectorstock.com/i/1000x1000/26/06/young-executive-woman-profile-icon-vector-9692606.jpg'
        },
        {
            id: 4,
            name: 'Egor',
            ava: 'https://cdn5.vectorstock.com/i/1000x1000/23/49/new-man-avatar-icon-flat-vector-19152349.jpg'
        },
        {
            id: 5,
            name: 'Oleg',
            ava: 'https://cdn4.vectorstock.com/i/1000x1000/23/63/man-avatar-icon-flat-vector-19152363.jpg'
        },
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Wooooooow'},
        {id: 4, message: 'Yoooooo'},
        {id: 5, message: 'Hohohohoh'}
    ],
    newMessageText: ''
}

const dialogsReducer = (state: DialogPageType = initialState, action: ActionsType): DialogPageType => {

    if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            state.newMessageText = action.newText;
        }
        else if (action.type === 'SEND-MESSAGE') {
            state.messages.push({id: new Date().getTime(), message: state.newMessageText});
            state.newMessageText = '';
        }

    return state;
}

export default dialogsReducer;