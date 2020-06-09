<?php
/**
 * Plugin Name: ParalaxPlus
 * Description: Plugin to add paralax to tcd_056
 * Version: 2.0.0
 * Author: Kai Ono
 * License: GPL-3.0-or-later
 * License URI:  https://www.gnu.org/licenses/rms-why-gplv3.html
 * Text Domain:  paralax-plus
 * Domain Path:  paralax-plus
 */

defined( 'ABSPATH' ) || die();

$version = get_file_data( __FILE__, array( 'version' => 'Version' ) );

add_action('wp_enqueue_scripts', function(){

    wp_enqueue_style( 'paralax-css', plugin_dir_url( __FILE__ ) . 'src/css/paralax.css', [], $version['version'] ); 
    wp_enqueue_script( 'paralax-js', plugin_dir_url( __FILE__ ) . 'src/js/paralax.js', ['jquery'], $version['version'], true );

});