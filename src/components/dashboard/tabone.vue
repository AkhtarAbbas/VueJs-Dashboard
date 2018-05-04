<template>
	<div>
		<div class="tab-item mb-3 mt-2" v-for="item in tabone">
		    <div class="tab-left">
		    	<img :src=item.profile alt="user" class="img-circle">
		    </div>
		    <div class="tab-right">
		        <div>
		        	<a href="#" class="link text-capitalize">{{item.name}}</a>
		        	<span class="tab-date">{{item.time}}</span>
		            <p class="tab-link mb-0" v-if="item.tabLink">assign a new task <a href="#"> {{item.tabLink}}</a></p>
		            <div class="row mt-3 mb-3" v-if="item.images">
		                <div class="col-lg-3 col-md-3 col-xs-12" v-for="image in item.images">
		                	<img :src=image alt="user" class="img-fluid radius">
		                </div>
		                <div class="col-lg-9 col-md-9 col-xs-12" v-if="item.imagePara">
		                	<p>{{item.imagePara}}</p>
		                	<a href="#" class="btn btn-custom font-weight-normal">{{item.button}}</a>
		                </div>
		            </div>
					<p v-if="item.para" class="mt-3 mb-3">{{item.para}}</p>
					<blockquote v-if="item.blockquote" class="mt-3 mb-3 p-3">{{item.blockquote}}</blockquote>
		            <div class="like-comm mt-3 mb-3" v-if="item.love">
		            	<a href="#" class="link mr-2">{{item.comments}} comment</a>
		            	<a href="#" class="link">
		            		<i class="ti-heart text-danger"></i>
		            		 {{item.love}} Love
		            	</a> 
		            </div>
		            <hr class="mt-3 mb-0" v-if="item.hr">
		        </div>
		    </div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				tabone:[
					{
						name: 'john doe',
						profile: 'static/assets/1.jpg',
						time:'5 minutes ago',
						tabLink:'Design web layout',
						images:['static/assets/img1.jpg','static/assets/img2.jpg','static/assets/img3.jpg','static/assets/img4.jpg'],
						comments:'3',
						love:'6',
						hr: true,
					},
					{
						name: 'Pavan kumar',
						profile: 'static/assets/profile.jpg',
						time:'6 minutes ago',
						images:['static/assets/img1.jpg'],
						imagePara:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
						button: 'Design web layout',
						comments:'4',
						love:'8',
						hr: true,
					},
					{
						name: 'Sonu Nigam',
						profile: 'static/assets/2.jpg',
						time:'8 minutes ago',
						para:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper',
						comments:'1',
						love:'3',
						hr: true,
					},
					{
						name: 'Arijit Sinh',
						profile: 'static/assets/4.jpg',
						time:'10 minutes ago',
						blockquote:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
						hr: false,
					}
				]
			}
		}
	}
</script>

<style>
	.tab-item{
		margin-bottom: 30px;
	}
	.tab-item .tab-left{
		float: left;
		margin-right: 15px;
	}
	.tab-item .tab-left img{
		max-width: 40px;
		border-radius: 100%;
		vertical-align: middle;
	}
	.tab-item .tab-right{
		margin-left: 60px;
	}
	.tab-item a.link{
		color: #455a64;
		text-decoration: none;
	}
	.tab-item a.link:hover{
		color: #0275d8;
	}
	.tab-item .tab-date{
		font-size: 12px;
		color: #99abb4;
	}
	.tab-item .tab-link a:hover{
		color: #67757c;
	}
	.tab-item blockquote{
		border-left: 5px solid #009efb;
	}
	.radius{
		border-radius: 4px;
	}
</style>