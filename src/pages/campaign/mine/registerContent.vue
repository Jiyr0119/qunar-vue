<template>
    <div>
        <div>
            <div class="formStyle">
                <div class="formContolFrist">
                    <label class="contolLabel">手机号</label>
                    <div class="contolContainer">
                        <input class="contolText" type="text" name="" ref="phone" placeholder="请输入手机号"@blur=handlePhoneOnblur>
                    </div>
                </div>
                <div class="formContolFrist">
                    <label class="contolLabel">图形码</label>
                    <div class="contolContainer">
                        <input class="contolText" type="text" name="" placeholder="请输入图形码">
                        <img class="rightBtn contolImg" src="https://user.qunar.com/captcha/api/image?k={en7mni(z&p=ucenter_login&c=ef7d278eca6d25aa6aec7272d57f0a9a&t=736" @click=handleChangeImg >
                    </div>
                </div> 
                <div class="formContollast">
                    <label class="contolLabel">密码</label>
                    <div class="contolContainer">
                        <input class="contolText" type="password" ref="password" name="" placeholder="请输入验证码">
                        <div class="rightBtn">获取不了大哥</div>
                    </div>
                </div>
            </div>
            <div :class={registerChangeColor:canRegister} to="" class="btn" @click=handleregisterClick>
                注册
            </div>
        </div>
    </div>
</template>

<script>

    export default {

        data () {
            return {
                canRegister:false
            }
        },

        methods: {
            handleregisterClick: function() {
                var phoneVal = this.$refs.phone.value,
                    password = this.$refs.password.value,
                    logInformation = [];
                if(this.canRegister) {
                    logInformation.push({"username": phoneVal,"password": password});
                    localStorage.setItem('logInformation',JSON.stringify(logInformation));
                    alert('注册成功');
                    this.$router.go(-2);
                }else {}
            },

            handleChangeImg: function() {
                console.log("心态崩了GG")
            },

            handlePhoneOnblur: function() {
                var reg = /^1[3|4|5|7|8][0-9]{9}$/,
                    phoneVal = this.$refs.phone.value;
                if(reg.test(phoneVal))  {
                    this.canRegister = true;
                }
            }
        }
    }
</script>


<style scoped>
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
        margin-top:.16rem;
        width:.01rem;
        height:.6rem;
        border:0;
        line-height:.3rem;
        color:#000;
        font-size: .32rem;
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

    .registerChangeColor {
        background-color: #18a9b9;
    }

</style>