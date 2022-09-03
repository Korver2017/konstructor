<template>
  <section>
    <div class="page-header min-vh-100">
      <span class="mask bg-gradient-secondary opacity-5"></span>
      <div class="container">
        <div class="row">
          <div class="col-xl-4 col-lg-5 col-md-7 mx-auto">
            <div class="card z-index-0">
              <div class="card-header text-center pb-1">
                <h4 class="font-weight-bolder mb-1">Sign in</h4>
                <p class="mb-0">Welcome back</p>
              </div>
              <div class="card-body">
                <form>
                  <div class="mb-3">
                    <input
                      v-model="userInputs.account"
                      type="email"
                      class="form-control"
                      placeholder="Email"
                      aria-label="Email"
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      v-model="userInputs.password"
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      aria-label="Password"
                    />
                  </div>
                  <div class="text-center">
                    <button
                      @click="login"
                      type="button"
                      class="btn bg-gradient-info w-100 mt-4 mb-2"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { useUserStore } from '@/stores/users';
  const { userInputs, login } = useUserStore();
</script>

<style scoped>
  .page-header {
    background: url('~@/assets/img/curved-images/curved11.jpg');
    background-size: cover;
  }
  .card-header {
    padding-top: 50px;
  }
  .card-body {
    padding-bottom: 35px;
  }
</style>
