<script>
import { getSliceComponentProps, PrismicText, PrismicRichText } from "@prismicio/vue";
import {htmlSerializer} from "@/services/htmlSerializer"
export default {
    props: getSliceComponentProps()
}
</script>

<template>
    <figure>
        <PrismicRichText :field="slice.primary.content" :html-serializer="htmlSerializer"/>
        <!-- {{slice.primary.content}} -->
    </figure>
</template>