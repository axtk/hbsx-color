const rgba = require('color-rgba');
const luminance = require('color-luminance');

const {
	HBSX_COLOR_CONTRAST_THRESHOLD,
	HBSX_COLOR_LUMINANCE_STANDARD,
} = {...require('../env'), ...process.env};

module.exports = (color, {
	hash: {
		threshold = HBSX_COLOR_CONTRAST_THRESHOLD,
		standard = HBSX_COLOR_LUMINANCE_STANDARD,
	},
}) => luminance[standard](rgba(color).slice(0, 3)) < threshold;