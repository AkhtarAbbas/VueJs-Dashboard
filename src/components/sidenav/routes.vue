<template>
	<ul class="route-list">
		<li  @click="arrow(0);" id="liOne">
			<router-link to="/dashboard">
                <span>
                	<i class="ti-panel"></i>
                    Dashboard
                </span>
            </router-link>
		</li>
		<li  @click="arrow(50);toggleLi('liTwo');" id="liTwo">
			<router-link to="/profile">
                <span>
                	<i class="ti-user"></i>
                    User Profile
                </span>
            </router-link>
		</li>
		<li @click="toggleNav;arrow(100);toggleLi('liThree');" id="liThree">
			<router-link to="/table">
                <span>
                	<i class="ti-view-list-alt"></i>
                    table list
                </span>
            </router-link>
		</li>
		<li  @click="toggleNav;arrow(150);toggleLi('liFour');" id="liFour">
			<router-link to="/typography">
                <span>
                	<i class="ti-text"></i>
                    typography
                </span>
            </router-link>
		</li>
		<li  @click="toggleNav;arrow(200);toggleLi('liFive');" id="liFive">
			<router-link to="/icons">
                <span>
                	<i class="ti-pencil-alt2"></i>
                    icons
                </span>
            </router-link>
		</li>
		<li  @click="toggleNav;arrow(250);toggleLi('liSix');" id="liSix">
			<router-link to="/maps">
                <span>
                	<i class="ti-map"></i>
                    maps
                </span>
            </router-link>
		</li>
	</ul>
</template>

<script type="text/javascript">
import Router from 'vue-router'
import profile from '../profile/profile'
import typography from '../typography/typography'
import dashboard from '../dashboard/dashboard'
	export default {
		components:{
			profile,typography,dashboard
		},
		props:[
		'toggleNav'
		],
		methods:{
			toggleLi: function (ele) {
				var elem = document.getElementById(ele);
				if (elem.classList.contains('active')) {
					elem.classList.remove('active');
				} else{
					elem.classList.add('active');
				}
			},
			arrow: function (translate){
				let arrow = document.querySelector('.moving-arrow')
				arrow.style.transform = `translate3d(0px, ${translate}px, 0px)`
			}
		},
	}
</script>

<style type="text/css" scoped>
	ul{
		margin-top: 20px;
		padding: 0px;
	}
	ul li{
		height: 50px;
		list-style: none;
	}
	ul li:hover a span, ul li:focus a span, ul li:active a span,
	ul li:hover a span svg, ul li:focus a span svg, ul li:active a span svg{
		color: #698998;
		fill: #698998;
	}
	.route-list li a{
		text-decoration: none;
		width: 100%;
		padding: 10px 0;
        margin: 10px 0;
	}
	.route-list li a span{
		display: block;
        padding: 0 25px;
        font-weight: 400;
        color: #546e7a;
        line-height: 40px;
        text-decoration: none;
        transition: color .2s ease-in-out;
        font-size: 16px;
        text-transform: capitalize;
	}
	.route-list li a i{
		position: relative;
	    top: 2px;
	    width: 16px;
	    height: 16px;
	    font-size: 20px;
	    margin-right: 15px;
	    fill: #546e7a;
	    transition: fill .2s ease-in-out;
	}
	.route-list li a.router-link-active span{
		color: #b0bec5;
        font-weight: 600;
	}
	.route-list li a.router-link-active i{
		fill: #b0bec5;
	}
</style>