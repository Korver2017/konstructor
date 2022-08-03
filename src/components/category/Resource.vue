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
            @click.prevent.stop="changeColor"
            class="col-md-2 fas fa-heart text-secondary align-items-center d-flex"
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

  console.log(userStore.postUserResult.user.favorite);

  const isFavorite = computed(() => {
    userStore.postUserResult.user.favorite;
  });

  const image = computed(() => {
    return props.resource.image
      ? props.resource.image
      : 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/presentation/sections/page-sections/page-headers/header-7.jpg';
  });

  const changeColor = () => {
    console.log('K');
  };
</script>

<style scoped></style>
