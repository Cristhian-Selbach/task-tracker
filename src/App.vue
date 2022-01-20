<template>
	<div class="container">
		<Header title="Task Tracker" />
		<Tasks :tasks="tasks" />
	</div>
</template>

<script>
	import Header from "./components/Header.vue";
	import Tasks from "./components/Tasks.vue";
	export default {
		components: {
			Header,
			Tasks,
		},
		data() {
			return {
				tasks: [],
			};
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

<style src="./styles/AppStyle.css"></style>
