<script setup lang="ts">
import { ref } from 'vue'
import * as yup from 'yup'
import { useNews } from '~/stores/news'

const store = useOnboarding()
const { t } = useI18n()
const localePath = useLocalePath()
const router = useRouter()
const storeNews = useNews()

const loading = useLoading(ref(false))

const products = ref(['KPMG.png', 'Herbalife.png', 'Sura.svg', 'Bayer.svg'])

const imgBrands = ref([
  'Laika.svg',
  'Gopass.svg',
  'Gane.svg',
  'MaxxiBeach.svg',
  'Banclic.svg',
  'Bericool.svg',
])
const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: '1199px',
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: '767px',
    numVisible: 1,
    numScroll: 1,
  },
])

onMounted(async () => {
  await storeNews.fetchNews()
})
</script>
<template>
  <div class="landing">
    <FormsContactForm>
      <template #information>
        <div class="contact-brands md:w-[350px]">
          <h2>
            {{ t('text.brands.firstTitle.one') }}
            <span class="blue"> {{ t('text.brands.firstTitle.two') }}</span>
          </h2>
          <div class="brand md:tw-grid tw-hidden">
            <img
              v-for="(img, index) in imgBrands"
              :key="index"
              :src="'/img/' + img"
              alt=""
            />
          </div>
          <div class="no-buttons-carousel">
            <Carousel
              class="tw-mt-[40px] w-full md:tw-hidden"
              :value="imgBrands"
              :numVisible="2"
              :numScroll="1"
            >
              <template #item="slotProps">
                <img :src="'/img/' + slotProps.data" alt="" />
              </template>
            </Carousel>
          </div>
        </div>
      </template>
    </FormsContactForm>
    <div class="w-full text-center about">
      <h2>{{ t('text.brands.about.title') }}</h2>
      <h2 class="blue">{{ t('text.brands.about.subtitle') }}</h2>
      <div
        class="tw-flex tw-flex-col tw-items-center tw-w-full tw-gap-[104px] tw-mt-[104px]"
      >
        <div class="service-card">
          <img src="/img/Celular_servicios.png" alt="" />
          <div>
            <h3>{{ t('text.brands.services.first.title') }}</h3>
            <p>
              {{ t('text.brands.services.first.text.one') }}
              <span> {{ t('text.brands.services.first.text.span') }}</span>
            </p>
          </div>
        </div>
        <div class="service-card">
          <div>
            <h3>{{ t('text.brands.services.second.title') }}</h3>
            <p>
              {{ t('text.brands.services.second.text.one') }}
              <span>{{ t('text.brands.services.second.text.span') }}</span>
              {{ t('text.brands.services.second.text.two') }}
            </p>
          </div>
          <img src="/img/Lapiz_servicios.png" alt="" />
        </div>
        <div class="service-card">
          <img src="/img/Lupa_servicios.png" alt="" />
          <div>
            <h3>{{ t('text.brands.services.third.title') }}</h3>
            <p>
              {{ t('text.brands.services.third.text.one') }}
              <span>{{ t('text.brands.services.third.text.span') }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full text-center expert">
      <h2 class="blue tw-mb-[100px]">{{ t('text.brands.expert.title') }}</h2>
      <div
        class="tw-flex md:tw-flex-row tw-flex-col w-full justify-content-center tw-gap-[136px]"
      >
        <div class="expert-item">
          <img src="/img/Gorro_expertos.png" alt="" />
          <p>{{ t('text.brands.expert.text1') }}</p>
        </div>
        <div class="expert-item">
          <img src="/img/Medalla_expertos.png" alt="" />
          <p>{{ t('text.brands.expert.text2') }}</p>
        </div>
        <div class="expert-item">
          <img src="/img/Moneda_expertos.png" alt="" />
          <p>{{ t('text.brands.expert.text3') }}</p>
        </div>
      </div>
    </div>
    <div class="clients section">
      <h4>
        {{ t('text.brands.clients.title')
        }}<strong>{{ t('text.brands.clients.strongTitle') }}</strong>
      </h4>
      <div>
        <p>{{ t('text.brands.clients.text') }}</p>
        <p class="blue">{{ t('text.brands.clients.instructions') }}</p>
      </div>
      <div class="w-full">
        <div
          class="card flex flex-wrap justify-content-center tw-gap-[24px] md:tw-gap-[122px]"
        >
          <div class="general-checkbox flex align-items-center">
            <Checkbox
              v-model="brand"
              inputId="companies"
              name="companies"
              value="companies"
            />
            <label for="companies" class="ml-2">
              {{ t('text.brands.clients.companies') }}
            </label>
          </div>
          <div class="general-checkbox flex align-items-center">
            <Checkbox
              v-model="brand"
              inputId="startups"
              name="startups"
              value="startups"
            />
            <label for="startups" class="ml-2">
              {{ t('text.brands.clients.startups') }}
            </label>
          </div>
          <div class="general-checkbox flex align-items-center">
            <Checkbox
              v-model="brand"
              inputId="government"
              name="government"
              value="government"
            />
            <label for="government" class="ml-2">
              {{ t('text.brands.clients.government') }}
            </label>
          </div>
        </div>
        <Carousel
          class="tw-mt-[128px] w-full"
          :value="products"
          :numVisible="3"
          :numScroll="3"
          :responsiveOptions="responsiveOptions"
        >
          <template #item="slotProps">
            <img :src="'/img/' + slotProps.data" alt="" />
          </template>
        </Carousel>
      </div>
    </div>
    <div class="no-buttons-carousel section">
      <h4>
        <strong>{{ t('text.brands.news.title') }}</strong>
      </h4>
      <p>
        <strong>{{ t('text.brands.news.strongText') }}</strong>
      </p>
      <p>{{ t('text.brands.news.text') }}</p>

      <Carousel
        class="tw-mt-[128px] w-full"
        v-if="storeNews.news.length > 0"
        :value="storeNews.news"
        :numVisible="3"
        :numScroll="1"
        :responsiveOptions="responsiveOptions"
      >
        <template #item="slotProps">
          <GeneralCardNews
            class="w-full"
            :content="slotProps.data"
          ></GeneralCardNews>
        </template>
      </Carousel>
    </div>
    <div class="tw-mt-[178px] contact">
      <FormsContactForm>
        <template #information>
          <div>
            <h2 class="blue">
              {{ t('text.brands.contact.title') }}
            </h2>
            <h3>
              {{ t('text.brands.contact.subtitle') }}
            </h3>
            <img src="/img/binoculares_servicios.png" alt="" />
          </div>
        </template>
      </FormsContactForm>
    </div>
  </div>
</template>
