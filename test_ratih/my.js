const store = new Vuex.Store({
	strict: true, 
	state: {
		data_nama: [],
		refresh: true
	},
	mutations: {   
		SET_NAMA(state, data){
			state.data_nama = data
		}
	},
	actions: { 
		async get_nama(context){
			context.commit('SET_NAMA', JSON.parse(localStorage.getItem('data')))
			
			if (localStorage.getItem('nama_pertama') === undefined) {
				console.log('masuk axios')
				const data = await axios.get('https://randomuser.me/api/?results=20')
				localStorage.setItem('data', JSON.stringify(data.data.results))
				localStorage.setItem('nama_pertama', data.data.results[0].name.first)
				context.commit('SET_NAMA', data.data.results)
			}

			return {
                status: true,
                message: 'Berhasil.'
            }
		}
	},
	getters: { 
		data_nama(state){
			return state.data_nama
		}
	}
})

// objek

var vm = new Vue({
	el: '#app',
	store: store,  
	computed: {
		dataApi() {
			return store.getters.data_nama
		}
	},
	data: () => ({
        teks: 'cek',
        data: [],
        // refresh: true,
    }),
	methods: {
	},
	created(){
		// if (this.data.length < 1) {
			store.dispatch('get_nama')
				.then((response) => {
					console.log('masuk dispatch')
					this.data = store.getters.data_nama
					// this.refresh = false
				})
				.catch((error) => {
					console.log('error : ', error);
				})
		// }
		console.log(this.data)
	}
})