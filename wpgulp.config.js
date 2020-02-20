/**
 * WPGulp Configuration File
 *
 * 1. Edit the variables as per your project requirements.
 * 2. In paths you can add <<glob or array of globs>>.
 *
 * @package WPGulp
 */
module.exports = {

	// Project options.
	browserAutoOpen: true,
	injectChanges: true,

	// Style options.
	styleSRC: './src/scss/index.scss', // Path to main .scss file.
	styleDestination: './dist/css/', // Path to place the compiled CSS file. Default set to root folder.
	outputStyle: 'compressed', // Available options → 'compact' or 'compressed' or 'nested' or 'expanded'
	errLogToConsole: true,
	precision: 10,

	// JS Vendor options.
	jsVendorSRC: './src/js/vendor/*.js', // Path to JS vendor folder.
	jsVendorDestination: './dist/js/', // Path to place the compiled JS vendors file.
	jsVendorFile: 'vendor', // Compiled JS vendors file name. Default set to vendors i.e. vendors.js.

	// JS Custom options.
	jsCustomSRC: './src/js/*.js', // Path to JS custom scripts folder.
	jsCustomDestination: './dist/js/', // Path to place the compiled JS custom scripts file.
	jsCustomFile: 'index', // Compiled JS custom file name. Default set to custom i.e. custom.js.

	// Images options.
	imgSRC: './src/img/**/*', // Source folder of images which should be optimized and watched. You can also specify types e.g. raw/**.{png,jpg,gif} in the glob.
	imgDST: './dist/img/', // Destination folder of optimized images. Must be different from the imagesSRC folder.

	// Images options.
	htmlSRC: './html/*.html', // Source folder of html pages
	htmlSRCAll: './html/**/**/*.html', // Source folder of all html files
	htmlDST: './', // Destination folder of concatenated html files

	// Watch files paths.
	watchStyles: './src/scss/**/*.scss', // Path to all *.scss files inside css folder and inside them.
	watchJsVendor: './src/js/vendor/*.js', // Path to all vendor JS files.
	watchJsCustom: './src/js/*.js', // Path to all custom JS files.
	watchHTML: './**/*.html', // Path to all HTML files.

	// Browsers you care about for autoprefixing. Browserlist https://github.com/ai/browserslist
	// The following list is set as per WordPress requirements. Though, Feel free to change.
	BROWSERS_LIST: [
		'last 2 version',
		'> 1%',
		'ie >= 11',
		'last 1 Android versions',
		'last 1 ChromeAndroid versions',
		'last 2 Chrome versions',
		'last 2 Firefox versions',
		'last 2 Safari versions',
		'last 2 iOS versions',
		'last 2 Edge versions',
		'last 2 Opera versions'
	]
};
