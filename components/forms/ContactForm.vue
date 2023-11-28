<script setup lang="ts">
const country = ref({})
const countries = ref([
  { id: 1, name: 'Colombia' },
  { id: 2, name: 'Argentina' },
])
</script>
<template>
  <div class="contact-form">
    <div class="flex flex-column gap-2 general-input">
      <label for="name">Nombre <span>*</span></label>
      <InputText id="name" v-model="name" aria-describedby="name-help" />
    </div>
    <div class="flex flex-column gap-2 general-input">
      <label for="name">Apellidos <span>*</span></label>
      <InputText id="name" v-model="name" aria-describedby="name-help" />
    </div>
    <div class="flex gap-5">
      <div>
        <label for="country">País <span>*</span></label>
        <Dropdown
          v-model="country"
          :options="countries"
          optionLabel="name"
          placeholder="País "
          class="w-full md:w-14rem"
        />
      </div>
      <div class="flex flex-column gap-2 general-input">
        <label for="name">Número de Teléfono <span>*</span></label>
        <InputText id="phone" v-model="phone" />
      </div>
    </div>
    <recaptcha />
    <Button type="submit" class="btn">Enviar</Button>
  </div>
</template>
