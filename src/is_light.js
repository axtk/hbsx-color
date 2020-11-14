const is_dark = require('./is_dark');

module.exports = (color, options) => !is_dark(color, options);