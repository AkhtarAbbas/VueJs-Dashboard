<template>
	<div class="sidenav-header">
		<div class="logo">
			<a href="#">
				<img src="static/assets/logo.png" alt="logo">
				<span>Vue Js dashboard</span>
			</a>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {

	}
</script>

<style type="text/css">
	.sidenav-header{
		background-color: #1c81d9;
		box-shadow: -6px 0px 10px rgba(0, 0, 0, 0.5);
	}
	.logo{
		background-color: rgba(0, 0, 0, 0.05);
		padding: 0px 20px;
		height: 70px;
	}
	.logo a img{
		height: 55px;
		padding: 5px 0;
	}
	.logo a{
		padding: 4px 0px;
		display: block;
		font-size: 16px;
		text-align: left;
		font-weight: 500;
		line-height: 55px;
		color: #ffff;
		text-decoration: none;
	}
</style>