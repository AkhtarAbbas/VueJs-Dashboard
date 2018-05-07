<template>
	<b-navbar toggleable="lg">
		<button class="nav-toggle ml-3 small-left" @click="toggleFn">
	        <span class="bar"></span>
	        <span class="bar"></span>
	        <span class="bar"></span>
	    </button>
		<b-collapse is-nav id="nav_collapse">
			<b-navbar-nav class="ml-auto small-block">
				<b-nav-item href="#" class="text-capitalize image text-muted">
					<img src="static/assets/4.jpg" alt="user_image" class="mr-2">
					Angela Dominic
				</b-nav-item>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
</template>

<script type="text/javascript">
	export default{
		props:[
			'toggleFn'
		],
	}
</script>

<style type="text/css" scoped>
	.navbar{
		position: fixed;
		height: 70px;
		background-color: #1e88e5;
		box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.5);
		left: 0;
		padding: 0;
		width: 100%;
		z-index: 2;
		transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
		color: #ffffff !important;
	}
	.navbar *{
		color: #ffffff !important;
	}
	.navbar button.nav-toggle .bar{
	    width: 25px;
	    border: 1px solid #ffffff;
	    margin-top: 5px;
	    display: block;
	}
	.navbar button{
		display: inline-block;
		background-color: transparent;
		border: none;
		cursor: pointer;
	}
	.navbar button:focus{
		outline: none;
	}
	.navbar .page-search span{
		font-size: 20px;
		font-weight: 500;
	    line-height: 65px;
		text-transform: capitalize;
	}
	.navbar-light .navbar-nav .nav-link{
		padding: 10px 25px !important;
	}
	.image{
		font-size: 19px;
		color: #ffffff;
	}
	.image img{
		border-radius: 100%;
		width: 35px;
	}
	@media(min-width: 992px){
		.navbar{
			width: calc(100% - 240px);
			left:240px;
		}
		.navbar button{
			display: none;
		}
	}
	@media(max-width: 992px){
		.navbar{
			display: block;
		}
		.collapse:not(.show) {
		    display: inline-block !important;
			width: 90%;
		}
		.small-block{
			display: inline-block;
			float: right;
			margin-top: 10px
		}
		.small-left{
			float: left;
			margin-top: 22px;
		}
	}
	@media (max-width: 580px) {
		.collapse:not(.show) { 
			width: 83%;
		}
	} 
	.logo a:hover { 
		color: #fff;
		text-decoration: none;
	}
</style>