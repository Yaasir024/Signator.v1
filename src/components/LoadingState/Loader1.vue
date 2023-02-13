<template>
    
  <div class="">
    <div class="spinner">
    <div class="spinner-item"></div>
    <div class="spinner-item"></div>
    <div class="spinner-item"></div>
    <div class="spinner-item"></div>
    <div class="spinner-item"></div>
  </div>
  </div>
</template>

<style scoped>
:root {
  --size: 75px;
  --clr-bg: #272324;
  --clr1: #87ceeb;
  --clr2: #87ceeb;
  --clr3: #87ceeb;
  --clr4: #87ceeb;
  --clr5: #87ceeb;
}

.spinner {
  --animation-duration: 1000ms;
  width: 75px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
}
.spinner .spinner-item {
  height: 40%;
  background-color: #87ceeb;
  width: calc(75px / 13);
  animation: spinner5 var(--animation-duration) ease-in-out infinite;
}
@keyframes spinner5 {
  25% {
    transform: scaleY(2);
  }
  50% {
    transform: scaleY(1);
  }
}
.spinner .spinner-item:nth-child(1) {
  --clr-spinner: #87ceeb;
}
.spinner .spinner-item:nth-child(2) {
  --clr-spinner: #87ceeb;
  animation-delay: calc(var(--animation-duration) / 10);
}
.spinner .spinner-item:nth-child(3) {
  --clr-spinner: #87ceeb;
  animation-delay: calc(var(--animation-duration) / 10 * 2);
}
.spinner .spinner-item:nth-child(4) {
  --clr-spinner: #87ceeb;
  animation-delay: calc(var(--animation-duration) / 10 * 3);
}
.spinner .spinner-item:nth-child(5) {
  --clr-spinner: #87ceeb;
  animation-delay: calc(var(--animation-duration) / 10 * 4);
}
</style>
