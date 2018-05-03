<template>
	<ul class="route-list">
		<li  @click="toggleNav();toggleLi('.liOne');" class="nav-link liOne active">
			<router-link to="/dashboard">
                <span>
                	<i class="ti-palette"></i>
                    Dashboard
                </span>
            </router-link>
		</li>
		<li  @click="toggleNav();toggleLi('.liTwo');" class="nav-link liTwo">
			<router-link to="/profile">
                <span>
                	<i class="ti-user"></i>
                    Profile
                </span>
            </router-link>
		</li>
		<li @click="toggleNav();toggleLi('.liThree');" class="nav-link liThree">
			<router-link to="/table">
                <span>
                	<i class="ti-layout-tab-window"></i>
                    basic table
                </span>
            </router-link>
		</li>
		<li  @click="toggleNav();toggleLi('.liFour');" class="nav-link liFour">
			<router-link to="/icons">
                <span>
                	<i class="ti-face-smile"></i>
                    icons
                </span>
            </router-link>
		</li>
		<li  @click="toggleNav();toggleLi('.liFive');" class="nav-link liFive">
			<router-link to="/maps">
                <span>
                	<i class="ti-map-alt"></i>
                    google map
                </span>
            </router-link>
		</li>
		<li  @click="toggleNav();toggleLi('.liSix');" class="nav-link liSix">
			<router-link to="/blank">
                <span>
                	<i class="ti-book"></i>
                    blank page
                </span>
            </router-link>
		</li>
		<li  @click="toggleNav();toggleLi('.liSeven');" class="nav-link liSeven">
			<router-link to="/error404">
                <span>
                	<i class="ti-alert"></i>
                    error 404
                </span>
            </router-link>
		</li>
	</ul>
</template>

<script type="text/javascript">
import Router from 'vue-router'
	export default {
		props:[
		'toggleNav'
		],
		mounted(){
			if (this.$route.name == 'dashboard') {
				let activeLi = document.querySelector('.liOne a')
				activeLi.classList.add('router-link-active')
			}
	 	},
		methods:{
			toggleLi: function (ele) {
				let elem = document.querySelector(ele);
				let li = document.querySelectorAll('li.nav-link');
				for (let i=0; i<=li.length-1; i++) {
					li[i].classList.remove('active')
					li[i].childNodes[0].classList.remove('router-link-active')
				}
				elem.childNodes[0].classList.add('router-link-active')
				elem.classList.add('active');
			}
		},
	}
</script>

<style type="text/css" scoped>
	ul{
		padding: 15px;
	}
	ul li{
		margin-bottom: 10px;
		list-style: none;
	}
	ul li:hover a span, ul li:focus a span, ul li:active a span,
	ul li:hover a span svg, ul li:focus a span svg, ul li:active a span svg{
		color: #26c6da;
		fill: #26c6da;
	}
	.route-list li a{
		text-decoration: none;
		width: 100%;
	}
	.route-list li a span{
        padding: 2px 15px;
		display: block;
        font-weight: 400;
        color: rgb(96, 125, 139);
        line-height: 40px;
        text-decoration: none;
        transition: color .2s ease-in-out;
        text-transform: capitalize;
        font-size: 15px;
	}
	.route-list li a i{
		position: relative;
	    top: 5px;
	    font-size: 18px;
	    margin-right: 5px;
	    fill: rgb(96, 125, 139);
	    transition: fill .2s ease-in-out;
	}
	.route-list li a.router-link-active span{
		color: #ffffff;
		background: #26c6da;
        border-radius: 4px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	}
</style>