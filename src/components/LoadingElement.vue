<template>
    <div class="loader">
        <Vue3Lottie :animationData="animation" class="animationContainer"/>
    </div>
</template>
  
<script>
import { Vue3Lottie } from 'vue3-lottie'
import animation from '../assets/loading.json'

export default {
name: "LoadingElement",
    components: {
        Vue3Lottie
    },
    data() {
        return {
           animation: animation
        };
    },
};
</script>

<style scoped>

.animationContainer{
    padding: 13vw;
}

.loader{
    width: 100%;
    height: 100%;
    backdrop-filter: blur(7px);
    display: flex;
    justify-content: center;
    align-items: center;
    position : fixed;
    top: 0;
    left: 0;
    z-index: 9999;
}

</style>