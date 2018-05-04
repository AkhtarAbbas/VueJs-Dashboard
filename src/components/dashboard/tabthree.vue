<template>
	<div>
		<div class="tab-item mb-3 tabthree">
			<form class="form-horizontal">
				<div class="col-md-12 form-group" v-for="field in settings" :key="field.label">
					<label v-if="field.label" class="text-capitalize font-weight-normal">{{field.label}}</label>
					<input :type=field.type class="form-control pl-0 mb-4" :placeholder=field.placeholder v-if="field.inputType == 'input'">
					<input :type=field.type class="form-control pl-0 mb-4" :value=field.value v-if="field.inputType == 'password'">
					<textarea rows="5" v-if="field.inputType == 'textarea'" class="mb-4"></textarea>
					<select v-if="field.inputType == 'select'" class="mb-4">
						<option :value=option v-for="option in field.select">{{option}}</option>
					</select>
					<button class="btn btn-custom" v-if="field.inputType == 'button'">{{field.text}}</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				settings: [
					{label:'full name',placeholder:'Johnathan Doe',type:'text',inputType:'input'},
					{label:'email',placeholder:'Johnathan@admin.com',type:'email',inputType:'input'},
					{label:'password',value:'123456789',type:'password',inputType:'password'},
					{label:'phone',placeholder:'123 456 7890',type:'text',inputType:'input'},
					{label:'message ',placeholder:' Doe',type:'text',inputType:'textarea'},
					{label:'Select Country ',inputType:'select', select:['London','USA','Pakistan','China']},
					{text:'Update Profile ',inputType:'button'},
				]
			}
		}
	}
</script>

<style>
	.tabthree{
		background-color: #ffff;
	}
	.tabthree input, .tabthree select, .tabthree textarea{
		border: none;
		border-bottom: 1px solid #eee;
		width: 100%;
		display: block;
		resize: none;
		background-position: center bottom, center calc(100% - 1px);
		background-repeat: no-repeat;
		border-radius: 0px;
		background-image: none;
		background-color: transparent;
		background-size: 0 1px, 0 0px;
		transition: background 0.2s ease-out 0.2s;
	}
	.tabthree input:focus, .tabthree textarea:focus, .tabthree select:focus{
		background-image: linear-gradient(#009efb, #009efb), linear-gradient(#d9d9d9, #d9d9d9);
		background-size: 100% 1px, 100% 0px;
		background-position: center bottom, center calc(100% - 1px);
		outline: none;
		box-shadow: none;
	}
	.tabthree select{
		color: #67757c;
	}
</style>