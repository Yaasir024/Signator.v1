<template>
  <div class="loader loader3">
    <div class="spinner">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <svg>
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 50 -8"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
.loader3 {
  position: relative;
  height: 80px;
  width: 80px;
  filter: url("#goo");
}
.loader3 .spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.loader3 .spinner:after {
  content: "";
  background: #87ceeb;
  border-radius: 50%;
  height: 24px;
  width: 24px;
  position: absolute;
  top: 0;
  left: 0;
}
.loader3 .spinner span {
  height: 24px;
  width: 24px;
  position: absolute;
  top: 0;
  left: 0;
}
.loader3 .spinner span:nth-of-type(1) {
  transform: translateX(-100%) translateY(0) rotate(-90deg);
}
.loader3 .spinner span:nth-of-type(2) {
  transform: translateX(-70%) translateY(-70%) rotate(-45deg);
}
.loader3 .spinner span:nth-of-type(3) {
  transform: translateX(0) translateY(-100%) rotate(0);
}
.loader3 .spinner span:nth-of-type(4) {
  transform: translateX(70%) translateY(-70%) rotate(45deg);
}
.loader3 .spinner span:nth-of-type(5) {
  transform: translateX(100%) translateY(0) rotate(90deg);
}
.loader3 .spinner span:nth-of-type(6) {
  transform: translateX(70%) translateY(70%) rotate(135deg);
}
.loader3 .spinner span:nth-of-type(7) {
  transform: translateX(0) translateY(100%) rotate(180deg);
}
.loader3 .spinner span:nth-of-type(8) {
  transform: translateX(-70%) translateY(70%) rotate(-135deg);
}
.loader3 .spinner span:nth-of-type(1):after {
  -webkit-animation-delay: 0;
  animation-delay: 0;
}
.loader3 .spinner span:nth-of-type(2):after {
  -webkit-animation-delay: 375ms;
  animation-delay: 375ms;
}
.loader3 .spinner span:nth-of-type(3):after {
  -webkit-animation-delay: 750ms;
  animation-delay: 750ms;
}
.loader3 .spinner span:nth-of-type(4):after {
  -webkit-animation-delay: 1125ms;
  animation-delay: 1125ms;
}
.loader3 .spinner span:nth-of-type(5):after {
  -webkit-animation-delay: 1500ms;
  animation-delay: 1500ms;
}
.loader3 .spinner span:nth-of-type(6):after {
  -webkit-animation-delay: 1875ms;
  animation-delay: 1875ms;
}
.loader3 .spinner span:nth-of-type(7):after {
  -webkit-animation-delay: 2250ms;
  animation-delay: 2250ms;
}
.loader3 .spinner span:nth-of-type(8):after {
  -webkit-animation-delay: 2625ms;
  animation-delay: 2625ms;
}
.loader3 .spinner span:nth-of-type(1):before {
  -webkit-animation-delay: 0ms;
  animation-delay: 0ms;
}
.loader3 .spinner span:nth-of-type(2):before {
  -webkit-animation-delay: 375ms;
  animation-delay: 375ms;
}
.loader3 .spinner span:nth-of-type(3):before {
  -webkit-animation-delay: 750ms;
  animation-delay: 750ms;
}
.loader3 .spinner span:nth-of-type(4):before {
  -webkit-animation-delay: 1125ms;
  animation-delay: 1125ms;
}
.loader3 .spinner span:nth-of-type(5):before {
  -webkit-animation-delay: 1500ms;
  animation-delay: 1500ms;
}
.loader3 .spinner span:nth-of-type(6):before {
  -webkit-animation-delay: 1875ms;
  animation-delay: 1875ms;
}
.loader3 .spinner span:nth-of-type(7):before {
  -webkit-animation-delay: 2250ms;
  animation-delay: 2250ms;
}
.loader3 .spinner span:nth-of-type(8):before {
  -webkit-animation-delay: 2625ms;
  animation-delay: 2625ms;
}
.loader3 .spinner span:after {
  content: "";
  background: #87ceeb;
  height: 13px;
  width: 13px;
  position: absolute;
  top: 9px;
  left: 9px;
  transform: translateX(0) translateY(0);
  border-radius: 50%;
  -webkit-animation: move 3s linear infinite;
  animation: move 3s linear infinite;
}
.loader3 .spinner span:before {
  content: "";
  background: #87ceeb;
  height: 10px;
  width: 10px;
  position: absolute;
  top: 8px;
  left: 8px;
  transform: translateX(0) translateY(0);
  border-radius: 50%;
  -webkit-animation: move2 3s linear infinite;
  animation: move2 3s linear infinite;
}
@-webkit-keyframes move {
  0% {
    transform: translateX(0) translateY(0);
  }
  10% {
    transform: translateX(0) translateY(-350%);
  }
  15% {
    transform: translateX(0) translateY(-400%);
  }
  17% {
    transform: translateX(0) translateY(-400%);
  }
  20% {
    transform: translateX(0) translateY(-350%);
  }
  23% {
    transform: translateX(0) translateY(0);
  }
  100% {
    transform: translateX(0) translateY(0);
  }
}
@keyframes move {
  0% {
    transform: translateX(0) translateY(0);
  }
  10% {
    transform: translateX(0) translateY(-350%);
  }
  15% {
    transform: translateX(0) translateY(-400%);
  }
  17% {
    transform: translateX(0) translateY(-400%);
  }
  20% {
    transform: translateX(0) translateY(-350%);
  }
  23% {
    transform: translateX(0) translateY(0);
  }
  100% {
    transform: translateX(0) translateY(0);
  }
}
@-webkit-keyframes move2 {
  0% {
    transform: translateX(0) translateY(0);
  }
  10% {
    transform: translateX(0) translateY(-370%);
  }
  15% {
    transform: translateX(0) translateY(-530%);
  }
  17% {
    transform: translateX(0) translateY(-530%);
  }
  20% {
    transform: translateX(0) translateY(-450%);
  }
  23% {
    transform: translateX(0) translateY(-150%);
  }
  26% {
    transform: translateX(0) translateY(0);
  }
  100% {
    transform: translateX(0) translateY(0);
  }
}
@keyframes move2 {
  0% {
    transform: translateX(0) translateY(0);
  }
  10% {
    transform: translateX(0) translateY(-370%);
  }
  15% {
    transform: translateX(0) translateY(-530%);
  }
  17% {
    transform: translateX(0) translateY(-530%);
  }
  20% {
    transform: translateX(0) translateY(-450%);
  }
  23% {
    transform: translateX(0) translateY(-150%);
  }
  26% {
    transform: translateX(0) translateY(0);
  }
  100% {
    transform: translateX(0) translateY(0);
  }
}
</style>
