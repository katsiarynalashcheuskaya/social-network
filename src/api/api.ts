import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '8c4679a6-f8d7-42df-b729-d189d06fd7dc',
    },
});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}
/*
export const getUsers = (currentPage = 1, pageSize = 5) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
}

export const Foll = (currentPage = 1, pageSize = 5) => {
    return axios.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
}*/
