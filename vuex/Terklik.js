export default Terklik = {
	computed: {
		terklik(){
			return this.$store.state.terklik
		}
	},
	template: `
		<p>Button sudah di klik {{ terklik }} kali</p>
	`
}
