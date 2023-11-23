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
          <span>Ellos ya lo hicieron:</span>
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
  </div>
</template>
