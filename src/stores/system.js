import { ref, computed, watch, watchEffect } from "vue";
import { defineStore } from "pinia";

export const systemStore = defineStore("system", () => {
  const loadingState = ref(false);
  const toast = ref(false)
  const toastData = ref([
    {
      id: 'dfghf',
      type: 'Error',
      Message: 'User Not Found'
    },
    {
      id: 'dfghewf',
      type: 'Success',
      Message: 'Signature Added Successfully'
    },
    {
      id: 'gedrachf',
      type: 'Default',
      Message: 'Upgrade Now To get new Features'
    },
  ])
  setInterval(() => {
    toastData.value.shift();
    // console.log('Yas')
  }, "3000")

  // watchEffect(async (toastData) => {
  //   await setTimeout(() => {
  //     // toastData.value.shift();
  //     console.log('Yas')
  //   }, "1000")
  //   if(toastData.value) {
  //     await setTimeout(() => {
  //       // toastData.value.shift();
  //       console.log('Yas')
  //     }, "1000")
  //   }
  // })



  return { loadingState, toastData};
});
