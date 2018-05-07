<template>
	<div class="container-fluid mb-5 pb-3">
        <div class="row">
        	<div class="col-lg-8 col-md-7">
        		<barChart />
	    	</div>
        	<div class="col-lg-4 col-md-5">
        		<donutChart />
	    	</div>
		</div>
        <div class="row">
        	<div class="col-lg-4 col-md-5">
	        	<profileImage />
	        	<contacts />
	    	</div>
        	<div class="col-lg-8 col-md-7">
        		<tabs />
	    	</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import profileImage from './profile_image'
	import contacts from './contacts'
	import tabs from './tabs'
	import barChart from './barChart'
	import donutChart from './donutChart'
	export default{
		components: {
			profileImage,contacts,tabs,barChart,donutChart
		}
	}
</script>

<style type="text/css">
	
</style>