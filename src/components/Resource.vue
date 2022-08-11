<template>
  <div class="col-md-4 mt-md-0">
    <a :href="props.resource.url" target="_blank">
      <div class="card shadow-lg move-on-hover min-height-160 min-height-160">
        <img class="w-100 my-auto" :src="image" alt="" />
      </div>
      <h6 class="mb-0"></h6>
      <div class="mt-2 ms-2">
        <div class="row">
          <h6 class="col-md-10 mb-0">
            {{ props.resource.name }}
          </h6>
          <i
            @click.prevent.stop="toggleAsFavorite"
            class="col-md-2 fas fa-heart text-secondary align-items-center d-flex"
            :class="{ 'text-danger': isFavorite }"
          ></i>
        </div>
        <p class="text-secondary text-sm">{{ props.resource.subtitle }}</p>
      </div>
    </a>
  </div>
</template>

<script setup>
  import { useUserStore } from '@/stores/users';
  const userStore = useUserStore();
  const props = defineProps({
    resource: {
      type: Object,
      default: () => ({}),
    },
  });

  const image = computed(() => {
    return props.resource.image
      ? props.resource.image
      : 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/presentation/sections/page-sections/page-headers/header-7.jpg';
  });

  const isFavorite = computed(() => {
    return userStore.user.data.favorites.includes(props.resource.id);
  });

  const toggleAsFavorite = () => {
    const favorites = userStore.user.data.favorites;
    const idx = favorites.indexOf(props.resource.id);

    if (idx > -1) return favorites.splice(idx, 1);

    favorites.push(props.resource.id);
  };
</script>

<style scoped></style>
