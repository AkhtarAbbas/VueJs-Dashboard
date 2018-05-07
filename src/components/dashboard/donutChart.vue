<template>
	<div class="donut bg-white mb-4 box-shadow">
		<div class="chart p-4">
			<h4 class="font-weight-normal">Our Visitors </h4>
			<span class="font-weight-light chart-subtitle">Different Devices Used to Visit</span>
			<VueChartist :data="data" :options="options" type="Pie"></VueChartist>
		</div>
		<hr>
		<div class="card-block text-center pb-4 pt-2">
            <ul class="list-inline mb-0">
                <li class="d-inline-block">
                    <span class="text-muted text-info position-relative dot dot-c">Mobile</span> </li>
                <li class="d-inline-block">
                    <span class="text-muted  text-primary position-relative dot dot-d ml-4">Desktop</span> </li>
                <li class="d-inline-block">
                    <span class="text-muted  text-success position-relative dot dot-e ml-4">Tablet</span> </li>
            </ul>
        </div>
	</div>
</template>

<script>
	import VueChartist from 'v-chartist'
	export default{
		components:{
			VueChartist
		},
		data(){
			return{
				data:{
					series: [30, 10, 40, 50]
				}, 
				options: {
				  donut: true,
				  donutWidth: 20,
				  donutSolid: true,
				  startAngle: 260,
				  showLabel: false,
				  height: 265,
				}
			}
		}
	}
</script>

<style>
	.donut{
		border-radius: 4px;
	}
	.v-chartist-container {
		position: relative;
		text-align: center;
	}
	.donut .v-chartist-container:after {
		content: 'Our visitor';
		position: absolute;
		left: 0;
		right: 0;
		top: 43%;
		font-size: 18px;
		font-weight: 500;
		color: #99abb4;
	}
	.ct-series-a .ct-slice-pie, .ct-series-a .ct-slice-donut-solid, .ct-series-a .ct-area {
	    fill: rgb(236, 239, 241) !important;
	}
	.ct-series-b .ct-slice-pie, .ct-series-b .ct-slice-donut-solid, .ct-series-b .ct-area {
	    fill: rgb(116, 90, 242) !important;
	}
	.ct-series-c .ct-slice-pie, .ct-series-c .ct-slice-donut-solid, .ct-series-c .ct-area {
	    fill: rgb(30, 136, 229) !important;
	}
	.ct-series-d .ct-slice-pie, .ct-series-d .ct-slice-donut-solid, .ct-series-d .ct-area {
	    fill: rgb(38, 198, 218) !important;
	}
	.dot-c{
		color: #1e88e5 !important;
	}
	.dot-d{
		color: #99abb4 !important;
	}
	.dot-e{
		color: #26c6da !important;
	}
	.dot-c:after{
		background-color: #1e88e5;
	}
	.dot-d:after{
		background-color: #99abb4;
	}
	.dot-e:after{
		background-color: #26c6da;
	}
</style>