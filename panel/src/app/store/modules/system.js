
export default {
  namespaced: true,
  state: {
    kirbytext: null,
    license: null,
    multilang: null,
    requirements: null,
    site: null,
    status: {
      isReady: false
    },
    title: null,
    update: {},
    version: null
  },
  mutations: {
    SET(state, system) {
      Object.keys(system).forEach(key => {
        if (state.hasOwnProperty(key) === true) {
          state[key] = system[key];
        }
      })
    }
  },
  actions: {
    async load(reload) {
      // TODO: remove in Kirby 3.6
      $deprecated("$store.dispatch('system/load') has been deprecated. Please use `this.$model.system.load()` instead.");
      await this.$model.systen.load(reload);
    },
    register(context, license) {
      context.commit("SET", {
        license: license
      });
    },
    set(context, system) {
      context.commit("SET", system);
    },
    status(context, status) {
      context.commit("SET", {
        status: status
      });
    },
    title(context, title) {
      context.commit("SET", {
        title: title
      });
    },
    update(context, update) {
      update = update === null ? {} : update;

      context.commit("SET", {
        update: update
      });
    }
  }
};
