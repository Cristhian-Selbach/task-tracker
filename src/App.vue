<template>
	<div class="container">
		<Header
			:showAddTask="showAddTask"
			@toggle-add-task="toggleAddTask"
			title="Task Tracker"
		/>
		<router-view :showAddTask="showAddTask"> </router-view>
		<Footer />
	</div>
</template>

<script>
	import Header from "./components/Header.vue";
	import Footer from "./components/Footer.vue";

	export default {
		components: {
			Header,
			Footer,
		},
		data() {
			return {
				showAddTask: false,
			};
		},
		methods: {
			toggleAddTask() {
				this.showAddTask = !this.showAddTask;
			},
		},
	};
</script>

<style src="./styles/GlobalStyle.css"></style>
