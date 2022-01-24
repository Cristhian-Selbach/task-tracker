<template>
	<header>
		<h1>{{ title }}</h1>
		<Button
			@click.native="toggleAddTask"
			color="green"
			:text="showAddTask ? 'Close' : 'Add Task'"
		/>
	</header>
</template>

<script>
	import Button from "./Button.vue";
	export default {
		name: "Header",
		props: {
			title: String,
			showAddTask: Boolean,
		},
		components: {
			Button,
		},
		methods: {
			toggleAddTask() {
				this.$emit("toggle-add-task");
			},
		},
	};
</script>

<style scoped src="../styles/HeaderStyle.css"></style>
