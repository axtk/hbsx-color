const rgba = require('color-rgba');
const luminance = require('color-luminance');
const {HBSX_COLOR_LUMINANCE_STANDARD} = {...require('../env'), ...process.env};

module.exports = (color, standard = HBSX_COLOR_LUMINANCE_STANDARD) => {
	return luminance[standard](rgba(color).slice(0, 3));
};