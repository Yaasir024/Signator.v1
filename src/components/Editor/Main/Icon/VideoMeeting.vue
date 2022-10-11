<script setup>
    const props = defineProps(['type', 'text'])
</script>

<template>
  <div style="display: inline-block" v-if="type == 'zoom'">
    <div
      style="
        background: #2d8cff;
        display: flex;
        align-items: center;
        padding: 8px 12px;
        color: #ffffff;
        cursor: pointer;
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#ffffff"
        viewBox="0 0 24 24"
      >
        <path
          d="M16 18c0 1.104-.896 2-2 2h-12c-1.105 0-2-.896-2-2v-12c0-1.104.895-2 2-2h12c1.104 0 2 .896 2 2v12zm8-14l-6 6.223v3.554l6 6.223v-16z"
        />
      </svg>
      <span style="margin-left: 8px">{{text}}</span>
    </div>
  </div>
  <div style="display: inline-block" v-if="type == 'google-meet'">
    <div
      style="
        background: #00ac47;
        display: flex;
        align-items: center;
        padding: 8px 12px;
        color: #ffffff;
        cursor: pointer;
      "
    >
      <svg
        fill="#ffffff"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="16"
        height="16"
      >
        <path
          d="M2 18L2 32 12 32 12 18zM39 9v4.31l-10 9V16H14V6h22C37.66 6 39 7.34 39 9zM29 27.69l10 9V41c0 1.66-1.34 3-3 3H14V34h15V27.69zM12 34v10H5c-1.657 0-3-1.343-3-3v-7H12zM12 6L12 16 2 16zM29 25L39 16 39 34zM49 9.25v31.5c0 .87-1.03 1.33-1.67.75L41 35.8V14.2l6.33-5.7C47.97 7.92 49 8.38 49 9.25z"
        />
      </svg>
      <span style="margin-left: 8px">{{text}}</span>
    </div>
  </div>
  <div style="display: inline-block" v-if="type == 'skype'">
    <div
      style="
        background: #00aff0;
        display: flex;
        align-items: center;
        padding: 8px 12px;
        color: #ffffff;
        cursor: pointer;
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        width="16"
        height="16"
        fill="#ffffff"
      >
        <path
          d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z"
        />
      </svg>
      <span style="margin-left: 8px">{{text}}</span>
    </div>
  </div>
</template>
