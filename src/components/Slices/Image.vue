<script>
import { getSliceComponentProps } from "@prismicio/vue";
export default {
    props: getSliceComponentProps()
}
</script>

<template>
    <figure>
        <PrismicImage :field="slice.primary.image" class="max-h-[360px] my-4"/>
        
    </figure>
</template>