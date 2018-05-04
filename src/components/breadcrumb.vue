<template>
	<div class="container-fluid page-breadcrumb p-3 pl-4">
		<div class="row">
			<div class="col-lg-12 align-self-center">
				<h4 class="mb-0 mt-1 text-capitalize theme-color">{{this.$route.name}}</h4>
				<ol class="breadcrumb m-0 p-0">
					<li class="breadcrumb-item text-capitalize theme-color">home</li>
					<li class="breadcrumb-item text-capitalize pl-1"><span class="ti-angle-right pr-1"></span> {{this.$route.name}}</li>
				</ol>
			</div>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style>
	ol, .breadcrumb{
		background-color: #fff !important;
	}
	.page-breadcrumb,.breadcrumb{
		background-color: #ffffff;
	}
	.breadcrumb-item + .breadcrumb-item::before {
	    display: inline-block;
	    padding-right: 0.5rem;
	    color: #6c757d;
	    content: "";
	}
	.breadcrumb li{
		font-size: 14px;
		font-weight: 300;
	}
	.breadcrumb li:last-child{
		color: #99abb4;
	}
	.page-breadcrumb h4{
		font-weight: 400;
		font-size: 21px;
	}
	.breadcrumb .ti-angle-right{
		font-size: 10px;
		color: #99abb4;
	}
</style>