let mix = require('laravel-mix');


mix.babel([
		'src/assets/js/jquery.min.js',
		'src/assets/js/bootstrap.bundle.min.js',
		'src/assets/js/scroll.js'
	],'public/app.js')
	.styles([
		'src/assets/css/bootstrap.min.css',
		'src/assets/css/creative.min.css',
		'src/assets/css/stylepage.css'
	], 'public/app.css')
	.copy(
		'src/assets/img'
	, 'public/img')
	.copy(
		'src/assets/fonts'
	, 'public/fonts');


mix.options({
  clearConsole: false
});