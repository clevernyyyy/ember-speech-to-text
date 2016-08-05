module.exports = {
  description: 'A simple select menu.',

  normalizeEntityName: function() {
    // This override is needed to prevent the command `ember g ui-common` from
    // throwing an error.  The CLI normally expects the format
    // `ember g <entitiyName> <blueprint>`.
  },

  afterInstall: function(options) {}
};
