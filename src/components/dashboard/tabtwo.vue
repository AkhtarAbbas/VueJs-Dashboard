<template>
	<div>
		<div class="tab-item mb-3 mt-2">
			<div class="row">
				<div class="col-md-3 col-lg-3 col-xs-6 bdr-right" v-for="item in profileData" :key="item.title">
					<h6 class="text-capitalize font-weight-normal">{{item.title}}</h6>
					<p class="text-muted mb-2">{{item.value}}</p>
				</div>
			</div>
			<hr>
			<p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu ped.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, eleifend ac, enim.</p>
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ev a galley of type and scrambled it to make a type specimen book. It has survived not.</p>
			<p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
			<h5 class="text-capitalize font-weight-normal pt-3">skill set</h5>
			<hr>
			<div class="bar mt-4" v-for="bar in skillset" :key="skillset.value">
				<h6 class="font-weight-normal">{{bar.skillName}} <span class="float-right">{{bar.value}}%</span></h6>
				<b-progress :value="bar.value"
	                    :variant="bar.variant"
	                    :key="bar.variant"
	            ></b-progress>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				profileData:[
					{title:'full name', value: 'Johnathan Deo'},
					{title:'mobile', value: '(123) 456 7890'},
					{title:'email', value: 'Johnathan@admin.com'},
					{title:'location', value: 'London'}
				],
				skillset:[
					{skillName:'HTML 5', value:80, variant:'primary'},
					{skillName:'CSS 3', value:70, variant:'info'},
					{skillName:'JavaScript', value:60, variant:'success'},
					{skillName:'VueJs', value:50, variant:'secondary'}
				]
			}
		}
	}
</script>

<style>
	.tab-item .bdr-right{
		border-right: 1px solid rgba(120, 130, 140, 0.13);
	}
	.tab-item .bdr-right:last-child{
		border-right: 0px solid rgba(120, 130, 140, 0.13);
	}
	.bar .progress{
		height: 7px;
	}
</style>