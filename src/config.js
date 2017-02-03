var config = {};


if (PRODUCTION === true) {
	config.imagePath = '/wp-content/themes/twentyseventeen/src/common/images/';
	
} else {
	config.imagePath = '/src/common/images/';
}

module.exports = config;