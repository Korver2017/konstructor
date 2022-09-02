<template>
  <div class="sign-in-cover">
    <section>
      <div class="page-header min-vh-75">
        <div class="container">
          <div class="row">
            <div class="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
              <div class="card card-plain mt-8">
                <div class="card-header pb-0 text-left">
                  <h3 class="font-weight-bolder text-info text-gradient">
                    Welcome back
                  </h3>
                  <p class="mb-0">Enter your email and password to sign in</p>
                </div>
                <div class="card-body">
                  <form>
                    <label>Account</label>
                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email"
                        aria-label="Email"
                        v-model="userInputs.account"
                        @keyup.enter="login"
                      />
                    </div>
                    <label>Password</label>
                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Password"
                        aria-label="Password"
                        v-model="userInputs.password"
                        @keyup.enter="login"
                      />
                    </div>
                    <div class="text-center">
                      <button
                        type="button"
                        class="btn bg-gradient-info w-100 mt-4 mb-0"
                        @click="login(userInputs)"
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div
                class="oblique position-absolute top-0 h-100 d-md-block d-none me-n8"
              >
                <div
                  class="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
                  :style="{
                    backgroundImage: `url(${curved9})`,
                  }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
  import curved9 from '@/assets/img/curved-images/curved9.jpg';
  import { useUserStore } from '@/stores/users';
  const { userInputs, login } = useUserStore();
</script>

<style scoped></style>
