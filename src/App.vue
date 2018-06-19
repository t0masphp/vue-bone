<template>
  <b-container>
    <b-row class="pb-3">
      <HeaderComponent/>
    </b-row>
    <b-row class="pb-3">
      <HeaderMenu/>
    </b-row>
    <b-row>
      <b-col>
        <ImageSlider/>
      </b-col>
      <b-col>
        <div class="inner">
          <h3>Полезная информация для тех, кто ценит свое время</h3>
          <a
            class="morelink grey"
            href="/taxonomy/term/33">Узнать больше</a>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card title="БУХГАЛТЕРСКИЙ ЦЕНТР АВИЗО">
          <p class="card-text">
            В основе успешной деятельности любой компании лежит грамотно поставленный бухгалтерский учет. Задачей
            бухгалтерского учета является не только подготовка информации для налоговых органов, хотя и этого достаточно
            для того, чтобы уделить ему внимание. Именно бухгалтер готовит для Вас информацию для принятия
            управленческих решений, думает о том, как правильно и экономно рассчитать налоги, готовит отчетность для
            инвесторов и кредиторов. Таким важным делом должны заниматься профессионалы.
          </p>
        </b-card>
      </b-col>
      <b-col>
        <b-card title="УСЛУГИ НАШЕЙ КОМПАНИИ">
          <p class="card-text">
            <b-nav
              vertical
              class="w-25">
              <b-nav-item active>Active</b-nav-item>
              <b-nav-item>Link</b-nav-item>
              <b-nav-item>Another Link</b-nav-item>
              <b-nav-item disabled>Disabled</b-nav-item>
            </b-nav>
            <a href="/taxonomy/term/33">Все услуги</a>
            <a href="/taxonomy/term/33">Прайс-лист</a>
          </p>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div>
          МЫ ПОНИМАЕМ, ЧТО СУТЬ ЛЮБОГО БИЗНЕСА – ДОСТИЖЕНИЕ ОПРЕДЕЛЕННЫХ ВЫСОТ И МЫ РАДЫ, ЧТО ПОМОГАЕМ ВАМ ДОСТИГАТЬ ЭТИ
          ВЫСОТЫ. КАЖДОЕ ВАШЕ ДОСТИЖЕНИЕ – ЭТО И НАША ПОБЕДА. МЫ ЦЕНИМ ВАШЕ ДОВЕРИЕ.
        </div>
      </b-col>
      <b-col>
        <b-img src="http://avizo.su/sites/default/files/maximum.png" />
      </b-col>
    </b-row>
    <b-row>
      <FooterComponent/>
    </b-row>
  </b-container>
</template>

<script>
import HelloComponent from './components/HelloComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import HeaderMenu from './components/HeaderMenu.vue'
import FooterComponent from './components/FooterComponent.vue'
import ImageSlider from './components/ImageSlider/ImageSlider.vue'

export default {
  components: {
    ImageSlider,
    FooterComponent,
    HeaderMenu,
    HeaderComponent,
    HelloComponent
  }
}
</script>
