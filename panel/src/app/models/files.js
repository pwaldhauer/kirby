export default (Vue, store) => ({
  breadcrumb(file, route) {
    let parent = null;
    let breadcrumb = [];

    switch (route) {
      case "UserFile":
        breadcrumb.push({
          label: file.parent.username,
          link: Vue.$model.users.link(file.parent.id)
        });
        parent = 'users/' + file.parent.id;
        break;
      case "SiteFile":
        parent = "site";
        break;
      case "PageFile":
        breadcrumb = file.parents.map(parent => ({
          label: parent.title,
          link: this.link(parent.id)
        }));
        parent = this.url(file.parent.id);
        break;
    }

    breadcrumb.push({
      label: file.filename,
      link: this.link(parent, file.filename)
    });

    return breadcrumb;
  },
  async changeName(parent, filename, name) {
    const file = await Vue.$api.files.changeName(parent, filename, name);

    // move in content store
    await store.dispatch("content/move", [
      "files/" + this.id(parent, filename),
      "files/" + this.id(parent, file.filename)
    ]);

    this.onUpdate("changeName", file);
    return file;
  },
  async delete(parent, filename) {
    const id = this.id(parent, filename);

    // send API request to delete file
    await Vue.$api.files.delete(parent, filename);

    // remove data from content store
    await store.dispatch("content/remove", "files/" + id);

    this.onUpdate("delete", id);
  },
  id(parent, filename) {
    return parent + "/" + filename;
  },
  link(parent, filename, path) {
    return "/" + this.url(parent, filename, path);
  },
  onUpdate(event, data) {
    Vue.$events.$emit("file." + event, data);
    store.dispatch("notification/success");
  },
  async options(parent, filename, view = "view") {
    const url     = this.url(parent, filename);
    const file    = await Vue.$api.get(url, { select: "options" });
    const options = file.options;
    let result    = [];

    if (view === "list") {
      result.push({
        icon: "open",
        text: Vue.$t("open"),
        click: "download"
      });
    }

    result.push({
      icon: "title",
      text: Vue.$t("rename"),
      click: "rename",
      disabled: !options.changeName
    });

    result.push({
      icon: "upload",
      text: Vue.$t("replace"),
      click: "replace",
      disabled: !options.replace
    });

    result.push({
      icon: "trash",
      text: Vue.$t("delete"),
      click: "remove",
      disabled: !options.delete
    });

    return result;
  },
  url(parent, filename, path) {
    let url = parent + "/files/" + filename;

    if (path) {
      url += "/" + path;
    }

    return url;
  }
});
