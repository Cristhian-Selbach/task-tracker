<template>
	<div v-for="task in tasks" :key="task.id">
		<h3>{{ task.title }}</h3>
	</div>
</template>

<script>
	export default {
		name: "Tasks",
		props: {
			tasks: Array,
		},
		created() {
			console.log("dasdasda");
		},
	};
</script>

<style></style>
