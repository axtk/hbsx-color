const rgba = require('color-rgba');
const luminance = require('color-luminance');
const setAlpha = require('color-alpha');

const {
	HBSX_COLOR_CONTRAST_THRESHOLD,
	HBSX_COLOR_CONTRAST_LIGHT,
	HBSX_COLOR_CONTRAST_DARK,
	HBSX_COLOR_LUMINANCE_STANDARD,
} = {...require('../env'), ...process.env};

module.exports = (color, {
	hash: {
		threshold = HBSX_COLOR_CONTRAST_THRESHOLD,
		light = HBSX_COLOR_CONTRAST_LIGHT,
		dark = HBSX_COLOR_CONTRAST_DARK,
		standard = HBSX_COLOR_LUMINANCE_STANDARD,
	},
}) => {
	let [r, g, b, alpha] = rgba(color);
	let lum = luminance[standard](r, g, b);
	let contrastColor = lum < threshold ? light : dark;

    return alpha < 1 ? setAlpha(contrastColor, alpha) : contrastColor;
};