<template>
	<div class="card mt-4 box-shadow mb-4">
		<div class="card-block bg-primary p-4">
			<h5 class="text-white card-title font-weight-light">My Contacts</h5>
			<h6 class="text-white card-subtitle op-5 font-weight-light">Checkout my contacts here</h6>
		</div>
		<div class="card-block p-4">
			<div class="ad-ct-btn float-right">
				<button type="button" class="btn btn-circle btn-lg text-white">+</button>
			</div>
			<div class="contact-widget">
				<a href="#" class="pl-2 pr-2 pt-3 pb-3" v-for="user in users" :key="user.name">
					<div class="user-img mr-2">
						<img :src=user.image alt="user" class="img-circle">
						<span class="profile-status online pull-right"></span>
					</div>
					<div class="mail-contact">
						<h6 class="mb-0 mt-1 font-weight-normal">{{user.name}}</h6>
						<small class="mail-desc">{{user.mail}}</small>
					</div>
				</a>
			</div>
		</div>
	</div>
</template>
 
<script>
export default{
	data(){
		return{
			users:[
				{name:'Pavan kumar',mail:'info@wrappixel.com', image:'static/assets/profile.jpg'},
				{name:'Sonu Nigam',mail:'pamela1987@gmail.com', image:'static/assets/2.jpg'},
				{name:'Angela Dominic',mail:'cruise1298.fiplip@gmail.com', image:'static/assets/4.jpg'},
			]
		}
	}
}
</script>
<style>
	.card .card-subtitle{
		font-size: 14px;
	}
	.card-block .btn-circle{
		border-radius: 100%;
		background-color: #26c6da;
		border: none;
		height: 50px;
		width: 50px;
		position: absolute;
		top: 67px;
		right: 30px;
	}
	.card-block .btn-circle:hover{
		box-shadow: 0 14px 26px -12px rgba(40, 190, 189, 0.42), 0 4px 23px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(40, 190, 189, 0.2);
	}
	.contact-widget a .user-img{
		position: relative;
		display: inline-block;
		width: 20%;
	}
	.contact-widget a .user-img img{
		width: 100%;
		border-radius: 100%;
	}
	.contact-widget a .mail-contact{
		display: inline-block;
		vertical-align: middle;
	}
	.contact-widget a{
		width: 100%;
		position: relative;
		border-bottom: 1px solid rgba(120, 130, 140, 0.13);
		display: block;
	}
	.contact-widget a:last-child{
		border-bottom: 1px solid transparent;
	}
	.contact-widget a:hover{
		background-color: #f2f4f8;
		text-decoration: none;

	}
</style>