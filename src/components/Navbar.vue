<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <nav
          class="navbar navbar-expand-lg blur blur-rounded top-0 z-index-fixed shadow position-absolute my-3 py-2 start-0 end-0 mx-4"
        >
          <div class="container-fluid px-0">
            <router-link
              class="navbar-brand font-weight-bolder ms-sm-3"
              rel="tooltip"
              title="Designed and Coded by Creative Tim"
              data-placement="bottom"
              to="/"
              >Konstructor</router-link
            >
            <button
              class="navbar-toggler shadow-none ms-md-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navigation"
              aria-controls="navigation"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon mt-2">
                <span class="navbar-toggler-bar bar1"></span>
                <span class="navbar-toggler-bar bar2"></span>
                <span class="navbar-toggler-bar bar3"></span>
              </span>
            </button>
            <div
              class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0"
              id="navigation"
            >
              <ul class="navbar-nav navbar-nav-hover mx-auto">
                <router-link
                  role="button"
                  class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                  id="dropdownMenuPages"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  tag="li"
                  to="/"
                  exact
                >
                  Home
                </router-link>
                <li class="nav-item dropdown dropdown-hover mx-2">
                  <a
                    role="button"
                    class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                    :class="{
                      'router-link-active': submenuIsActive('/tools'),
                    }"
                    id="dropdownMenuPages"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Tools
                    <img
                      src="@/assets/img/down-arrow-dark.svg"
                      alt="down-arrow"
                      class="arrow ms-1"
                    />
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-animation p-3 border-radius-xl mt-0 mt-lg-3"
                    aria-labelledby="dropdownMenuPages"
                  >
                    <div class="row d-none d-lg-block">
                      <div class="col-12 px-4 py-2">
                        <router-link
                          v-for="menu in tools"
                          :key="menu.name"
                          :to="`/tools/${menu.name}`"
                          class="dropdown-item border-radius-md"
                          ><span>{{ menu.title }}</span>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item dropdown dropdown-hover mx-2">
                  <a
                    role="button"
                    class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                    :class="{
                      'router-link-active': submenuIsActive('/packages'),
                    }"
                    id="dropdownMenuPages"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    NPM Packages
                    <img
                      src="@/assets/img/down-arrow-dark.svg"
                      alt="down-arrow"
                      class="arrow ms-1"
                    />
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-animation p-3 border-radius-xl mt-0 mt-lg-3"
                    aria-labelledby="dropdownMenuPages"
                  >
                    <div class="row d-none d-lg-block">
                      <div class="col-12 px-4 py-2">
                        <router-link
                          v-for="menu in packages"
                          :key="menu.name"
                          :to="`/packages/${menu.name}`"
                          class="dropdown-item border-radius-md"
                          ><span>{{ menu.title }}</span>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </li>

                <li class="nav-item dropdown dropdown-hover mx-2">
                  <a
                    role="button"
                    class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                    :class="{
                      'router-link-active': submenuIsActive('/account'),
                    }"
                    id="dropdownMenuPages"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Account
                    <img
                      src="@/assets/img/down-arrow-dark.svg"
                      alt="down-arrow"
                      class="arrow ms-1"
                    />
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-animation p-3 border-radius-xl mt-0 mt-lg-3"
                    aria-labelledby="dropdownMenuPages"
                  >
                    <div class="row d-none d-lg-block">
                      <div class="col-12 px-4 py-2">
                        <router-link
                          v-for="menu in account"
                          v-on="menu.name === 'logout' ? { click: logout } : {}"
                          :key="menu.name"
                          :to="`/account/${menu.name}`"
                          :class="{ 'text-danger': menu.name === 'logout' }"
                          class="dropdown-item border-radius-md"
                          ><span>{{ menu.title }}</span>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <!-- End Navbar -->
      </div>
    </div>
  </div>
</template>

<script setup>
  import { tools, packages, account } from '@/const/menus';
  import { useRoute } from 'vue-router';
  import { useUserStore } from '@/stores/users';
  const { logout } = useUserStore();
  const route = useRoute();

  const submenuIsActive = (input) => {
    const paths = Array.isArray(input) ? input : [input];
    return paths.some((path) => {
      return route.path.indexOf(path) === 0; // current path starts with this path string
    });
  };
</script>

<style scoped lang="scss">
  .navbar {
    .router-link-active {
      color: #17c1e8;
      &.navbar-brand {
        color: #344767;
      }
    }
  }
</style>
