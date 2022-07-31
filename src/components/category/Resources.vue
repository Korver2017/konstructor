<template>
  <div class="col-lg-9">
    <div class="row mt-3">
      <Resource v-for="resource in props.resources" :resource="resource" />
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    resources: {
      type: Array,
      default: () => [],
    },
  });
</script>

<style scoped></style>
