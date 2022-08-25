<template>
  <div class="loader-wrap">
    <span class="loader"></span>
  </div>
</template>

<script setup></script>

<style scoped>
  .loader-wrap {
    top: 0;
    bottom: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.95);
    position: fixed;
    z-index: 9999;
  }
  .loader {
    position: absolute !important;
    left: calc(50% - 32px);
    top: calc(50% - 32px);
    width: 96px;
    height: 96px;
    border-radius: 50%;
    position: relative;
    background: rgba(23, 193, 232, 0.75);
    z-index: 9999;
  }
  .loader:before,
  .loader:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 96px;
    height: 96px;
    border-radius: 50%;
    background: rgb(23, 193, 232);
    animation: slide 1s infinite linear alternate;
    opacity: 0.5;
  }
  .loader:after {
    animation: slide2 1s infinite linear alternate;
    opacity: 1;
  }
  @keyframes slide {
    0%,
    20% {
      transform: translate(0, 0);
    }
    80%,
    100% {
      transform: translate(25px, 25px);
    }
  }
  @keyframes slide2 {
    0%,
    20% {
      transform: translate(0, 0);
    }
    80%,
    100% {
      transform: translate(-25px, -25px);
    }
  }
</style>
