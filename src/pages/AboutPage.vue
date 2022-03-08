<template>
  <page-template>
    <h1>О проекте</h1>

    <div>
      <h2>Стили - "./styles"</h2>
      <p>Главный файл - "./index.scss"</p>
      <p>Шрифты - "./fonts"</p>
      <p>Глобальные - "./global"</p>
      <p>Сброс - "./reset"</p>
      <p>Сетка - "./grid"</p>
      <p>Утилиты - "./helpers"</p>
      <p>Расположение - "./spacing"</p>
      <p>Компоненты - "./ui"</p>
    </div>

    <div>
      <h2>Страницы - "./pages"</h2>
      <p>О проекте - "./AboutPage.vue"</p>
    </div>

    <div>
      <h2>Роутинг - "./router"</h2>
      <p>Главный файл - "./index.js"</p>
    </div>

    <div>
      <h2>Компоненты - "./components"</h2>
      <p>Меню навигации - "./NavigationBar"</p>
      <p>Шаблон страницы - "./PageTemplate"</p>
    </div>

    <div>
      <h2>Модули - "./modules"</h2>
      <p>Страницы, компоненты и т.д. специфичные только для этой сущности (todos) - "./todos"</p>
    </div>
  </page-template>
</template>

<script>
  import PageTemplate from '@/components/PageTemplate'

  export default {
    components: { PageTemplate }  
  }
</script>