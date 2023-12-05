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

      <footer
        class="footer tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-[40px]"
      >
        <div class="flex flex-column gap-4">
          <img src="/img/Logo_kubo.svg" alt="" class="tw-max-w-[250px]" />
          <h2>{{ $t('text.footer.start') }}</h2>
        </div>
        <div class="flex flex-column gap-4">
          <div class="subtitle">
            <p>{{ $t('text.footer.contactUs') }}</p>
          </div>

          <div class="flex gap-2">
            <img src="/icons/ic_phone_contact.png" alt="" />
            <p class="purple">{{ $t('text.footer.phone') }}</p>
          </div>
        </div>
        <div class="flex flex-column gap-4">
          <div class="subtitle">
            <p>{{ $t('text.footer.visit') }}</p>
          </div>
          <div class="flex">
            <p>{{ $t('text.footer.direction') }}</p>
          </div>
        </div>

        <div class="flex tw-gap-[10px] tw-max-h-[69px] w-full">
          <img src="/img/top.png" alt="" />
          <img src="/img/Escudo.png" alt="" />
          <img src="/img/Escudo 2.png" alt="" />
          <img src="/img/Escudo 3.png" alt="" />
          <img src="/img/Clucht.png" alt="" class="tw-object-contain" />
        </div>
        <div class="w-full tw-text-right xl:tw-col-span-2 md:tw-col-start-3">
          <p>{{ $t('text.footer.copyright') }}</p>
          <a href="#" class="tw-underline">{{ $t('link.terms') }}</a>
        </div>
      </footer>
    </main>
    <LayoutsLoginLogout :dialog="openLogout" @closeModal="openLogout = false" />
  </div>
</template>
