<template>
  <div class="container-fluid toast-wrap fade" :class="{ show: isShown }">
    <div class="row">
      <div class="col-6 mx-auto">
        <div
          class="toast show fade p-2 mx-auto mt-7"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="toast-body text-center">
            {{ message }}
            <hr class="horizontal dark" />
            <div class="d-flex justify-content-center">
              <button
                type="button"
                class="btn bg-gradient-primary btn-sm me-2 mb-0"
                @click="unmountToast"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useUtilStore } from '@/stores/utils';
  const { isShown, message } = storeToRefs(useUtilStore());
  const { unmountToast } = useUtilStore();
</script>

<style scoped lang="scss">
  .toast-wrap {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0;
    &.show {
      opacity: 1;
      z-index: 9999;
    }
  }
  .toast {
    background-color: #fff;
  }
</style>
