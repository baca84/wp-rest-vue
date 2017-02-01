var config = {};


if (PRODUCTION === true) {
	config.imagePath = '/wp-content/themes/wp-rest-vue/src/common/images/';
	
} else {
	config.imagePath = '/src/common/images/';
}

module.exports = config;