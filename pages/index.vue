<script setup lang="ts">
import { ref } from 'vue'
import * as yup from 'yup'

const store = useOnboarding()
const { t } = useI18n()
const localePath = useLocalePath()
const router = useRouter()

const loading = useLoading(ref(false))

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
    <div class="tw-flex tw-gap-40">
      <div class="contact-brands">
        <h2>
          Da el primer paso para crear tu app,
          <span class="blue">Ellos ya lo hicieron:</span>
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
      <div class="w-full">
        <FormsContactForm></FormsContactForm>
      </div>
    </div>
    <div class="w-full text-center about">
      <h2>
          Da el primer paso para crear tu app,
        </h2>
        <h2 class="blue">¿Qué ofrecemos?</h2>
<div class="tw-flex tw-flex-col tw-items-center tw-w-full tw-gap-[104px] tw-mt-[104px]">
  <div class="service-card">
        <img src="/img/Celular_servicios.png" alt="">
        <div>
            <h3>Desarrollo de apps multiplataforma y nativas</h3>
            <p>Desarrollamos aplicaciones móviles que generan <span>ventajas competitivas en el mercado</span></p>
        </div>
        
    </div>
    <div class=" service-card">
        <div>
            <h3>Desarrollo de apps multiplataforma y nativas</h3>
            <p>Desarrollamos aplicaciones móviles que generan <span>ventajas competitivas en el mercado</span></p>
        </div>
        <img src="/img/Celular_servicios.png" alt="">
    </div>
    <div class="service-card">
        <img src="/img/Celular_servicios.png" alt="">
        <div>
            <h3>Desarrollo de apps multiplataforma y nativas</h3>
            <p>Desarrollamos aplicaciones móviles que generan <span>ventajas competitivas en el mercado</span></p>
        </div>
        
    </div>
</div>
     
    </div>
  </div>
</template>
