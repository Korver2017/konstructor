<template>
  <div class="col-md-4 mt-md-0">
    <a :href="resource.url" target="_blank">
      <div class="card shadow-lg move-on-hover min-height-160 min-height-160">
        <img class="w-100 my-auto" :src="image" alt="" />
      </div>
      <h6 class="mb-0"></h6>
      <div class="mt-2 ms-2">
        <div class="row">
          <h6 class="col-md-10 mb-0">
            {{ resource.name }}
          </h6>
          <i
            @click.prevent.stop="toggleAsFavorite"
            class="col-md-2 fas fa-heart text-secondary align-items-center d-flex"
            :class="{ 'text-danger': isFavorite }"
          ></i>
        </div>
        <p class="text-secondary text-sm">{{ resource.subtitle }}</p>
      </div>
    </a>
  </div>
</template>

<script setup>
  import { useUserStore } from '@/stores/users';
  const { user } = storeToRefs(useUserStore());
  const props = defineProps({
    resource: {
      type: Object,
      default: () => ({}),
    },
  });
  const { resource } = toRefs(props);

  // If the resource does not have an image, use the default image.
  const image = computed(() => {
    return resource.value.image
      ? resource.value.image
      : 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/presentation/sections/page-sections/page-headers/header-7.jpg';
  });

  // If the resource is a favorite, set the favorite icon to red.
  const isFavorite = computed(() => {
    return user.value.data.favoriteIds.includes(resource.value.id);
  });

  const toggleAsFavorite = () => {
    const favoriteIds = user.value.data.favoriteIds;
    const idx = favoriteIds.indexOf(resource.value.id);

    if (idx > -1) return favoriteIds.splice(idx, 1);

    favoriteIds.push(resource.value.id);
  };
</script>

<style scoped></style>
