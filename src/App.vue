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
			async addTask(task) {
				const res = await fetch("http://localhost:5000/tasks", {
					method: "POST",
					headers: {
						"Content-type": "application/json",
					},
					body: JSON.stringify(task),
				});

				const data = await res.json();
				this.tasks.push(data);
			},
			async deleteTask(id) {
				if (confirm("Are you sure?")) {
					await fetch("http://localhost:5000/tasks/" + id, {
						method: "DELETE",
					});
					this.tasks = this.tasks.filter((task) => task.id !== id);
				}
			},
			toggleAddTask() {
				this.showAddTask = !this.showAddTask;
			},
			async toggleReminder(id) {
				const taskToToggle = await this.fetchTask(id);
				const updTask = {
					...taskToToggle,
					reminder: !taskToToggle.reminder,
				};

				await fetch("http://localhost:5000/tasks/" + id, {
					method: "PUT",
					headers: {
						"Content-type": "application/json",
					},
					body: JSON.stringify(updTask),
				});

				console.log(taskToToggle);

				this.tasks = this.tasks.map((task) => {
					if (task.id === id) {
						task.reminder = !task.reminder;
					}
					return task;
				});
			},
			async fetchTasks() {
				const res = await fetch("http://localhost:5000/tasks");
				const data = await res.json();
				return data;
			},
			async fetchTask(id) {
				const res = await fetch("http://localhost:5000/tasks/" + id);
				const data = await res.json();
				return data;
			},
		},
		async created() {
			this.tasks = await this.fetchTasks();
		},
	};
</script>

<style src="./styles/GlobalStyle.css"></style>
