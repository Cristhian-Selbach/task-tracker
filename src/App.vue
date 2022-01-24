<template>
	<div class="container">
		<Header
			:showAddTask="showAddTask"
			@toggle-add-task="toggleAddTask"
			title="Task Tracker"
		/>
		<transition name="fade">
			<div v-if="showAddTask">
				<AddTask @add-task="addTask" />
			</div>
		</transition>
		<TasksList
			@toggle-reminder="toggleReminder"
			@delete-task="deleteTask"
			:tasks="tasks"
		/>
	</div>
</template>

<script>
	import Header from "./components/Header.vue";
	import TasksList from "./components/TasksList.vue";
	import AddTask from "./components/AddTask.vue";
	export default {
		components: {
			Header,
			TasksList,
			AddTask,
		},
		data() {
			return {
				tasks: [],
				showAddTask: false,
			};
		},
		methods: {
			toggleAddTask() {
				this.showAddTask = !this.showAddTask;
			},
			deleteTask(id) {
				if (confirm("Are you sure?")) {
					this.tasks = this.tasks.filter((task) => task.id !== id);
				}
			},
			toggleReminder(id) {
				this.tasks = this.tasks.map((task) => {
					if (task.id === id) {
						task.reminder = !task.reminder;
					}
					return task;
				});
			},
			addTask(task) {
				this.tasks.push(task);
			},
		},
		created() {
			this.tasks = [
				{
					id: 1,
					title: "Doctor Appointment",
					day: "March 1st at 2:30pm",
					reminder: true,
				},
				{
					id: 2,
					title: "Meeting at School",
					day: "March 3rd at 9:00am",
					reminder: true,
				},
				{
					id: 3,
					title: "Food Shopping",
					day: "March 3rd at 4:30pm",
					reminder: true,
				},
			];
		},
	};
</script>

<style src="./styles/GlobalStyle.css"></style>
