<template>
  <div id="app">
  	<div class="container-fluid">
  		<div class="row">
  			<div class="cover" @click="toggleSidenav"></div>
  			<sidenav :togNav="toggleSidenav"></sidenav>
  		</div>
  	</div>
	<div class="content">
		<topbar :toggleFn="toggleSidenav"></topbar>
		<main>
			<router-view></router-view>
		</main>
	</div>
  </div>
</template>

<script>
import sidenav from './components/sidenav/sidenav'
import topbar from './components/topbar'
export default {
  name: 'app',
  components: {
		sidenav,topbar
	},
	methods:{
		toggleSidenav: function () {
			var elem = document.body;
			if (elem.classList.contains('sidenav-active')) {
				elem.classList.remove('sidenav-active');
			} else{
				elem.classList.add('sidenav-active');
			} 
		}
	},
}
</script>

<style>
body{
	background-color: #eee;
	height: 100%;
}
main{
	padding: 30px 20px 20px 20px;
}
@media(min-width: 992px){
	main{
		padding-left: 280px; 
	}
}
.sidenav-active .sidenav{
	transform: translate3d(0,0,0);
}
.content{
	transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
}
@media(max-width: 992px){
	.noscroll{
		position: relative;
		overflow: hidden;
	}
	.sidenav-active .cover{
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 3;
		background-color: rgba(0, 0, 0, 0.3);
		transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
	}
	.sidenav-active .content{
		transform: translate3d(34%,0,0);
		transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
	}
}
</style>
