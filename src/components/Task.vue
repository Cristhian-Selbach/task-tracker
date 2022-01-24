<template>
	<div @click="onToggle" :class="[task.reminder ? 'reminder' : '', 'task']">
		<div class="texts">
			<h3>
				{{ task.title }}
			</h3>
			<p>{{ task.day }}</p>
		</div>
		<i @click="onDelete" class="fas fa-times fa-lg"></i>
	</div>
</template>

<script>
	export default {
		name: "Task",
		props: {
			task: Object,
		},
		methods: {
			onDelete() {
				this.$emit("delete-task");
			},
			onToggle() {
				this.$emit("toggle-reminder");
			},
		},
	};
</script>

<style scoped src="../styles/TaskStyle.css"></style>
