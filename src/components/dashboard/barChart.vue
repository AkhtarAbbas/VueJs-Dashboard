<template>
	<div class="card barchart p-4 mb-4 box-shadow">
		<div class="row">
			<div class="col-12">
                <div class="d-flex flex-wrap">
                    <div>
                        <h4 class="card-title font-weight-normal">Sales Overview</h4>
                        <p class="card-subtitle mb-3 chart-subtitle">Ample Admin Vs Pixel Admin</p> </div>
                    <div class="ml-auto">
                        <ul class="list-inline">
                            <li class="d-inline-block">
                                <span class="text-muted dot dot-a position-relative">Ample</span> </li>
                            <li class="d-inline-block ml-5">
                                <span class="text-muted dot dot-b position-relative">Pixel</span> </li>
                        </ul>
                    </div>
                </div>
            </div>
		</div>
		<VueChartist :data="data" :options="options" type="Bar"></VueChartist>
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
				data: {
	                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
	                series: [
	                    [9, 5, 3, 7, 5, 10, 3],
            			[6, 3, 9, 5, 4, 6, 4]
	                ]
	            },
	            options: {
	                fullWidth: true,
	                height: 340,
	            }
			}
		},
	}
</script>

<style>
	.ct-series-a .ct-point, .ct-series-a .ct-line, .ct-series-a .ct-bar, .ct-series-a .ct-slice-donut {
	    stroke: #1e88e5 !important;
	}
	.ct-series-b .ct-point, .ct-series-b .ct-line, .ct-series-b .ct-bar, .ct-series-b .ct-slice-donut {
	    stroke: #26c6da !important;
	}
	.dot:after{
		content: '';
		position:absolute;
		height: 8px;
		width: 8px;
		border-radius: 100%;
		bottom: 6px;
		left: -15px;

	}
	.dot-a{
		color: #26c6da !important;
	}
	.dot-b{
		color: #1e88e5 !important;
	}
	.dot-a:after{
		background-color: #26c6da;
	}
	.dot-b:after{
		background-color: #1e88e5;
	}
	.chart-subtitle{
		margin-bottom: 15px;
		color: #99abb4;
		font-size: 14px;
	}
</style>