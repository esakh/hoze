<script setup>
import HeaderTop from "@/components/head/HeaderTop.vue";
import DefaultFooter from "@/components/foot/defaultFooter.vue";

</script>

<template>
<div class="container">
    <header-top />
    <slot/>
    <default-footer/>
</div>
</template>

<style scoped>

</style>