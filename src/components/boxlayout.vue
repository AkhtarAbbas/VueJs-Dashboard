<template>
	<div class="box-layout">
		<div class="boxheader">
			<div class="icon">
				<i :class="icon"></i>
			</div>
			<div class="tittle">
				<h3>{{tittle}}</h3>
			</div>
		</div>
		<div class="boxbody">
			<h4 v-if="subtittle">{{subtittle}}</h4>
			<slot></slot>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		props:['tittle','subtittle','icon'],
	}
</script>

<style type="text/css" scoped>
	.box-layout{
		box-shadow : 0 1px 3px 0 rgba(0,0,0,.21);
		background-color: white;
	}
</style>