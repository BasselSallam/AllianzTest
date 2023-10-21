<?php

function _themename_theme_support()
{
    add_theme_support('menus');
    // Add default posts and comments RSS feed links to head.
    add_theme_support('automatic-feed-links');

    /*
	* Let WordPress manage the document title.
	* This theme does not use a hard-coded <title> tag in the document head,
	* WordPress will provide it for us.
	*/
    add_theme_support('title-tag');

    /*
        * Enable support for Post Formats.
        *
        * See: https://codex.wordpress.org/Post_Formats
        */
    add_theme_support(
        'post-formats',
        array(
            'aside',
            'image',
            'video',
            'quote',
            'link',
            'gallery',
            'audio',
        )
    );

    /*
	* Enable support for Post Thumbnails on posts and pages.
	*/

    add_theme_support('post-thumbnails');

    /*
	* Switch default core markup for search form, comment form, and comments
	* to output valid HTML5.
	*/
    add_theme_support(
        'html5',
        array(
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
            'style',
            'script',
            'navigation-widgets',
        )
    );

    // Add support for custom logo
    // add_theme_support('custom-logo');

    add_theme_support('editor-color-palette', array(
        array(
            'name' => __('Primary color', '_themename'),
            'slug' => 'primary-color',
            'color' => '#e40521',
        ),
        array(
            'name' => __('Theme dark', '_themename'),
            'slug' => 'theme-dark',
            'color' => '#212121',
        ),
        array(
            'name' => __('Black', '_themename'),
            'slug' => 'black',
            'color' => '#000',
        ),
        array(
            'name' => __('white', '_themename'),
            'slug' => 'white',
            'color' => '#fff',
        ),
    ));


    add_theme_support('align-wide');
}

add_action('after_setup_theme', '_themename_theme_support');
