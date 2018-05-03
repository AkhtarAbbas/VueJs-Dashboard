<template>
	<div class="container pb-5">
	  <div class="row">
	    <div class="col-xs-12 col-sm-12 col-lg-12">
	    	<div class="card table p-4">
	    		<h5 class="font-weight-normal">Basic Table</h5>
	    		<span class="font-weight-light text-muted table-subtitle">Add class <code>.table</code></span>
	    		<b-table :items="tableItems">
	    		</b-table>
	    	</div>
	    </div>
	  </div>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				tableItems:[
					{'Serial': 1, first_name: 'Dickerson', last_name: 'Macdonald', Username:'@Genelia' },
					{'Serial': 2, first_name: 'Larsen', last_name: 'Shaw', Username:'@Ritesh' },
					{'Serial': 3, first_name: 'Geneva', last_name: 'Wilson', Username:'@Govinda' },
					{'Serial': 4, first_name: 'Jami', last_name: 'Carney', Username:'@Hritik' },
					{'Serial': 5, first_name: 'Joshi', last_name: 'Hickle', Username:'@Maruti' },
					{'Serial': 6, first_name: 'Nigam', last_name: 'Eichmann', Username:'@Sonu' }
				]
			}
		}
	}
</script>

<style type="text/css">
	.table .table-subtitle{
		font-size: 14px;
		margin-bottom: 15px;
		color: #99abb4;
	}
	.table thead th {
	    border-bottom: 1px solid #dee2e6;
		font-weight: 500;
	    border-top: 1px solid transparent;
	}
</style>