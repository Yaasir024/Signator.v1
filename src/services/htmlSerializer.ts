import * as prismicH from "@prismicio/helpers";
// const linkResolver = (doc) => '/' + doc.id
export const htmlSerializer: prismicH.HTMLMapSerializer = {
  heading1: ({ children }) => `<h1 class="text-3xl font-bold">${children}</h1>`,
  heading2: ({ children }) => `<h2>${children}</h2>`,
  heading3: ({ children }) => `<h3>${children}</h3>`,
  heading4: ({ children }) => `<h4>${children}</h4>`,
  heading5: ({ children }) => `<h5>${children}</h5>`,
  heading6: ({ children }) => `<p class="text-xl italic">${children}</p>`,
  paragraph: ({ children }) => {
    const transformedChildren = children.replace(
      // https://regex101.com/r/ii0xXo/1
      /`(.*?)`/g,
      '<code class="bg-gray-200 rounded py-px px-1 font-mono">$1</code>'
    );

    return `<p class="text-base">${transformedChildren}</p>`;
  },
  hyperlink: ({ node, children }) => {
    const linkResolver = (doc) => {
      return doc.url;
      // console.log(doc.url);
    };
    const target = node.data.target
      ? `target="${node.data.target}" rel="noopener"`
      : "";
    const url = linkResolver(node.data);
    // return `<a href="${url}">${children} ${linkResolver(node.data)}</a>`
    return `<a ${target} href="${url}" class="text-primary-color hover:underline">${children}</a>`;
  },
  list: ({ children }) => `<ul class="list-disc list-inside">${children}</ul>`,
  oList: ({ children }) =>
    `<ol class="list-decimal list-inside">${children}</ol>`,
};
