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
export const authAPI = {
    getCurrentUserData () {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
            .then(response => response.data)
    }
}
export const unFollowAPI = {
    unFollow (id: number) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
            .then(response => response.data)
    }
}
export const followAPI = {
    follow (id: number) {
       return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
           .then(response => response.data)
    }
}


