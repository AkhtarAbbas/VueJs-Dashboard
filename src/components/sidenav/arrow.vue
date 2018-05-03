<template>
	<div class="moving-arrow"></div>
</template>

<script type="text/javascript">
	export default {
	}
</script>

<style type="text/css">
	.moving-arrow{
		border-right: 17px solid #f4f3ef;
		border-top: 17px solid transparent;
		border-bottom: 17px solid transparent;
		display: inline-block;
		position: absolute;
		left: 223px;
		top: 3px;
		transition: all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1);
	}
</style>