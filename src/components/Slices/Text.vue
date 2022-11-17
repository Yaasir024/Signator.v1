<script>
import {
  getSliceComponentProps,
  PrismicText,
  PrismicRichText,
} from "@prismicio/vue";
// import { htmlSerializer } from "@/services/htmlSerializer.ts";
export default {
  props: getSliceComponentProps(),
  methods: {
    htmlSerializer: function (type, element, text, children) {
      if (type === "label") {
        return `<strong className="${element.data.label}">${children}</strong>`;
      } else if (type === "heading1") {
        return `<h1 class="text-3xl font-bold">${children}</h1>`;
      } else if (type === "paragraph") {
        const transformedChildren = children.replace(
          // https://regex101.com/r/ii0xXo/1
          /`(.*?)`/g,
          '<code class="bg-gray-200 rounded py-px px-1 font-mono">$1</code>'
        );

        return `<p class="text-base">${transformedChildren}</p>`;
      } else if (type === "hyperlink") {
        const linkResolver = (doc) => {
          return doc.url;
          // console.log(doc.url);
        };
        const url = linkResolver(element.data);
        return `<a target="_blank" href="${url}" class="text-primary-color hover:underline">${children}</a>`;
      } else if (type === "list") {
        return `<ul class="list-disc list-inside">${children}</ul>`;
      } else if (type === "oList") {
        return `<ol class="list-decimal list-inside">${children}</ol>`;
      } else if (type === "listItem") {
        return `<li class="list-decimal list-inside">${children}</li>`;
      }
      return null;
    },
  },
};
</script>

<template>
  <figure>
    <PrismicRichText
      :field="slice.primary.content"
      :html-serializer="htmlSerializer"
    />
    <!-- {{slice.primary.content}} -->
  </figure>
</template>

<style scoped>
p {
  font-size: 14px;
}
</style>
