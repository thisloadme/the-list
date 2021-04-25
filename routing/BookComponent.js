export const BookComponent = {
	data(){
		return {
			books: [
				{
					id: 1,
					judul: 'Judul Buku 1'
				},{
					id: 2,
					judul: 'Judul Buku 2'
				},{
					id: 3,
					judul: 'Judul Buku 3'
				},{
					id: 4,
					judul: 'Judul Buku 4'
				},{
					id: 4,
					judul: 'Judul Buku 5'
				},
			]
		}
	},
	template: `
		<div>
			<h1>Daftar Buku</h1>
			<ul>
				<li v-for="(val, index) in books" :key="index">
					<router-link to="'/book/'+val.id">{{ val.judul }}</router-link>
				</li>
			</ul>
		</div>
	`
}