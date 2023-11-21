<script setup lang="ts">
import { ref } from 'vue'
import * as yup from 'yup'

const store = useOnboarding()
const { t } = useI18n()
const localePath = useLocalePath()
const router = useRouter()

const loading = useLoading(ref(false))
</script>
<template></template>
