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
                      @blur="v$.account.$touch"
                      v-model="userInputs.account"
                      type="email"
                      class="form-control"
                      :class="{
                        'border-danger':
                          v$.account.$dirty && v$.account.$invalid,
                      }"
                      placeholder="Email"
                      aria-label="Email"
                    />
                    <div
                      class="input-errors"
                      v-for="error of v$.account.$errors"
                      :key="error.$uid"
                    >
                      <div class="error-msg text-danger">
                        {{ error.$message }}
                      </div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <input
                      @blur="v$.password.$touch"
                      v-model="userInputs.password"
                      type="password"
                      class="form-control"
                      :class="{
                        'border-danger':
                          v$.password.$dirty && v$.password.$invalid,
                      }"
                      placeholder="Password"
                      aria-label="Password"
                    />
                    <div
                      class="input-errors"
                      v-for="error of v$.password.$errors"
                      :key="error.$uid"
                    >
                      <div class="error-msg text-danger">
                        {{ error.$message }}
                      </div>
                    </div>
                  </div>
                  <div class="text-center">
                    <button
                      @click="login(v$.$invalid)"
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
  import useVuelidate from '@vuelidate/core';
  import { required } from '@vuelidate/validators';
  import { useUserStore } from '@/stores/users';
  const { userInputs, login } = useUserStore();
  const rules = {
    account: { required },
    password: { required },
  };
  const v$ = useVuelidate(rules, userInputs);
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
