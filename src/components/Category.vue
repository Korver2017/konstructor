<template>
  <div class="row">
    <div class="col-lg-3">
      <div
        class="position-sticky pb-lg-5 pb-3 mt-lg-0 mt-5 ps-2"
        style="top: 100px"
      >
        <h3>{{ props.category.title }}</h3>
        <h6 class="text-secondary font-weight-normal pe-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </h6>
      </div>
    </div>
    <div class="col-lg-9">
      <div class="row mt-3">
        <Resource
          v-for="resource in props.category.resources"
          :resource="resource"
          :key="resource.id"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    category: {
      type: Object,
      default: () => ({}),
    },
  });
</script>

<style scoped></style>
