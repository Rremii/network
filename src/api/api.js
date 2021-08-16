import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "6fa24ce0-7d88-4e48-906f-251064e0b4f1"
    }

})

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 5) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    getFriends: (id) => {
        return instance.get(`users/`).then(response => response.data)
    }
}
export const followAPI = {
    follow: (id) => {
        return instance.post(`follow/${id}`, '').then(response => response.data)
    },
    unfollow: (id) => {
        return instance.delete(`follow/${id}`).then(response => response.data)
    }
}
export const authAPI = {

    login: (email, password, rememberMe,captcha = null) => {
        return instance.post(`auth/login`, {email, password, rememberMe,captcha})
    },
    getLoginData: () => {
        return instance.get(`auth/me`).then(response => response.data)
    },
    logout: () => {
        return instance.delete(`auth/login`).then(response => response.data)
    },
}
export const profileAPI = {
    setUserProfile: (id) => {
        return instance.get(`profile/${id}`).then(response => response.data)
    },
    getUserStatus: (id) => {
        return instance.get(`profile/status/${id}`)
    },
    updateUserStatus: (status) => {
        return instance.put(`profile/status`, {status})
    },
    setUserPhoto:(photoFile)=>{
        const formData = new FormData()
        formData.append("image",photoFile)
        return instance.put(`profile/photo`, formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
    },
    saveProfile: (profile) => {
        return instance.put(`profile`, {...profile,AboutMe:'hello',LookingForAJobDescription:'i do'})
    },
}
export const securityAPI = {
    getCaptchaUrl: () => {
        return instance.get(`security/get-captcha-url`)

}}