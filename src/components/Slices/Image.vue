<script>
import { getSliceComponentProps } from "@prismicio/vue";
export default {
    props: getSliceComponentProps()
}
</script>

<template>
    <figure>
        <PrismicImage :field="slice.primary.image" />
        
    </figure>
</template>