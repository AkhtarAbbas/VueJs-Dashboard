<template>
	<div class="container-fluid">
        <div class="row">
        	<h1>this is profile</h1>
            <div class="lg:5 xl:4 profile-widgets">
				<boxlayout :icon="icon"></boxlayout>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import boxlayout from '../boxlayout'
	export default{
		data: function (){
			return{
				icon:"fa fa-flag",
			}
		},
		components:{
			boxlayout,
		}

	}
</script>

<style type="text/css">
</style>