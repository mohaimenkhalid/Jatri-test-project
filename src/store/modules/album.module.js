import {albumService} from "@/services";

const state = {
    albums: [],
    albumPhotos: [],
    albumDetails: null,
    loading: false
}

const getters = {
    getAllAlbums(state) {
        return state.albums;
    },
    getAlbumPhotos(state) {
        return state.albumPhotos;
    },
}

const mutations = {
    SET_ALBUMS(state, payload) {
        state.albums = payload;
    },
    SET_LOADING(state, payload) {
        state.loading = payload;
    },
    SET_ALBUMS_DETAILS(state, payload) {
        state.albumDetails = payload
    },
    SET_ALBUM_PHOTOS(state, payload) {
        state.albumPhotos = payload;
    },
}

const actions = {
    async fetchAlbumsList({commit}) {
        commit("SET_LOADING", true)
        await albumService.getAllAlbumsList()
            .then(res=> {
                commit("SET_ALBUMS", res)
                commit("SET_LOADING", false)
            })
    },

    async albumPhotos(context, albumId) {
        context.commit("SET_LOADING", true)
        await albumService.getAlbumPhotos(albumId)
            .then(res => {
                context.commit("SET_ALBUM_PHOTOS", res)
                context.commit("SET_LOADING", false)
            })
    },

    async albumDetailsInformation(context, albumId) {
        context.commit("SET_LOADING", true)
        await albumService.albumsDetails(albumId)
            .then(res => {
                if(res.status !== 200) {
                    context.commit("SET_ALBUMS_DETAILS", null)
                } else {
                    context.commit("SET_ALBUMS_DETAILS", res.data)
                }
                context.commit("SET_LOADING", false)
            })
    }

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}
