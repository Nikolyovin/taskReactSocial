import axios from "axios";

const instance = axios.create({         //создаем экземпляр(инстанс) axiosa, и будем оброщаться через него, и нам не нужно будет каждый раз передовать криды, ведь мы их добавим в инстанс
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '91c3c151-6fde-4789-82be-fa55f7b1261b'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },

    getProfileUser(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },

    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data.resultCode)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data.resultCode)
    },

    getProfilePhoto(id) {
        return instance.get(`/profile/${ id }`).then(response => response.data.photos.small)
    },

    getAuth() {
        return instance.get(`/auth/me`).then(response => response.data)
    }
}
