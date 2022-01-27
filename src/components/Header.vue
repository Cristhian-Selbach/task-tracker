<template>
	<header>
		<h1>{{ title }}</h1>
		<transition name="fade">
			<Button
				v-if="homePage"
				@click.native="toggleAddTask"
				color="green"
				:text="showAddTask ? 'Close' : 'Add Task'"
			/>
		</transition>
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
		computed: {
			homePage() {
				return this.$route.path === "/" ? true : false;
			},
		},
		methods: {
			toggleAddTask() {
				this.$emit("toggle-add-task");
			},
		},
	};
</script>

<style scoped src="../styles/HeaderStyle.css"></style>
