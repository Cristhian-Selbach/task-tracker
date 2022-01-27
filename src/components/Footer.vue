<template>
	<footer>
		<p>Copyright &copy; 2022</p>
		<router-link v-if="aboutShow" to="/about">About</router-link>
	</footer>
</template>

<script>
	export default {
		name: "Footer",
		computed: {
			aboutShow() {
				return this.$route.path !== "/about" ? true : false;
			},
		},
	};
</script>

<style scoped src="../styles/FooterStyle.css"></style>
