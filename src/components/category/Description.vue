<template>
  <div class="col-lg-3">
    <div
      class="position-sticky pb-lg-5 pb-3 mt-lg-0 mt-5 ps-2"
      style="top: 100px"
    >
      <h3>{{ props.label }}</h3>
      <h6 class="text-secondary font-weight-normal pe-3">
        A selection of 45 page sections that fit perfectly in any combination
      </h6>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    label: {
      type: String,
      default: '',
    },
  });
</script>

<style scoped></style>
