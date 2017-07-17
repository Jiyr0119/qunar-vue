<template>
<div class="main">
	<div class="phonearea-header">
        <span class="phonearea-headerback iconfont">&#xe657;</span> 
        <h1 class="phonearea-headertitle">选择国家或地区</h1>  
    </div>
    <div class="write-phonearea">
        <input type="text" class="countrycode-input" placeholder="请输入国家名称或代码" />
    </div>
    <ul class="countrycode-suggest">
        <li class="suggest-item border-bottom" v-for="item in list" @click="handlePhoneCode">
            <div class="suggest-item-content" :data-content="item.content">
                {{item.content}}
                <span class="suggest-item-code" :data-code="item.code">+{{item.key}}</span>
            </div>
        </li>
    </ul>             
</div>
</template>

<script>

export default {
    created: function(){
        this.$http.get('/static/phonearea.json').then(response => {
           console.log(response.body.data.list)
           this.list = response.body.data.list
        }, response => {
            console.log("get index data error")
        });
    },
    data() {
      return {
           list:[]
      }
    },
    methods: {
        handlePhoneCode: function(e) {
            var code = e.target.lastChild.innerHTML;
            try {
                window.localStorage.code = code;
            }catch(e) {}
            this.$store.commit("changeCode", code);
            this.$router.go(-1)
        }
    } 
}


</script>


<style scoped>
  	.main {
        position: relative;
        overflow: hidden;
        width: 100%;
        min-height: 100%;
        background: #f5f5f5;
    }
    .phonearea-header {
        position: relative;
        height: .88rem;
        background: #00bcd4;
        z-index: 91;
    }
    .phonearea-headerback {
        display:block;
        position: absolute;
        left: .1rem;
        top: .1rem;
        width: .72rem;
        height: .72rem;
        line-height: .72rem;
        font-size: .36rem;
        color: #fff;
        text-align: center;
    }
    .phonearea-headertitle {
        overflow: hidden;
        margin: 0 1rem;
        line-height: .88rem;
        text-overflow: ellipsis;
        font-size: .32rem;
        text-align: center;
        color: #fff;
        font-weight: normal;
    }
    .write-phonearea {
        padding-bottom: .15rem;
        background-color: #00bcd4;
    }
    .countrycode-input {
        display: block;
        width: 90%;
        height: .4rem;
        border: 0;
        margin: 0 auto;
        font-size: 12px;
        line-height: .4rem;
        text-indent: 5px;
        outline: 0 none;
    }
    .suggest-item {
        height: .6rem;
        padding: 0 .2rem;
        line-height: .6rem;
    }
    .suggest-item::before {
        border-bottom-color: #ccc;
    }
    .suggest-item-code {
        float: right;
    }
    
</style>


