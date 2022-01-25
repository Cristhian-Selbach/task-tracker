<template>
	<form @submit.prevent="onSubmit" class="add-form">
		<div class="form-control">
			<h3>Task</h3>
			<input
				type="text"
				v-model="title"
				name="text"
				placeholder="Add Task"
				required
			/>
		</div>
		<div class="form-control">
			<h3>Day & Time</h3>
			<input
				type="text"
				v-model="day"
				name="day"
				placeholder="Add Day & Time"
			/>
		</div>
		<div class="form-control form-control-check">
			<h3>Set Reminder</h3>
			<input type="checkbox" v-model="reminder" name="reminder" />
		</div>

		<input type="submit" value="Save Task" class="btn btn-block" />
	</form>
</template>

<script>
	export default {
		name: "AddTask",
		data() {
			return {
				title: "",
				day: "",
				reminder: false,
			};
		},
		methods: {
			onSubmit() {
				const newTask = this.createTask();
				this.$emit("add-task", newTask);
				this.clearFields();
			},
			createTask() {
				const newTask = {
					title: this.title,
					day: this.day,
					reminder: this.reminder,
				};
				return newTask;
			},
			clearFields() {
				this.id = "";
				this.title = "";
				this.day = "";
				this.reminder = false;
			},
		},
	};
</script>

<style src="../styles/AddTaskStyle.css" scoped></style>
