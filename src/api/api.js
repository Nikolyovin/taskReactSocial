import axios from "axios";

const instance = axios.create({         //создаем экземпляр(инстанс) axiosa, и будем оброщаться через него, и нам не нужно будет каждый раз передовать криды, ведь мы их добавим в инстанс
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '31a61c33-74c0-4763-ad70-feb03a3f368d'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },

    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },

    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data.resultCode)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data.resultCode)
    },

    getProfilePhoto(id) {
        return instance.get(`/profile/${ id }`).then(response => response.data.photos.small)
    }
}

export const authAPI = {
    me() {
        return instance.get(`/auth/me`)
    }
}
