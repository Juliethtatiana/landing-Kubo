<script setup lang="ts">
import { ref } from 'vue'
import * as yup from 'yup'

const store = useOnboarding()
const { t } = useI18n()
const localePath = useLocalePath()
const router = useRouter()

const loading = useLoading(ref(false))

const products = ref(['KPMG.png','Herbalife.png'])

const imgBrands = ref([
  'Laika.svg',
  'Gopass.svg',
  'Gane.svg',
  'MaxxiBeach.svg',
  'Banclic.svg',
  'Bericool.svg',
])
</script>
<template>
  <div class="landing">
    <FormsContactForm>
      <template #information>
        <div class="contact-brands">
          <h2>
           {{ t('text.brands.firstTitle.one') }}
            <span class="blue"> {{ t('text.brands.firstTitle.two') }}</span>
          </h2>
          <div class="brand">
            <img
              v-for="(img, index) in imgBrands"
              :key="index"
              :src="'/img/' + img"
              alt=""
            />
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
            <h3> {{ t('text.brands.services.third.title') }}</h3>
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
      <div class="flex w-full justify-content-center tw-gap-[136px]">
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
    <div class="clients">
      <h4>{{t('text.brands.clients.title')}}<strong>{{t('text.brands.clients.strongTitle') }}</strong></h4>
      <div>
        <p>{{t('text.brands.clients.text') }}</p>
      <p class="blue">{{t('text.brands.clients.instructions') }}</p>

      </div>
           <div>
            <div class="card flex flex-wrap justify-content-center gap-3">
    <div class="flex align-items-center">
        <Checkbox v-model="pizza" inputId="ingredient1" name="pizza" value="Cheese" />
        <label for="ingredient1" class="ml-2"> Cheese </label>
    </div>
    <div class="flex align-items-center">
        <Checkbox v-model="pizza" inputId="ingredient2" name="pizza" value="Mushroom" />
        <label for="ingredient2" class="ml-2"> Mushroom </label>
    </div>
    <div class="flex align-items-center">
        <Checkbox v-model="pizza" inputId="ingredient3" name="pizza" value="Pepper" />
        <label for="ingredient3" class="ml-2"> Pepper </label>
    </div>
    
</div>
<Carousel :value="products" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
    <template #item="slotProps">
        <img :src="'/img/'+ slotProps.data" alt="">
    </template>
</Carousel>
      </div>

    </div>
  </div>
</template>
