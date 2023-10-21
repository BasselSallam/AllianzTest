<?php

define("THEME_DIR", get_template_directory());

define("THEME_DIR_URI", get_template_directory_uri());

define("THEME_SETTINGS_PAGE_ID", get_theme_mod('_themename_settings_page_id'));

require THEME_DIR . '/functions/theme-support.php';

//add old styles of allianz
function allianz_enqueue()
{
    wp_enqueue_style('old-stylesheet', get_template_directory_uri() . '/allianz-old-css/main.min.a6d2ea2cf400c5abeed53934c671ff9b.css', array(), '1.0.0', 'all');
    wp_enqueue_style('old-stylesheet', get_template_directory_uri() . '/allianz-old-css/onetrust_v2.min.5bdd6c33a13b8994641254a907de2f94.css', array(), '1.0.0', 'all');
    wp_enqueue_script('old-scripts', get_stylesheet_directory_uri() . '/allianz-old-js/head.min.3f834d1d00b9dd6164468a4f70837195.js', array(), '1.0.0', true);
    wp_enqueue_script('old-scripts', get_stylesheet_directory_uri() . '/allianz-old-js/ndbx-three-level-nav.min.f02801586a360c507873e1e20ad273a2.js', array(), '1.0.0', true);
    wp_enqueue_script('old-scripts', get_stylesheet_directory_uri() . '/allianz-old-js/main.min.965eccf770492d5fa83d98a4f32cc889.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'allianz_enqueue');
//end of adding styles

function _themename_assets()
{
    wp_deregister_script('jquery');

    if (is_rtl()) {
        wp_enqueue_style('_themename-stylesheet-base', get_stylesheet_directory_uri() . '/dist/assets/css/base-rtl.css', array(), '1.0.0', 'all');
        wp_enqueue_script('_themename-scripts', get_stylesheet_directory_uri() . '/dist/assets/js/bundle-rtl.js', array(), '1.0.0', true);
    } else {
        wp_enqueue_style('_themename-stylesheet-base', get_stylesheet_directory_uri() . '/dist/assets/css/base.css', array(), '1.0.0', 'all');
        wp_enqueue_script('_themename-scripts', get_stylesheet_directory_uri() . '/dist/assets/js/bundle.js', array(), '1.0.0', true);
    }
}

add_action('wp_enqueue_scripts', '_themename_assets');

function myguten_enqueue()
{
    if (is_rtl()) {
        wp_enqueue_style('admin-stylesheet', get_template_directory_uri() . '/dist/assets/css/admin-rtl.css', array(), '1.0.0', 'all');
        wp_enqueue_script('_themename-scripts', get_stylesheet_directory_uri() . '/dist/assets/js/bundle-rtl.js', array(), '1.0.0', true);
    } else {
        wp_enqueue_style('admin-stylesheet', get_template_directory_uri() . '/dist/assets/css/admin.css', array(), '1.0.0', 'all');
        wp_enqueue_script('_themename-scripts', get_stylesheet_directory_uri() . '/dist/assets/js/bundle.js', array(), '1.0.0', true);
    }
}
add_action('enqueue_block_editor_assets', 'myguten_enqueue');

function _themename_functions()
{
    require_once THEME_DIR . '/functions/helpers.php';
    require_once THEME_DIR . '/templates/blocks/blocks.php';
    require_once THEME_DIR . '/functions/meta_fields.php';
    require_once THEME_DIR . '/functions/post_types.php';
}
add_action('after_setup_theme', '_themename_functions');

function register_menu()
{
    register_nav_menus(array(
        'header-menu' => 'Header Menu',
    ));
}
add_action('init', 'register_menu');


function wk_blocks_category($categories)
{

    return array_merge(
        $categories,
        [
            [
                'slug'  => 'wk-blocks',
                'title' => __('WK - Blocks', '_themename-blocks'),
            ],
        ]
    );
};
add_action('block_categories', 'wk_blocks_category', 10, 9);

add_filter('document_title_separator', 'custom_page_title_separator');
function custom_page_title_separator()
{

    return '|';
}

function current_page_url()
{
    global $wp;
    return home_url($wp->request);
}


// TRUNCK STRING TO SHORT THE STRINGS
function trunck_string($str = "", $len = 150, $more = 'true')
{

    if ($str == "") return $str;
    if (is_array($str)) return $str;
    $str = strip_tags($str);
    $str = trim($str);
    // if it's les than the size given, then return it

    if (strlen($str) <= $len) return $str;

    // else get that size of text
    $str = substr($str, 0, $len);
    // backtrack to the end of a word
    if ($str != "") {
        // check to see if there are any spaces left
        if (!substr_count($str, " ")) {
            if ($more == 'true') $str .= "...";
            return $str;
        }
        // backtrack
        while (strlen($str) && ($str[strlen($str) - 1] != " ")) {
            $str = substr($str, 0, -1);
        }
        $str = substr($str, 0, -1);
        if ($more == 'true') $str .= "...";
        if ($more != 'true' and $more != 'false') $str .= $more;
    }
    return $str;
}


// the_content() WITHOUT IMAGES
// GET the_content() BUT EXCLUDE <img> OR <img/> TAGS THEN ECHO the_content()
// And ADD <a>DETAILS</a>
function custom_excerpt($Trunckvalue = null, $post_id = null)
{
    ob_start();
    if ($post_id) {
        echo get_the_content(null, false, $post_id);
    } else {
        the_content();
    }
    $postOutput = preg_replace('/<img[^>]+./', '', ob_get_contents());
    ob_end_clean();
    echo trunck_string($postOutput, $Trunckvalue, true);
}
