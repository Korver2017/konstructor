<template>
  <header>
    <div class="page-header min-vh-75 mt-8">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 my-auto">
            <h1 class="text-gradient text-warning mb-0">
              Hello,
              {{ postUserResult.user.name }}
            </h1>
            <h1 class="mb-4">Welcome back!</h1>
            <p class="lead">
              The time is now for it to be okay to be great. For being a bright
              color. For standing out.
            </p>
            <div class="buttons">
              <button type="button" class="btn bg-gradient-warning mt-4">
                Discover
              </button>
              <button type="button" class="btn text-warning shadow-none mt-4">
                Read more
              </button>
            </div>
          </div>
          <div class="col-lg-8 ps-5 pe-0">
            <div class="row">
              <div class="col-lg-3 col-6">
                <img
                  class="w-100 border-radius-lg shadow mt-0 mt-lg-7"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desire.jpg"
                  alt=""
                />
              </div>
              <div class="col-lg-3 col-6">
                <img
                  class="w-100 border-radius-lg shadow"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/chair.jpg"
                  alt=""
                />
                <img
                  class="w-100 border-radius-lg shadow mt-4"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/facade.jpg"
                  alt=""
                />
              </div>
              <div class="col-lg-3 col-6">
                <img
                  class="w-100 border-radius-lg shadow mt-0 mt-lg-5"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/architecture.jpg"
                  alt=""
                />
                <img
                  class="w-100 border-radius-lg shadow mt-4"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/baloon.jpg"
                  alt=""
                />
              </div>
              <div class="col-lg-3 col-6">
                <img
                  class="w-100 border-radius-lg shadow mt-3"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/seaside.jpg"
                  alt=""
                />
                <img
                  class="w-100 border-radius-lg shadow mt-4"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/medusa.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
  import { useUserStore } from '@/stores/users.js';
  const { postUserResult } = useUserStore();
</script>

<style scoped></style>