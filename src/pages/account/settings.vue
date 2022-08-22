<template>
  <section class="py-7 bg-gray-100 position-relative">
    <div class="container">
      <div class="row mt-3">
        <div class="col-lg-6 mx-auto text-center">
          <h2>Account Settings</h2>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-lg-10 mx-auto">
          <div class="card">
            <div class="row">
              <div class="col-lg-5 d-flex">
                <div class="bg-gradient-dark my-lg-3 ms-lg-3 border-radius-md">
                  <img
                    src="@/assets/img/shapes/waves-white.svg"
                    alt="pattern-lines"
                    class="position-absolute start-0 top-0 h-100 opacity-6"
                  />
                  <div class="card-body p-5 position-relative">
                    <h3 class="text-white">Contact Information</h3>
                    <p class="text-white opacity-8 mb-4">
                      Fill up the form and our Team will get back to you within
                      24 hours.
                    </p>
                    <div class="d-flex p-2 text-white">
                      <div>
                        <i class="fas fa-phone text-sm"></i>
                      </div>
                      <div class="ps-3">
                        <span class="text-sm opacity-8">(+40) 772 100 200</span>
                      </div>
                    </div>
                    <div class="d-flex p-2 text-white">
                      <div>
                        <i class="fas fa-envelope text-sm"></i>
                      </div>
                      <div class="ps-3">
                        <span class="text-sm opacity-8"
                          >hello@creative-tim.com</span
                        >
                      </div>
                    </div>
                    <div class="d-flex p-2 text-white">
                      <div>
                        <i class="fas fa-map-marker-alt text-sm"></i>
                      </div>
                      <div class="ps-3">
                        <span class="text-sm opacity-8"
                          >730 Dyonisie Wolf <br />
                          Bucharest, RO 010458</span
                        >
                      </div>
                    </div>
                    <div class="mt-4">
                      <button
                        type="button"
                        class="btn btn-icon-only btn-link text-white btn-lg mb-0"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Log in with Facebook"
                      >
                        <i class="fab fa-facebook"></i>
                      </button>
                      <button
                        type="button"
                        class="btn btn-icon-only btn-link text-white btn-lg mb-0"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Log in with Twitter"
                      >
                        <i class="fab fa-twitter"></i>
                      </button>
                      <button
                        type="button"
                        class="btn btn-icon-only btn-link text-white btn-lg mb-0"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Log in with Dribbble"
                      >
                        <i class="fab fa-dribbble"></i>
                      </button>
                      <button
                        type="button"
                        class="btn btn-icon-only btn-link text-white btn-lg mb-0"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Log in with Instagram"
                      >
                        <i class="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-7">
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
                      <div class="col-md-12 ps-2">
                        <label>User name</label>
                        <div class="input-group mb-4">
                          <input
                            type="text"
                            class="form-control"
                            placeholder=""
                            aria-label=""
                            v-model="updatedUser.name"
                          />
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
                        @click="updateUserInfo(updatedUser)"
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

  <Toast />
</template>

<script setup>
  import roles from '@/const/roles';
  import { useUserStore } from '@/stores/users';
  const userStore = useUserStore();
  const { user, updateUserInfo } = userStore;
  const updatedUser = reactive({ ...user.data });
</script>

<style scoped></style>
