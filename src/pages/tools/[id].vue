<template>
  <section class="my-5 py-5">
    <div class="container mt-sm-5 mt-3">
      <template v-if="isLoaded">
        <Category :category="category" />
      </template>
    </div>
  </section>
</template>

<script setup>
  import { apiGetTool } from '@/api/toolsLoader';
  import { useToolStore } from '@/stores/tools';
  const { tools } = useToolStore();
  const route = useRoute();

  const category = { data: {} };

  const id = computed(() => {
    return route.params.id;
  });

  const isLoaded = ref(false);

  onMounted(async () => {
    const result = await apiGetTool(id.value);
    await Object.assign(category.data, result.data);
    isLoaded.value = true;
  });
</script>

<style scoped></style>
