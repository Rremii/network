import axios from "axios";

const baseUrl = `https://social-network.samuraijs.com/api/1.0/`

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "1aeec809-b404-4144-a045-23e113d2772a"
    }

})


export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 5) => {
        return instance.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    }
}
export const followAPI = {
    follow:(id)=>{
        return instance.post(baseUrl + `follow/${id}`,'').then(response => response.data)
    },
    unfollow:(id)=>{
        return instance.delete(baseUrl + `follow/${id}`).then(response => response.data)
    }
}
export const authAPI = {
    login:()=>{
        return instance.get(baseUrl + `auth/me`).then(response => response.data)
    }
}
export const profileAPI = {
    setUserProfile:(id)=>{
        return instance.get(baseUrl + `profile/${id}`).then(response => response.data)
    }
}