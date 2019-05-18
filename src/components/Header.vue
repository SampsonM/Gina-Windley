<template>
	<div class="header">
		<router-link to="/">
			<img class="img-link"
				src="../assets/images/logo.png"
				alt="gina's logo">
		</router-link>
	</div>
</template>
<script>
export default {
	name: 'Header'
}
</script>
<style lang="scss" scoped>
@import "../lib/_colors.scss";
@import "../lib/_mixins.scss";

.header {
	position: fixed;
	top: 0;
	box-sizing: border-box;
	height: 52px;
    min-width: 100%;
	overflow: hidden;
	padding: 5px 0;
	z-index: 3;
	border: 1px solid $orange;
	background: #ffffffce;

	@include tablet {
		height: 65px;
	}

  	a {
		max-height: 60px;
		font-weight: bold;
		color: $orange;

		&.router-link-exact-active {
			color: $dull-orange;;

			&:hover {
				color: $orange;
			}
		}
	}
}

.img-link {
	height: 100%;
}
</style>
