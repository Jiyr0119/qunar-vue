<template>
    <div>
        <login-out-header></login-out-header>
        <logTabs></logTabs>
    </div>
</template>
 
<script>

    import loginOutHeader from './loginOutHeader'
    import logTabs from './logTabs'
   
    export default {
        data () {
            return {

            }
        },

        components: {
            "login-out-header":loginOutHeader,
            "logTabs":logTabs
        }
    }
</script>