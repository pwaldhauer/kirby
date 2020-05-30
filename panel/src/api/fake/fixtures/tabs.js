
export default {
  "pages+note+content": {
    columns: [
      {
        width: "2/3",
        sections: {
          fields: {
            type: "fields",
            fields: {
              text: {
                label: "Text",
                type: "textarea",
                size: "large",
              },
            },
          },
        },
      },
      {
        width: "1/3",
        sections: {
          fields: {
            type: "fields",
            fields: {
              date: {
                label: "Date",
                type: "date",
              },
              tags: {
                label: "Tags",
                type: "tags",
              },
            },
          },
        },
      },
    ],
    icon: "text",
    label: "Content",
    name: "main",
  },
  "pages+note+seo": {
    icon: "search",
    label: "SEO",
    name: "seo",
  },
  "files+image+meta": {
    columns: [
      {
        width: "2/3",
        sections: {
          fields: {
            type: "fields",
            fields: {
              caption: {
                label: "Caption",
                type: "text"
              },
            },
          },
        },
      },
      {
        width: "1/3",
        sections: {
          fields: {
            type: "fields",
            fields: {
              copyright: {
                label: "Copyright",
                type: "text",
              }
            },
          },
        },
      },
    ],
    icon: "image",
    label: "Meta",
    name: "meta",
  },
  "files+image+seo": {
    icon: "search",
    label: "SEO",
    name: "seo",
  },
  "users+admin+profile": {
    columns: [
      {
        width: "1/1",
        sections: {
          fields: {
            type: "fields",
            fields: {
              twitter: {
                label: "Twitter",
                type: "text",
                before: "@"
              },
            },
          },
        },
      }
    ],
    icon: "user",
    label: "Profile",
    name: "profile",
  },
};
