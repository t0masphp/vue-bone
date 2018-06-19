<template>
  <b-container
    fluid
    class="border-top"
  >
    <b-row>
      <b-col>
        <address>+7 (812) 380-43-65 ул. Галерная, д. 20-22 офис 406</address>
        <address>+7 (812) 380-43-64 пл. Карла Фаберже, д. 8, литер А, офис 542</address>
        <address>+7 (812) 304-85-37, +7 (812) 304-99-98 ул. Репищева, д.20 , офис 515</address>
      </b-col>
      <b-col>
        © 2013 - 2018 Avizo
      </b-col>
    </b-row>
    <b-row>
      <b-col><b-button>Send mail</b-button></b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
  .border-top {
    border-top: 1px solid lightslategray;
  }
</style>
