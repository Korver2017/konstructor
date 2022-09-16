<template>
  <!-- -------- START HEADER 2 w/ waves and typed text ------- -->
  <header class="position-relative">
    <div
      class="page-header min-vh-100"
      :style="{ backgroundImage: `url(${cover})` }"
    >
      <span class="mask bg-gradient-secondary"></span>
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-start">
            <h1 class="time-text text-white text-center my-4">
              {{ time }}
              <span class="text-white" id="typed"></span>
            </h1>
            <h1 class="text-white display-4 greeting">{{ greeting }}</h1>

            <figure>
              <blockquote class="blockquote">
                <p class="text-white text-start pe-5 ps-3 my-4 display-6">
                  {{ quote.data.content }}
                </p>
              </blockquote>
              <figcaption class="blockquote-footer text-white display-6">
                {{ quote.data.author }}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
    <div class="position-absolute w-100 z-index-1 bottom-0">
      <svg
        class="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 40"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g class="moving-waves">
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="-1"
            fill="rgba(251,251,251,0.40"
          />
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(251,251,251,0.35)"
          />
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(251,251,251,0.25)"
          />
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="8"
            fill="rgba(251,251,251,0.20)"
          />
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="13"
            fill="rgba(251,251,251,0.15)"
          />
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="16"
            fill="rgba(251,251,251,0.95"
          />
        </g>
      </svg>
    </div>
  </header>
  <!-- -------- END HEADER 2 w/ waves and typed text ------- -->
</template>

<script setup>
  import cover_1 from '@/assets/img/meeting.jpg';
  import cover_2 from '@/assets/img/annie-spratt.jpg';
  import cover_3 from '@/assets/img/card-3.jpg';
  import cover_4 from '@/assets/img/mimi-thian.jpg';
  import { useUserStore } from '@/stores/users';
  import { useUtilStore } from '@/stores/utils';
  import { apiGetRandomQuote } from '@/api/quoteLoader';
  import dayjs from 'dayjs';
  const { user } = storeToRefs(useUserStore());
  const { mountLoading, unmountLoading } = useUtilStore();

  const covers = [cover_1, cover_2, cover_3, cover_4];
  const cover = ref('');
  const num = Math.floor(Math.random() * 10);
  const idx = num % covers.length;
  cover.value = covers[idx];

  const greetTexts = ['Hello'];
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
    greeting.value = `${greetTexts[idx]}, ${user.value.data.name}`;
  };

  const time = ref('');
  const getCurrentTime = () => (time.value = dayjs().format('HH:mm'));

  // Update the time every 5 seconds.
  const timer = setInterval(() => {
    getCurrentTime();
  }, 5000);

  const quote = reactive({ data: {} });
  const getQuote = async () => {
    mountLoading();

    try {
      const result = await apiGetRandomQuote();
      quote.data = result.data;
    } catch (error) {
      console.log(error);
    }

    unmountLoading();
  };

  onMounted(() => {
    getCurrentTime();
    greet();
    getQuote();
  });

  onUnmounted(() => {
    clearInterval(timer);
  });
</script>

<style scoped lang="scss">
  .time-text {
    font-size: calc(3rem + 4.5vw);
    font-weight: 300;
    line-height: 1.2;
  }
  .greeting {
    font-size: calc(1rem + 2.7vw);
  }
  .blockquote {
    border-left: 5px solid #fff;
    p {
      font-size: calc(0.75rem + 1.5vw);
    }
    &-footer {
      font-size: calc(1.5vw);
    }
  }
</style>
