import FileView from "./FileView.vue";

export default {
  title: "App | Views / File",
  component: FileView,
};

const altField = {
  label: "Alternative text",
  type: "text",
};

export const regular = () => ({
  data() {
    return {
      columns: [
        {
          width: "1/1",
          sections: {
            fields: {
              type: "fields",
              fields: {
                alt: altField,
              },
            },
          },
        },
      ],
      file: {
        filename: "free-wheely.jpg",
        height: 900,
        mime: "image/jpeg",
        niceSize: "128 KB",
        orientation: "landscape",
        parent: {
          guid: "pages/photography+animals"
        },
        template: "cover",
        url: "https://source.unsplash.com/user/erondu/1600x900",
        width: 1600,
      },
      options: this.$model.files.dropdown({
        changeName: true,
        replace: true,
        delete: true
      }),
      tabs: [
        { name: "main", label: "Main" },
        { name: "seo", label: "SEO" },
      ],
    };
  },
  computed: {
    isLocked() {
      return false;
    }
  },
  template: `
    <k-file-view
      :columns="columns"
      :is-locked="isLocked"
      :file="file"
      :options="options"
      :tabs="tabs"
      tab="main"
    />
  `
});


export const locked = () => ({
  extends: regular(),
  computed: {
    isLocked() {
      return true;
    }
  }
});
