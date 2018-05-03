<template>
	<div class="card box-shadow">
		<b-tabs class="bg-white tabs">
			<b-tab class="pl-4 pr-4" title="activity" active>
				<tabone />
			</b-tab>
			<b-tab class="pl-4 pr-4" title="profile" >
				<tabtwo />
			</b-tab>
			<b-tab class="pl-4 pr-4" title="settings">
				<tabthree />
			</b-tab>
		</b-tabs>
	</div>
</template>

<script>
	import tabone from './tabone'
	import tabtwo from './tabtwo'
	import tabthree from './tabthree'
	export default{
		components:{
			tabone,tabtwo,tabthree
		}

	}
</script>

<style>
	.tabs{
		border-radius: 5px;
	}
	.tabs ul{
		border-bottom: 1px solid #ddd;
	}
	.tabs ul li a{
		color: #67757c;
		border: none !important;
		background-color: transparent;
		text-transform: capitalize;
		padding: 15px 20px;
	}
	.tabs ul li a:hover, .tabs ul li a.active, .tabs ul li a:focus {
		background-color: transparent;
		color: #1e88e5;
	}
	.tabs ul li .active{
		border-bottom: 2px solid #1e88e5 !important;
	}
	.tabs .tab-content{
		padding: 20px 0;
	}
	.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
	    background-color: transparent;
		color: #1e88e5;
	}
</style>