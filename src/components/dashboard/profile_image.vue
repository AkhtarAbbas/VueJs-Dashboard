<template>
	<div class="card card-user text-center box-shadow">
		<img src="../../assets/profile-bg.jpg" alt="..." class="card-img-top">
		<div class="card-block text-center">
			<img src="../../assets/4.jpg" alt="..." class="avatar mb-4">
			<h5 class="mb-0 font-weight-normal">{{user.name}}</h5>
			<p class="description mt-1 mb-3 text-muted font-weight-light">{{user.profession}}</p>
			<a href="#" class="btn btn-primary btn-md mt-2">Follow</a>
			<div class="text-center">
				<div class="row pb-4 pl-3 pr-3">
					<div class="col-md-4 col-6 col-sm-4">
						<h5 class="mt-5 mb-1 font-weight-light">1099</h5>
						<small>Articles</small>
					</div>
					<div class="col-md-4 col-6 col-sm-4">
						<h5 class="mt-5 mb-1 font-weight-light">23,469</h5>
						<small>Followers</small>
					</div>
					<div class="col-md-4 col-6 col-sm-4">
						<h5 class="mt-5 mb-1 font-weight-light">6035</h5>
						<small>Following</small>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import boxlayout from '../boxlayout'
	export default{
		data: function (){
			return{
				user: {
					name: 'Angela Dominic',
					profession : 'Web Designer & Developer'
				}
			}
		}

	}
</script>

<style type="text/css" scoped>
	.card-user{
		position: relative;
		box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
	}
	.card-img-top{
		width: 100%;
	}
	.card-block .avatar{
		height: 120px;
		width: 120px;
		border-radius: 100%;
		margin:-60px auto 10px auto;
		display: block;
	}
	.card-user .description{
		color: #67757c;
	}
	.card-user .btn-primary{
		padding: 10px 35px;
		font-size: 16px;
		background: #7460ee;
		border: 1px solid #7460ee;
		box-shadow: 0px 8px 12px 0px rgba(116, 96, 238, 0.14);
		transition: 0.2s ease-in;
		border-radius: 60px;
	}
	.card-user .btn-primary:hover{
		box-shadow: 0 14px 26px -12px rgba(116, 96, 238, 0.42), 0 4px 23px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(116, 96, 238, 0.2);
	}
</style>