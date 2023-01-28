<template>
  <div class="overlay"></div>
  <div class="loader"></div>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffffff83;
  backdrop-filter: blur(2px);
  z-index: 600;
}
.loader {
  padding: 30px;
  border: 10px solid #87ceeb;
  box-shadow: 0 0 5px 1px #87ceeb;
  border-right-color: #6bacc6;
  border-radius: 50%;
  animation: rotate 1s infinite linear;
  position: fixed;
  top: 45%;
  left: 45%;
  z-index: 650;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>
