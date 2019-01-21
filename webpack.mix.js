let mix = require('laravel-mix');

mix.scripts([
	'./node_modules/jquery/dist/jquery.js',
	'./spreadsheet.js'
], './public/spreadsheet.js');
