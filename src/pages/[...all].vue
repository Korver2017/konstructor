<template>
  <section class="my-10">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 my-auto">
          <h1 class="display-1 text-bolder text-gradient text-danger">
            Error 404
          </h1>
          <h2>Sorry... Page not found</h2>
          <p class="lead">
            We suggest you to go to the homepage while we solve this issue.
          </p>
          <router-link
            type="button"
            class="btn bg-gradient-warning mt-4"
            to="/"
          >
            Back to Konstructor
          </router-link>
        </div>
        <div class="col-lg-6 my-auto position-relative">
          <img
            class="w-100 position-relative"
            src="@/assets/img/illustrations/error-404.png"
            alt="404-error"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>
