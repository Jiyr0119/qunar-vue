<template>
    <div>
        <header-oneDay :JiHeader="headerInfo.JiHeader"></header-oneDay>
        <prdcard-com :JiCardCon="headerInfo.JiCardCon" :JiPrdcardTagItem="headerInfo.JiPrdcardTagItem"></prdcard-com>
    </div>
</template>

<script>
    import headerOneDay from "./header-one-day";
    import prdcardCom from "./prdcard-com";

    export default {

        components: {
            "header-oneDay": headerOneDay,
            "prdcard-com": prdcardCom
        },
        props: ["headerInfo"]

    }

</script>


<style scoped>

</style>