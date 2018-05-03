<template>
  <div id="app" @load="load()">
  	<div class="container-fluid">
  		<div class="row">
  			<div class="cover" @click="toggleSidenav"></div>
  			<sidenav :togNav="toggleSidenav"></sidenav>
  		</div>
  	</div>
	<div class="content">
		<topbar :toggleFn="toggleSidenav"></topbar>
		<main>
			<breadcrumb/>
			<div class="main-content pb-4 pt-4 pl-2 pr-2">
				<router-view></router-view>
			</div>
			<pageFooter/>
		</main>
	</div>
  </div>
</template>

<script>
import sidenav from './components/sidenav/sidenav'
import topbar from './components/topbar'
import breadcrumb from './components/breadcrumb'
import pageFooter from './components/footer'
export default {
	name: 'app',
	components: {
		sidenav,topbar,breadcrumb,pageFooter
	},
	methods:{
		toggleSidenav: function () {
			var elem = document.body;
			if (elem.classList.contains('sidenav-active')) {
				elem.classList.remove('sidenav-active');
			} else{
				elem.classList.add('sidenav-active');
			} 
		},
		load(){
			console.log(this.$route)
		}
	},
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800');
body{
	font-family: 'Poppins', sans-serif;
	background-color: #fff;
	height: 100%;
	overflow-x: hidden;
	position: relative;
	color: #67757c;
	font-weight: 300;
}
h1,h2,h3,h4,h5,h6,p,span,a,button{
	font-family: 'Poppins';
	outline: none;
	text-decoration: none;
}
a:hover, button:hover{
	outline: none;
	text-decoration: none;
}
.display-none{
	display: none;
}
h1,h2,h3,h4,h5,h6{
	color: #455a64;
}
.color-theme-dark{
	color: #455a64;
}
main{
	min-height: 637px;
	padding-top: 70px;
	background-color: #eee;
}
.op-5{
	opacity: 0.5;
}
.btn-custom{
	background-color: #26c6da;
	border: 1px solid #26c6da;
	color: #ffff;
	font-size: 14px;
	box-shadow: 0 2px 2px 0 rgba(40, 190, 189, 0.14), 0 3px 1px -2px rgba(40, 190, 189, 0.2), 0 1px 5px 0 rgba(40, 190, 189, 0.12);
	transition: 0.2s ease-in;
}
.btn-custom:hover{
	box-shadow: 0 14px 26px -12px rgba(40, 190, 189, 0.42), 0 4px 23px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(40, 190, 189, 0.2);
}
code{
	padding: .2rem .4rem;
	font-size: 90%;
	color: #bd4147;
	background-color: #f7f7f9;
	border-radius: 4px;
}
.box-shadow{
	box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
}
.main-content{
	height: 100%;
}
.theme-color{
	color: #009efb;
}
@media(min-width: 992px){
	main{
		padding-left: 240px; 
	}
}
.sidenav-active .sidenav{
	transform: translate3d(0,0,0);
}
.content{
	transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
}
@media(max-width: 991px){
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
		transform: translate3d(240px,0,0);
		overflow-x: hidden;
		transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
	}
}
</style>
