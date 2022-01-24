<template>
	<button :class="color" class="btn">
		{{ text }}
	</button>
</template>

<script>
	export default {
		props: {
			text: String,
			color: String,
		},
		methods: {},
	};
</script>
