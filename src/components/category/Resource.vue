<template>
  <div class="col-md-4 mt-md-0">
    <a href="./sections/page-sections/hero-sections.html">
      <div class="card shadow-lg move-on-hover min-height-160 min-height-160">
        <img
          class="w-100 my-auto"
          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/presentation/sections/page-sections/page-headers/header-7.jpg"
          alt=""
        />
      </div>
      <h6 class="mb-0"></h6>
      <div class="mt-2 ms-2">
        <h6 class="mb-0">{{ props.resource.name }}</h6>
        <p class="text-secondary text-sm">{{ props.resource.subtitle }}</p>
      </div>
    </a>
  </div>
</template>

<script setup>
  const props = defineProps({
    resource: {
      type: Object,
      default: () => ({}),
    },
  });
</script>

<style scoped></style>
