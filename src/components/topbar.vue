<template>
	<div class="topbar">
		<button class="nav-toggle" @click="toggleFn">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </button>
        <div class="page-title"><span>{{ this.$route.name }}</span></div>
	</div>
</template>

<script type="text/javascript">
	export default{
		props:[
			'toggleFn'
		],
	}
</script>

<style type="text/css" scoped>
	.topbar{
		position: relative;
		height: 65px;
		background-color: #fff;
		box-shadow: 0 2px 5px rgba(0,0,0,.26);
		left: 0;
		padding: 0 20px;
		width: 100%;
		z-index: 2;
		transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
	}
	.topbar button .bar{
	    width: 25px;
	    border: 1px solid black;
	    margin-top: 5px;
	    display: block;
	}
	.topbar button{
		display: inline-block;
		background-color: transparent;
		border: none;
		cursor: pointer;
	}
	.topbar button:focus{
		outline: none;
	}
	.topbar .page-title{
		display: inline-block;
	}
	.topbar .page-title span{
		font-size: 24px;
		font-weight: 500;
	    line-height: 65px;
    	margin-left: 15px;
		text-transform: capitalize;
	}
	@media(min-width: 993px){
		.topbar{
			width: calc(100% - 250px);
			left:250px;
		}
		.topbar button{
			display: none;
		}
	}

</style>