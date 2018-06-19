<template>
  <b-navbar
    toggleable="md"
    type="dark"
    class="w-100">

    <b-navbar-toggle target="nav_collapse"/>

    <b-collapse
      id="nav_collapse"
      is-nav>
      <b-nav-form size="sm">
        <b-form-input
          size="sm"
          class="mr-sm-2"
          type="text"
          placeholder="Search"/>
        <b-button
          size="sm"
          class="my-2 my-sm-0"
          type="submit">Search
        </b-button>
      </b-nav-form>
    </b-collapse>
    <b-navbar-brand href="#">
      <b-img
        src="http://avizo.su/sites/all/themes/avizo/logo.png"
      />
    </b-navbar-brand>

    <b-collapse
      id="nav_collapse"
      align-v="start"
      is-nav>
      <address
        class="h-100 pl-2"
      >
        +7 (812) 304-85-37
        <br>
        +7 (812) 304-99-98
        <br>
        ул. Репищева, 20
        <br>
        офис. 515
      </address>
      <address class="h-100 pl-2">
        +7 (812) 380-43-64
        <br>
        пл. Карла Фаберже,
        <br>
        д.8, лит. А
        <br>
        офис 542
      </address>
      <address
        class="h-100 pl-2"
      >
        +7 (812) 380-43-65
        <br>
        ул. Галерная, 20-22
        <br>
        офис 406
      </address>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style scoped>

</style>
