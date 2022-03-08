<template>
  <div>
    <header-nav></header-nav>
    <article></article>
    <footer-nav></footer-nav>
    
  </div>
</template>
<script>
// 引入组件
import HeaderNav from '../../components/headerNav'
import FooterNav from '../../components/footerNav'
export default {
  components: { HeaderNav, FooterNav }
};
</script>

<style lang="less" scoped>
article {
height: 529px;
}
</style>