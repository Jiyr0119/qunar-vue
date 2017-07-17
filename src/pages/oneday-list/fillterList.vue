<template>
	<div class="fillter" ref="fillter">
		<h3 class="title"> 游玩景点(可多选) </h3>
		<div id="fillterWraper" :class="{'fillter-list': true, 'listActive':isActive }" ref="fillterList">
			<ul :class="{ 'lists': true, 'scroller':true, 'listsActive':itemActive[0] } " ref="lists" >
				<li :class="{'list': true, itemActive: itemActive[index] }" ref="list" v-for="( item, index) in fillterList" @click="sortList(index)" :key=" 'fillterList' + index">
					<span :class="{'txtActive': itemActive[index] }"> {{item}}</span>
				</li>
			</ul>
		</div>
		<div :class="{ 'arrow': true, 'arrowActive' : isActive }" @click="changeFillterStyle">
			<i class="iconfont">&#xe76d;</i>
		</div>
		<div :class="{'masker': isActive}"  @click="changeFillterStyle"> </div>
	</div>
</template>

<script>export default {
data() {
	return {
		isActive: false,
		listWidth: 0,
		scroll: null,
		itemActive: [],
		itemActiveCount: 0
	}
},
props: ["datas"],
computed: {
	fillterList() {
		return this.datas.data ? this.datas.data.filter[4].values : []
	}
},
updated() {
	//动态设定fillter中ul的宽度
	//只在第一次更新数据调用,定义listWidth的值
	
	if(this.listWidth) return;
	let listWidth = 0;
	if(this.$refs.list) {
		this.$refs.list.forEach(item => {
			listWidth += item.offsetWidth
		})
		//将计算得到的宽度存进data
		this.listWidth = listWidth + 40 + "px";
		this.$refs.lists.style.width = this.listWidth;
	}
	this.$refs.fillter.style.height = window.innerHeight - 60 + "px";
	this.setNewScroll();
},
methods: {
	changeFillterStyle() {
		if(this.isActive) {
			this.$refs.lists.style.width = this.listWidth;
			this.setNewScroll();
		} else {
			this.$refs.lists.style.width = this.$refs.fillterList.offsetWidth + "px";
			this.setNewScroll(false, true);
		}
		this.isActive = !this.isActive;
	},
	sortList( index ){
		if( this.itemActive[ index ]){
			let tempTxt = this.fillterList.splice( index ,1)[0];
			this.fillterList.push(tempTxt);
			this.itemActive[ -- this.itemActiveCount ] = false;
		}else{
			//重新将数组排序
			let tempTxt = this.fillterList.splice( index ,1)[0];
			this.fillterList.unshift(tempTxt);
			//给选中的项加class
			this.itemActive[ this.itemActiveCount ++ ] = true;
		}
	},
	setNewScroll( scrollX = true, scrollY = false){
		if( this.scroll){
			this.scroll.destroy();
			this.scroll = null;
		}
		this.scroll = new IScroll('#fillterWraper', {  scrollX ,scrollY });
		setTimeout( () => this.scroll.refresh(), 1000)
	}
}}
</script>

<style scoped lang="scss">
.fillter {
	position: relative;
	overflow: hidden;
	.title {
		height: .8rem;
		line-height: .8rem;
		background: #e5e7e8;
		padding-left: .2rem;
	}
}

.fillter-list {
	position: relative;
	z-index: 1;
	top: -.8rem;
	width: 100%;
	height: 1.2rem;
	background: #e5e7e8;
	transition: height .3s;
	overflow: hidden;
	.lists {
		padding-left: .12rem;
		overflow:hidden;
		.list {
			float: left;
			color: #212121;
			font-size: .26rem;
			padding: .14rem .08rem;
			span {
				box-sizing: border-box;
				border: 1px solid transparent;
				height: .56rem;
				line-height: .56rem;
				padding: 0 .22rem;
				background: #FFFFFF;
				display: block;
			}
		}
		
	}
	.listsActive{
		.itemActive{
			.txtActive{
				color: #28a9b9;
				background: #fff;
			}
		}
		.list{
			span{
				color: #ccc;
				background:rgba(255,255,255,.8);
			}
		}
	}
}

.arrow {
	z-index: 4;
	position: absolute;
	right: 0;
	top: 0;
	background: #e5e7e8;
	width: .8rem;
	height: .8rem;
	line-height: .8rem;
	font-size: .28rem;
	text-align: center;
	i {
		display: inline-block;
		transition: all .3s;
	}
}

.listActive {
	height: 6rem;
	z-index: 4;
	top: 0;
	.list {
		display: inline-block;
	}
}

.arrowActive i {
	transform: rotate(180deg);
}

.masker {
	width: 100%;
	position: absolute;
	top: 100px;
	z-index: 3;
	background: rgba(0, 0, 0, 0.45);
	height: 100%;
}
</style>