<template>
	<div v-for="task in tasks" :key="task.id">
		<Task
			@toggle-reminder="onToggle(task.id)"
			@delete-task="onDelete(task.id)"
			:task="task"
		/>
	</div>
</template>

<script>
	import Task from "./Task.vue";
	export default {
		name: "Tasks",
		props: {
			tasks: Array,
		},
		components: {
			Task,
		},
		methods: {
			onDelete(id) {
				this.$emit("delete-task", id);
			},
			onToggle(id) {
				this.$emit("toggle-reminder", id);
			},
		},
		emits: ["delete-task", "toggle-reminder"],
	};
</script>

<style>
	.list-enter-active,
	.list-leave-active {
		transition: all 1s ease;
	}
	.list-enter-from,
	.list-leave-to {
		transition: all 1s ease;
	}
</style>
