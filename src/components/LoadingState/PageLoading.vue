<script setup>
import Loader from "@/components/LoadingState/Loader1.vue";
const reloadPage = () => {

}
</script>

<template>
    <div class="pt-14">
        <div class="flex flex-col items-center justify-center">
            <Loader />
            <div class="text-center text-lg font-medium">
                <h1 class="">Please Wait..</h1>
                <h1 class="">It'll just take a moment</h1>
                <div class="" v-if="false">
                    <span class="text-primary-color cursor-pointer">Reload Page</span>
                </div>
            </div>
        </div>
    </div>
</template>