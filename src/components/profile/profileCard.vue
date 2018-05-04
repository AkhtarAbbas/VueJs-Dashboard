<template>
	<div class="card box-shadow p-4 text-center profile-card mb-4">
		<img src="static/assets/4.jpg" alt="" class="img-fluid mt-4 mb-3">
		<h5 class="font-weight-normal">Angela Dominic</h5>
		<h6 class="font-weight-light">Web Designer & Developer</h6>
		<div class="row">
			<div class="col-6 text-right mt-2">
				<a href="#" class="font-weight-normal">
					<i class="ti-user"></i>
					254
				</a>
			</div>
			<div class="col-6 text-left mt-2">
				<a href="#" class="font-weight-normal">
					<i class="ti-image"></i>
					54
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{

			}
		}
	}	
</script>

<style>
	.profile-card img{
		border-radius: 100%;
		width: 150px;
		margin: auto;
	}
	.profile-card a{
		color: #455a64;
	}
	.profile-card a:hover{
		color: #1e88e5;
	}
</style>