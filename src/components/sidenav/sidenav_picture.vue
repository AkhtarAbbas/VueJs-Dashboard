<template>
	<div class="sidenav-picture">
		<div class="media">
			<div class="image">
				<img src="../../assets/profile.jpg" alt="side nav profile picture">
			</div>
			<slot name="name"></slot>
			<slot name="position"></slot>
		</div>
	</div>
</template>

<script>
    export default {

    }
</script>

<style type="text/css">
	.sidenav-picture .media{
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		box-shadow: 0 2px 5px rgba(0,0,0,.26);
	}
	.sidenav-picture .media .image{
		width: 100px;
		height: 100px;
		margin: 20px auto 10px auto;
	}
	.sidenav-picture .media .image img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
		border: 2px solid #37474F;
	}
	.media p:first-of-type{
		font-size: 19px;
	    font-weight: 500;
	    margin-bottom: 0;
	}
	.media p:last-of-type{
		font-size: 14px;
	}
</style>