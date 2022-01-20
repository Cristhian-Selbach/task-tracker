<template>
	<button :class="color" class="btn" @click="OnClick()">
		{{ text }}
	</button>
</template>

<script>
	export default {
		props: {
			text: String,
			color: String,
		},
		methods: {
			onClick() {},
		},
	};
</script>
