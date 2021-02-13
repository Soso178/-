<template>
    <div class="cart-all">
        <cart-top></cart-top>
        <cart-center></cart-center>
        <bottom></bottom>
    </div>
</template>
<script>
import Bottom from '../bottom.vue'
import CartCenter from './CartCenter.vue'
import CartTop from './CartTop.vue'
export default {
    name:'Cart',
    components:{
        CartTop,
        CartCenter,
        Bottom        
    }
}
</script>
<style scoped lang='less'>
* {
  padding: 0;
  margin: 0;
}
.cart-all{
    height: 1350px;
    width: 750px;
}
</style>