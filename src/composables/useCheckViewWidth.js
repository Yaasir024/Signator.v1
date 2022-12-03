import { onBeforeUnmount, onMounted } from "vue";

export function checkViewWidth(targetWidth) {
  let result = null;
  //   const checkScreen = () => {
  //     if (window.innerWidth <= targetWidth) {
  //       result = true;
  //       //   return true;
  //     } else {
  //       result = false;
  //       //   return false;
  //     }
  //   };
  const checkScreen = () => {
    if (window.innerWidth <= targetWidth) {
      //   result = true;
      return true;
    } else {
      //   result = false;
      return false;
    }
  };
  

  if (window.innerWidth <= targetWidth) {
    //   result = true;
    return true;
  } else {
    //   result = false;
    return false;
  }

  onMounted(() => {
    window.addEventListener("resize", checkScreen);
  });
}
