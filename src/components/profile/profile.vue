<template>
	<div class="container-fluid mb-5 pb-3">
        <div class="row">
        	<div class="col-lg-4 col-md-5">
        		<profileCard />
	    	</div>
        	<div class="col-lg-8 col-md-7">
        		<tabthree class="box-shadow profile-settings p-3 pt-4" />
	    	</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import tabthree from '../dashboard/tabthree'
	import profileCard from './profileCard'
	export default{
		data: function (){
			return{
				
			}
		},
		components:{
			tabthree,profileCard
		}

	}
</script>

<style type="text/css">
	.profile-settings {
		background-color: #fff;	
		border-radius: 4px;
	}
</style>