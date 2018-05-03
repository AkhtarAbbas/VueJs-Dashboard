<template>
	<div class="sidenav">
		<sidenavHeader></sidenavHeader>
		<div class="sidenav-content">
			<routes :toggleNav="togNav"></routes>
		</div>
		<sidenavFooter/>
	</div>
</template>

<script type="text/javascript">
	import sidenavFooter from './sidenavFooter'
	import sidenavHeader from './logo'
	import routes from './routes'
	export default {
		components:{
			sidenavHeader,routes,sidenavFooter
		},
		props:[
		'togNav'
		],
	}
</script>

<style type="text/css">
	.sidenav{
		position: fixed;
		width: 240px;
		box-shadow: rgba(0, 0, 0, 0.08) 1px 0px 20px;
    	background: rgb(255, 255, 255);
		color: #b0bec5;
		top: 0;
		bottom: 0;
	    transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
		transform: translate3d(0,0,0);
	    z-index: 4;
	}
	.sidenav-content{
		position: relative;
	}
	@media(max-width: 991px){
		.sidenav{
			transform: translate3d(-105%,0,0);
		}
	}
</style>