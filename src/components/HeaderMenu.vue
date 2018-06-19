<template>
  <b-nav
    class="w-100"
    pills>
    <b-nav-item class="item col-2">О компании</b-nav-item>
    <b-nav-item class="item col-2">Услуги</b-nav-item>
    <b-nav-item class="item col-4">Контактная информация</b-nav-item>
    <b-nav-item class="item col-4">Руководителю и бухгалтеру</b-nav-item>
  </b-nav>

</template>

<script>
export default {
  name: 'HeaderMenu'
}
</script>

<style type="scss" scoped>
  .item {
    border-top: 5px solid #d10b2a;
    background: #f9f9f9;
    display: table-cell;
    text-align: center;
    height: 74px;
    line-height: 73px;
  }
  .item:last-child {
    background-color: #d10b2a;
  }
  a {
    color: #333;
    text-decoration: none;
    font-size: 20px;
    line-height: 20px;
    height: auto;
    font-weight: bold;
    display: inline-block;
  }
</style>
