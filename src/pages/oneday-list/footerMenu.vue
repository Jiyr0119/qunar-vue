<template>
	<div id="footer">
		<div class="masker" v-show="showDetail" @click=" showDetail = false"></div>
		<div class="detailMenu"  v-show="showDetail">
			<!--全部分类-->
			<div class="classify childmenu" v-show="menuDatas[0].isActive">
				<div class="left" id="classifyWraper">
					<ul class="scroller">
						<li :class="{'border-bottom':true,'li-active':classifyData.isActive}" v-for="(classifyData, index) in classifyDatas" :key="index+'classify'" @click="handleShowItem(classifyData,index)">
							{{ classifyData.name }}
							<span>{{classifyData.count}}</span>
						</li>
					</ul>
				</div>
				<div class="right">
					<ul>
						<li  :class="{'border-bottom':'ture', 'choosed-active':item.isActive} " v-for=" (item,index) in classifyChildren" :key="'children'+ index " @click="handleCheckClassify(index, $event)" >
							{{item.display}}
							<span>{{item.count}}</span>
						</li>
					</ul>
				</div>
			</div>
			<!--筛选-->
			<div class="fillter childmenu" v-show="menuDatas[1].isActive">
				<div class="left">
					<ul>
						<li :class="{'border-bottom':true,'li-active':item.isActive}" v-for="(item, index) in fillter" @click="handleShowCity(item, index)" :key="'city'+index">
							{{ item.display}}
						</li>
					</ul>
				</div>	
				<div class="right" id="fillterRightWraper">
					<ul class="scroller">
						<li  :class="{'border-bottom':true,'choosed-active': item.isActive }" v-for="(item, index) in city" @click="handleCheckCity(index, $event)">
							{{item.value}}
						</li>
					</ul>
				</div>
			</div>
			<!--排序-->
			<div class="sort childmenu" v-show="menuDatas[2].isActive">
				<div>
					<ul>
						<li :class="{'border-bottom': 'true', 'choosed-active': item.isActive}" v-for="(item, index) in sort" :key="'sort'+index" @click="handleCheckSort(index ,$event)">
							{{item.name}}
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!--菜单-->
		<transition name="slide">
			<div class="footer-menu" v-show="footMenuShow" >
				<div :class="{active: menuData.isActive}" v-for="(menuData,index) in menuDatas"  @click="handleChangeMenu(index)" :key="index+'menu'">
					<i class="iconfont" v-html="menuData.icons"></i>
					<p>{{menuData.contant}}</p>
				</div>
			</div>
		</transition>
		
	</div>
</template>


<script>
	const menuDatas = [{
	     	classNames: "menu-classify",
	     	isActive: true,
	     	icons: "&#xe72b;",
	     	contant: "全部分类"
	     },{
	     	classNames: "menu-fillter",
	     	isActive: false,
	     	icons: "&#xe605;",
	 		contant: "筛选"
	     },{
	     	classNames: "menu-sort",
	     	isActive: false,
	     	icons: "&#xe63d;",
	 		contant: "推荐排序"
     }]
	
export default {
	data () {
	    return {
	     menuDatas,
	     classifyIndex: 0,
	     fillterIndex: 0,
	     showDetail:false,
	     menuIndex :""
	    }
 	},
 	props:["footMenuShow","datas"],
 	updated(){
		new IScroll('#classifyWraper', { scrollY: true });
		new IScroll('#fillterRightWraper', { scrollY: true });
		
	},
	computed:{
		classifyChildren(){
			return this.classifyDatas[this.classifyIndex].children
		},
		city(){
			return this.fillter[this.fillterIndex].values
		},
		classifyDatas(){
			return this.datas.valuePlus ? this.datas.valuePlus : [[]];
		},
		fillter(){
			return this.datas.fillter ? this.datas.fillter : [[]];
		},
		sort(){
			return this.datas.sort ? this.datas.sort : [];
		}
	},
	
	methods: {
	  	handleChangeMenu(index){
	  		this.menuDatas.forEach((item) =>{
	  			item.isActive = false;
	  		})
	  		this.menuDatas[index].isActive = true;
	  		if( this.menuIndex === index ){
	  			this.showDetail = !this.showDetail
	  		}else{
	  			this.showDetail = true
	  		}
	  		this.menuIndex = index
	  	},
	  	handleShowItem(item,index){
	  		//记录当前Index
	  		this.classifyIndex = index
	  		//添加class名,改变背景
	  		this.classifyDatas.forEach( (item) => item.isActive = false )
	  		item.isActive = true;
	  		if( index === 0){
	  			this.showDetail = false
	  		}
	  	},
	  	handleShowCity(item, index){
	  		this.fillterIndex = index;
	  		//添加class名,改变背景
	  		this.fillter.forEach( (item) => item.isActive = false )
	  		item.isActive = true;
	  	},
	  	handleCheckClassify(index, $event){
	  		let txt = $event.currentTarget.innerText.split(" ")[0];
	  		this.menuDatas[0].contant = txt;
	  		//修改当前文字颜色,增加class
	  		this.classifyDatas.forEach( item => {
	  			if( item.children ){
	  				item.children.forEach( item => item.isActive = false )
	  			}
	  		});
	  		this.classifyDatas[ this.classifyIndex ].children[index].isActive = true;
	  		//筛选界面消失,展示主页面
	  		this.showDetail = false
	  	},
	  	handleCheckSort(index, $event){
	  			let txt = $event.currentTarget.innerText
	  			this.menuDatas[2].contant = txt;
	  			//更改当前文字颜色,增加calss
	  			this.sort.forEach( item => item.isActive = false);
	  			this.sort[index].isActive = true;
	  			//筛选界面消失,展示主页面
	  			this.showDetail = false
	  	},
	  	handleCheckCity(index, $event){
	  		this.fillter.forEach( item => {
	  			if( item.values ){
	  				item.values.forEach( item => item.isActive = false )
	  			}
	  		});
	  		this.fillter[ this.fillterIndex ].values[index].isActive = true;
	  		//筛选界面消失,展示主页面
	  		this.showDetail = false
	  	}
	}
}
</script>


<style scoped lang="scss">
	#footer{
		z-index: 5;
		position: fixed;
		width: 100%;		
		bottom: 0;
	}
	.footer-menu{
		background:rgba(0,0,0,.8); 
		width: 100%;
		height: .8rem;
		color: white;
		display: flex;
		font-size: .24rem;
		line-height: .4rem;
		div {
			text-align: center;
			flex:1
		}
		.active{
			color: #00afc7;
		}
		i{
			display: block;
			font-size: .32rem;
			line-height: .32rem;
			margin-top: .1rem;
		}
	}
	.childmenu{
		width: 100%;
		height: 5.28rem;
		background: #fff;
		overflow: height;
		/*隐藏滚动条*/
		::-webkit-scrollbar{
			width: 0;height: 0;
		}
		.border-bottom::before{
			border-bottom-color:  lightgray;
		}
		>div{
			height: 100%;
			 li{
				height: .88rem;
				line-height:.4rem;
				box-sizing: border-box;
				padding: .24rem .24rem .24rem .2rem;
			}
		}
	}
	.classify{
		position: relative;

		.left{
			width:37.5% ;
			background: #f4f5f6;
			float: left;
			overflow: auto;
		}
		}
		 .right{
			width:60%;
			background: white;
			overflow: auto;
			float: right;
		}
		li span{
			float: right;
	}
	.fillter{
		.left{
			width: 27%;
			background: #f4f5f6;
			margin-right: 2.5%;
			float: left;
		}
		.right{
			width: 69.5%;
			overflow: auto;
			float: left;
		}
	} 
	.sort>div li{
		width:100%;
		background: #fff;
		text-align: center;
	}
	.li-active{
		background: #FFFFFF;
	}
	.masker{
		height: 16rem;
		width: 100%;
		bottom: 6.08rem;
		background: rgba(0,0,0,0.45);
		position: absolute;
	}
	.choosed-active{
		color: #00afc7;
	}
	
	/*动画*/
	.slide-enter-active, .slide-leave-active {
	  transition: all .5s
	}
	.slide-enter, .slide-leave-to {
	  height: 0
	}
	
</style>