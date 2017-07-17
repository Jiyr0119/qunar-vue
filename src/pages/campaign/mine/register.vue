<template>
    <div>
        <registerHeader></registerHeader>
        <registerContent></registerContent>
    </div>
</template>

<script>

    import registerHeader from './registerHeader'
    import registerContent from './registerContent'

    export default {
        data () {
            return {
            
            }
        }, 

        components: {
            "registerHeader":registerHeader,
            "registerContent":registerContent
        }
    }
</script>

