<template>
	<div class="sidenav">
		<logo></logo>
		<div class="sidenav-content">
		<!-- 	<sidenavPicture>
				<p slot="name">Akhtar Abbas</p>
				<p slot="position">Front-End Engineer, Website Magician</p>
			</sidenavPicture> -->
			<routes :toggleNav="togNav"></routes>
			<movingArrow></movingArrow>
		</div>	
	</div>
</template>

<script type="text/javascript">
	import sidenavPicture from './sidenav_picture'
	import movingArrow from './arrow'
	import logo from './logo'
	import routes from './routes'
	export default {
		components:{
			sidenavPicture,logo,routes,movingArrow
		},
		props:[
		'togNav'
		],
	}
</script>

<style type="text/css">
	.sidenav{
		position: fixed;
		width: 250px;
		/* background-color: #263238; */
		background-color: #2f3a4c;
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
	@media(max-width: 992px){
		.sidenav{
			transform: translate3d(-105%,0,0);
		}
	}
</style>