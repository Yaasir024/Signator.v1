import { createPrismic } from "@prismicio/vue";

const prismic = createPrismic({
  endpoint: "https://signator.prismic.io/api/v2",
  clientConfig: {
    defaultParams: {
      routes: [
        {
          type: "home",
          path: "/",
        },
        {
          type: "article",
          path: "/help-center/articles/:uid",
        },
      ],
    },
  },
});

export default prismic;
