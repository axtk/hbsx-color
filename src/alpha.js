const setAlpha = require('color-alpha');
const rgba = require('color-rgba');

module.exports = (color, alpha) => {
	return typeof alpha === 'number' ? setAlpha(color, alpha) : rgba(color).pop();
};