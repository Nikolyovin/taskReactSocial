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
        console.warn('Obolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId)
    },

    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data.resultCode)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data.resultCode)
    },

    getProfilePhoto(id) {
        console.warn('Obolete method. Please profileAPI object.')
        profileAPI.getProfilePhoto(userId)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    //remake!!!
    getProfilePhoto(id) {
        return instance.get(`/profile/${ id }`).then(response => response.data.photos.small)
    },
    getStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
    },
    upDate(status) {
        return instance.put(`/profile/status`, { status: status })  //вторым параметорм передаем payload, по доке api это status 
    }

}

export const authAPI = {
    me() {
        return instance.get(`/auth/me`)
    }
}
