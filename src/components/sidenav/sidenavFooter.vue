<template>
	<div class="sidenav-footer">
		<a href="#" v-b-tooltip.hover title="Settings" class="p-3 float-left text-center">
			<i class="ti-settings"></i>
		</a>
		<a href="#" v-b-tooltip.hover title="Email" class="p-3 float-left text-center">
			<i class="ti-email"></i>
		</a>
		<a href="#" v-b-tooltip.hover title="Logout" class="p-3 float-left text-center">
			<i class="ti-power-off"></i>
		</a>
	</div>
</template>

<script>
	export default{

	}
</script>

<style>
	.sidenav-footer{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 240px;
		background-color: #f2f6f8;
		border-top: 1px solid rgba(120, 130, 140, 0.13);
	}
	.sidenav-footer a{
		width: 33.333337%;
		text-decoration: none;
    	color: #455a64;
	}
	.sidenav-footer a:hover {
		color: #0275d8;
	}
	.sidenav-footer a i {
		font-size: 16px;
	}
</style>