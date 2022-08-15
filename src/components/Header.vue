<template>
  <header>
    <div class="page-header min-vh-75 mt-8">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 my-auto">
            <h1 class="text-gradient text-warning mb-0">
              {{ time }}
            </h1>
            <h1 class="text-gradient text-warning mb-0">
              {{ greeting }}
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
  import dayjs from 'dayjs';
  import { useUserStore } from '@/stores/users';
  const useStore = useUserStore();

  const greetTexts = ['Hello', 'Hi', 'Hey'];
  const dayDurationGreetings = [
    'Good morning',
    'Good afternoon',
    'Good evening',
  ];

  // According to the time of day, return a greeting text to update the `greetTexts`.
  const updateGreetingTexts = () => {
    const dayDuration = dayjs().hour();

    greetTexts[greetTexts.length] =
      dayDuration >= 6 && dayDuration < 12
        ? dayDurationGreetings[0]
        : dayDuration >= 12 && dayDuration < 18
        ? dayDurationGreetings[1]
        : dayDurationGreetings[2];
  };

  const greeting = ref('');

  // Random to show a greeting text.
  const greet = () => {
    updateGreetingTexts();
    const num = Math.floor(Math.random() * 10);
    const idx = num % greetTexts.length;
    greeting.value = `${greetTexts[idx]}, ${useStore.user.data.name}`;
  };

  const time = ref('');
  const getCurrentTime = () => (time.value = dayjs().format('HH:mm'));

  // Update the time every 5 seconds.
  const timer = setInterval(() => {
    getCurrentTime();
  }, 5000);

  onMounted(() => {
    getCurrentTime();
    greet();
  });

  onUnmounted(() => {
    clearInterval(timer);
  });
</script>

<style scoped></style>
