<script setup>
import { ref, watch, onMounted, nextTick } from 'vue'
const { t } = useI18n()
const store = useOnboarding()
const router = useRouter()
const route = useRoute()
const localePath = useLocalePath()

const userData = store.getLoginUser

const languages = ref([
  { id: 1, name: 'Español' },
  { id: 2, name: 'Ingles' },
])
const lang = ref({})

// variables
const items = ref([
  {
    text: t('menu.report'),
    img: 'ic_reports',
    to: '/dashboard',
  },
  {
    text: t('menu.admin'),
    img: 'ic_admin',
    to: '/administrators',
  },
])
const actualPage = ref('')
const openLogout = ref(false)

const validateRol = (page) => {
  const item = items.value.filter((item) => page.includes(item.to))

  if (item.length > 0) {
    return true
  } else {
    router.push(localePath({ path: items.value[0].to }))
    return false
  }
}

onMounted(() => {
  nextTick(() => {})
})
</script>
<template>
  <div class="app-wraper">
    <main class="main-application">
      <nav class="nav-application">
        <div class="flex gap-4">
          <img src="/img/Logo_kubo.svg" alt="" />
          <Dropdown
            v-model="lang"
            :options="languages"
            optionLabel="name"
            placeholder="Lang "
            class="w-full md:w-14rem"
          />
        </div>

        <div>
          <Button>Contactanos</Button>
        </div>
      </nav>
      <div class="content-application">
        <slot />
       
      </div>
      
      <footer class="footer">
        <div class="flex">
          <div>
          <img src="/img/Logo_kubo.svg" alt="" />
        <h2>Empieza tu proyecto con Kubo</h2>
        </div>
        <div class="flex">
          <div>
            <p>Contactanos</p>
            <div class="flex">
              <img src="" alt="">
              <p>+57 (601) 5800567</p>
            </div>
          </div>
        </div>
        </div>
       
          <div class="flex gap-2">
            <img src="/img/top.png" alt="">
            <img src="/img/Escudo.png" alt="">
            <img src="/img/Escudo 2.png" alt="">
            <img src="/img/Escudo 3.png" alt="">
            <img src="/img/Clucht.png" alt="">
          </div>
        </footer>
    
    </main>
    <LayoutsLoginLogout :dialog="openLogout" @closeModal="openLogout = false" />
  </div>
</template>
