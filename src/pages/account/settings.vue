<template>
  <section class="py-7 bg-gray-100 position-relative">
    <div class="container">
      <div class="row mt-3">
        <div class="col-lg-6 mx-auto text-center">
          <h2>Account Settings</h2>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-lg-8 mx-auto">
          <div class="card">
            <div class="row">
              <div class="col-lg-6 d-flex">
                <div
                  class="bg-gradient-dark my-lg-3 ms-lg-3 border-radius-md w-95"
                >
                  <img
                    src="@/assets/img/shapes/waves-white.svg"
                    alt="pattern-lines"
                    class="position-absolute start-0 top-0 h-100 opacity-6"
                  />
                  <div class="card-body p-5 position-relative">
                    <h3 class="text-white">{{ user.data.name }}</h3>
                    <h5 class="opacity-8 text-white lead">
                      {{ user.data.account }}
                    </h5>
                    <h5 class="opacity-8 text-white lead text-capitalize">
                      Role: {{ user.data.role }}
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <form id="contact-form" method="post" autocomplete="off">
                  <div class="card-body position-relative p-3 ps-0">
                    <div class="row mt-4">
                      <div class="col-md-12">
                        <label>Account</label>
                        <div class="input-group mb-4">
                          <input
                            class="form-control"
                            placeholder=""
                            aria-label="First Name..."
                            type="email"
                            v-model="updatedUser.account"
                            disabled
                          />
                        </div>
                      </div>
                      <div class="col-md-12 ps-2 mb-4">
                        <label>User name</label>
                        <div class="input-group">
                          <input
                            @blur="v$.name.$touch"
                            v-model="updatedUser.name"
                            type="text"
                            class="form-control"
                            :class="{
                              'border-danger':
                                v$.name.$dirty && v$.name.$invalid,
                            }"
                            placeholder=""
                            aria-label=""
                          />
                        </div>
                        <div
                          class="input-errors"
                          v-for="error of v$.name.$errors"
                          :key="error.$uid"
                        >
                          <div class="error-msg text-danger">
                            {{ error.$message }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <label>Role</label>
                    <div class="d-flex">
                      <div>
                        <div
                          class="form-check me-3"
                          v-for="role in roles"
                          :id="role.id"
                        >
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            :id="role.role"
                            :checked="role.role === updatedUser.role"
                            :value="role.role"
                            v-model="updatedUser.role"
                          />
                          <label class="form-check-label" :for="role.role">
                            {{ role.title }}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="text-start mt-3">
                      <button
                        @click="updateUserInfo(v$.$invalid, updatedUser)"
                        type="button"
                        class="btn bg-gradient-dark mb-0"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Toast component -->
  <Toast />
</template>

<script setup>
  import roles from '@/const/roles';
  import useVuelidate from '@vuelidate/core';
  import { required } from '@vuelidate/validators';
  import { useUserStore } from '@/stores/users';
  const { user, updateUserInfo } = useUserStore();
  const updatedUser = reactive({ ...user.data });
  const rules = {
    role: { required },
    name: { required },
  };
  const v$ = useVuelidate(rules, updatedUser);
</script>

<style scoped></style>
