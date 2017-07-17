<template>
    <div>
        <div class="loginTabBox">
            <div class="loginTabBoxBorder">
                <div class="loginTabLeft loginTab" :class={handleClick:seen} @click="handleEmailDisplayClick">短信验证码登录</div>
                <div class="loginTabRight loginTab" :class={handleClick:seen1} @click="handlePhoneDisplayClick">账号登录</div>
            </div>
        </div>

        <div v-if="phoneDisplay" >
            <div class="formStyle">
                <div class="formContolFrist">
                    <label class="contolLabel ">手机号</label>
                    <div class="contolContainer">
                        <input class="contolText" type="text" name="" placeholder="请输入手机号">
                    </div>
                </div>
                <div class="formContollast">
                    <label class="contolLabel">验证码</label>
                    <div class="contolContainer">
                        <input class="contolText" type="text" name="" placeholder="请输入验证码">
                        <div class="rightBtn" :class={changeColor:isChange} @click="handleCodeClick">获取验证码</div>
                    </div>
                </div>
            </div>
            <div class="btn" >登录</div>
        </div>

        <div v-if="emailDisplay">
            <div class="formStyle">
                <div class="formContolFrist">
                    <label class="contolLabel" >账号</label>
                    <div class="contolContainer">
                        <input class="contolText" @blur=handlePhoneOnblur  type="text"  ref="phone" name="" placeholder="手机号/邮箱/用户名">
                    </div>
                </div>
                <div class="formContolFrist">
                    <label class="contolLabel">密码</label>
                    <div class="contolContainer">
                        <input class="contolText" type="text" ref="password" name="" placeholder="请输入密码">
                    </div> 
                </div>
                <div class="formContollast">
                    <label class="contolLabel">图形码</label>
                    <div class="contolContainer">
                        <input class="contolText" type="text" ref="contolText" name="" placeholder="请输入图形码">
                        <img class="rightBtn contolImg" src="https://user.qunar.com/captcha/api/image?k={en7mni(z&p=ucenter_login&c=ef7d278eca6d25aa6aec7272d57f0a9a&t=736" @click="handleChangeImg" >
                    </div>
                </div>
            </div>
            <div class="btn" :class={changeBackground:isChange} @click="handleLoginClick">登录</div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                phoneDisplay: true,
                emailDisplay: false,
                seen: true,
                seen1: false,
                isChange: false,
                isLogin: false,
                iSCode: false,
                imgs: [
                    {url:"https://user.qunar.com/captcha/api/image?k={en7mni(z&p=ucenter_login&c=ef7d278eca6d25aa6aec7272d57f0a9a&t=736"},
                    {url:"https://user.qunar.com/captcha/api/image?k={en7mni(z&p=ucenter_login&c=ef7d278eca6d25aa6aec7272d57f0a9a&t=696"},
                    {url:"https://user.qunar.com/captcha/api/image?k={en7mni(z&p=ucenter_login&c=ef7d278eca6d25aa6aec7272d57f0a9a&t=104"},
                    {url:"https://user.qunar.com/captcha/api/image?k={en7mni(z&p=ucenter_login&c=ef7d278eca6d25aa6aec7272d57f0a9a&t=664"},
                ]
            }
        },

        methods: {
            handlePhoneDisplayClick: function() {
                if( this.phoneDisplay ) {
                    this.phoneDisplay = !this.phoneDisplay;
                    this.emailDisplay = !this.emailDisplay;
                }
                this.seen = false;
                this.seen1 = true;
            },

            handleEmailDisplayClick: function() {
                if( this.emailDisplay ) {
                    this.phoneDisplay = !this.phoneDisplay;
                    this.emailDisplay = !this.emailDisplay;
                }
                this.seen = true;
                this.seen1 = false;
            },

            handlePhoneOnblur: function() {
                var reg = /^1[3|4|5|7|8][0-9]{9}$/,
                    phoneVal = this.$refs.phone.value,
                    contolText = this.$refs.contolText.value;
                if( !reg.test(phoneVal ) && phoneVal ==" " && contolText == "") {
                
                }else{
                    this.isChange = true;  
                }
            },

            handleCodeClick: function() {
                if( this.Code = true ) {
                    alert("此功能不可用，请用邮箱注册")
                }
            },

            handleChangeImg: function() {
                console.log("心态崩了GG")
            },

            handleLoginClick: function() {
                var phoneVal = this.$refs.phone.value,
                    password = this.$refs.password.value,
                    userInfo = JSON.parse( localStorage.getItem('logInformation') );
                if( userInfo[0].username == phoneVal && userInfo[0].password == password ) {
                this.$router.go(-1)
                }else {
                    alert("用户名或者密码输入不正确")
                }
                this.isChange = false;
            }
        }
    }
</script>


<style scoped>
    .loginTabBox {
        box-sizing: border-box;
        width: 100%;
        height: .9rem;        
        padding: .05rem .2rem 0;
        background-color: #18a9b9;
    }

    .loginTabBoxBorder {
        border:1px solid #fff;
        border-radius: .06rem;
        height: .64rem;
    }

    .loginTab {
        float: left;
        width: 50%;
        height: .64rem;
        text-align: center;
        line-height: .64rem;
        background-color: #18a9b9;
        color: #fff;       
        font-size: .32rem;
    }

    .handleClick {
        background-color: #fff;
        color: #18a9b9;
    }

    .formStyle {
        border-top:.01rem solid #ccc;
        border-bottom:.01rem solid #ccc;
        margin-top:.2rem;
        padding-left:.2rem;
        background:#fff;
        font-size:.16rem
    }

    .formContolFrist {
        display:-webkit-box;
        display:-webkit-flex;
        display:-moz-box;
        display:-ms-flexbox;
        display:flex;
        -webkit-box-direction:normal;
        -webkit-flex-direction:row;
        -ms-flex-direction:row;
        flex-direction:row;
        width:100%;
        border-bottom:.01rem solid #ddd;
        line-height:.45rem
    }

    .formContollast {
        display:-webkit-box;
        display:-webkit-flex;
        display:-moz-box;
        display:-ms-flexbox;
        display:flex;
        -webkit-box-direction:normal;
        -webkit-flex-direction:row;
        -ms-flex-direction:row;
        flex-direction:row;
        width:100%;
        line-height:.45rem
    }

    .contolLabel {
        display:block;
        width:1.8rem;
        height: .9rem;
        color: #19a9ba;
        font-size: .32rem;
        line-height: .9rem;
    }

    .contolContainer {
        display:-webkit-box;
        display:-webkit-flex;
        display:-moz-box;
        display:-ms-flexbox;
        display:flex;
        -webkit-box-direction:normal;
        -webkit-flex-direction:row;
        -ms-flex-direction:row;
        flex-direction:row;
        width:100%;
        -webkit-box-flex:1;
        -webkit-flex:1;
        -moz-box-flex:1;
        -ms-flex:1;
        flex:1;
        position:relative;
        border:0;
        vertical-align:middle
    }

    .contolText {
        -webkit-box-flex:1;
        -webkit-flex:1;
        -moz-box-flex:1;
        -ms-flex:1;flex:1;
        display:block;
        overflow: hidden;        
        width:.01rem;
        height:.6rem;
        margin-top:.16rem;
        font-size: .32rem;    
        line-height:.3rem;
        border:0;
        color:#000;        
    }

    .rightBtn {
        display:block;
        margin:.14rem .2rem;
        width:2rem;
        height:.6rem;
        border-radius:.06rem;
        text-align:center;
        line-height: .6rem;
        border:.01rem solid #ccc;
        color: #d7dce0;
        font-size: .28rem;
    }

    .btn {
        color:#fff;
        text-align:center;
        width: 7.88rem;
        height: 1rem;
        line-height:1rem;
        display:block;
        background:#85d1db;
        border-radius:.06rem;
        font-size: .36rem;
        margin: 0 auto;
        margin-top: .2rem;
    }

    .changeColor {
        color: #1ba9ba;
        border:.01rem solid #1ba9ba;
    }

    .changeBackground {
        background-color:#18a9b9;
    }

</style>