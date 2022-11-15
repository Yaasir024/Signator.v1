<script>
import { getSliceComponentProps, PrismicText } from "@prismicio/vue";
export default {
    props: getSliceComponentProps()
}
</script>

<template>
    <figure>
        <!-- <PrismicText :field="slice.primary.content" wrapper="p"/> -->
        {{slice}}
    </figure>
</template>