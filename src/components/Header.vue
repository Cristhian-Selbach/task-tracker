<template>
	<header>
		<h1>{{ title }}</h1>
		<Button color="green" text="Add Task" />
	</header>
</template>

<script>
	import Button from "./Button.vue";
	export default {
		name: "Header",
		props: {
			title: String,
		},
		components: {
			Button,
		},
	};
</script>

<style scoped src="../styles/HeaderStyle.css"></style>
