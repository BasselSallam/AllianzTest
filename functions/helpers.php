<?php

function _themename_customization($wp_customize)
{
	$wp_customize->add_section('social_media_section', array('title' => 'Social Media',));
	$wp_customize->add_section('site_contact_info', array('title' => 'Contact Info',));
	$wp_customize->add_setting('facebook', array('default' => '',));
	$wp_customize->add_control(new WP_Customize_Control(
		$wp_customize,
		'facebook_control',
		array(
			'label' => 'Facebook',
			'section' => 'social_media_section',
			'settings' => 'facebook',
		)
	));
	$wp_customize->add_setting('linkedin', array('default' => '',));
	$wp_customize->add_control(new WP_Customize_Control(
		$wp_customize,
		'linkedin_control',
		array(
			'label' => 'Linked In',
			'section' => 'social_media_section',
			'settings' => 'linkedin',
		)
	));
	$wp_customize->add_setting('twitter', array('default' => '',));
	$wp_customize->add_control(new WP_Customize_Control(
		$wp_customize,
		'twitter_control',
		array(
			'label' => 'Twitter',
			'section' => 'social_media_section',
			'settings' => 'twitter',
		)
	));
	$wp_customize->add_setting('instagram', array('default' => '',));
	$wp_customize->add_control(new WP_Customize_Control(
		$wp_customize,
		'instagram_control',
		array(
			'label' => 'Instagram',
			'section' => 'social_media_section',
			'settings' => 'instagram',
		)
	));

	$wp_customize->add_setting('email', array('default' => '',));
	$wp_customize->add_control(new WP_Customize_Control(
		$wp_customize,
		'email_control',
		array(
			'label' => 'Email',
			'section' => 'site_contact_info',
			'settings' => 'email',
		)
	));
	$wp_customize->add_setting('phone', array('default' => '',));
	$wp_customize->add_control(new WP_Customize_Control(
		$wp_customize,
		'phone_control',
		array(
			'label' => 'Phone',
			'section' => 'site_contact_info',
			'settings' => 'phone',
		)
	));
	$wp_customize->add_setting('location', array('default' => '',));
	$wp_customize->add_control(new WP_Customize_Control(
		$wp_customize,
		'location_control',
		array(
			'label' => 'Location',
			'section' => 'site_contact_info',
			'settings' => 'location',
		)
	));

	$wp_customize->add_setting('_themename_settings_page_id', array(
		'capability' => 'edit_theme_options',
		'sanitize_callback' => 'absint',
		'default' => 0,
	));

	$wp_customize->add_control('_themename_settings_page_id', array(
		'type' => 'number',
		'section' => 'title_tagline',
		'label' => __('_themename Settings page'),
		'description' => __('Enter The settings page id here to edit general theme options'),
	));
}
add_action('customize_register', '_themename_customization');

function determine_the_title($echo = true)
{
	$result = '';
	if (is_single()) {
		$post = get_queried_object();
		$postType = get_post_type_object(get_post_type($post));
		if ($postType) {
			$result = esc_html($postType->labels->name);
		} else {
			$result = get_the_title($post);
		}
	} elseif (is_tax()) {
		$postType = get_queried_object();
		$result = esc_html($postType->name);
	} elseif (is_archive()) {
		$postType = get_queried_object();
		$result = esc_html($postType->labels->name);
	} elseif (is_page()) {
		$result = get_the_title();
	}
	if ($echo) {
		echo $result;
	} else {
		return $result;
	}
}

add_action('get_header', 'my_filter_head');

function my_filter_head()
{
	remove_action('wp_head', '_admin_bar_bump_cb');
}

function my_pagination($max_num_of_pages)
{
	$big = 999999999;
	$pagination = paginate_links(array(
		'base' => str_replace($big, '%#%', esc_url(get_pagenum_link($big))),
		'format' => '?paged=%#%',
		'current' => max(1, get_query_var('paged')),
		'total' => $max_num_of_pages,
		'show_all' => false,
		'prev_text' => '<i class="fas fa-arrow-left"></i>' . 'Prev',
		'next_text' => 'Next' . '<i class="fas fa-arrow-right"></i>',
		'mid_size'  => 3 // number of page links to display on either side of current page
	));
	return $pagination;
}

function footer_custom_menu($theme_location, $wrapper_class = 'col-lg-3 col-6')
{
	if (($theme_location) && ($locations = get_nav_menu_locations()) && isset($locations[$theme_location])) {
		$menu = get_term($locations[$theme_location], 'nav_menu');
		$menu_items = wp_get_nav_menu_items($menu->term_id);

		$menu_list = " ";

		$count = 0;
		$submenu = false;

		foreach ($menu_items as $menu_item) {

			$link = $menu_item->url;
			$title = $menu_item->title;
			if (!$menu_item->menu_item_parent) {
				$parent_id = $menu_item->ID;
				if (isset($menu_items[$count + 1]) && $parent_id == $menu_items[$count + 1]->menu_item_parent) {
					$menu_list .= '<div class="' . $wrapper_class . '">' . "\n";
					$menu_list .= '<h5 class="col-title">' . $title . '</h5>' . "\n";
					$menu_list .= '<ul class="footer-nav">' . "\n";
				} else {
					$menu_list .= '<div class="' . $wrapper_class . '">' . "\n";
					$menu_list .= '<ul class="footer-nav">' . "\n";
					$menu_list .= '<li>';
					$menu_list .= '<i class="fas fa-less-than"></i>';
					$menu_list .= '<a class="nav-link" href="' . $link . '">' . $title . '</a>' . "\n";
					$menu_list .= '</li>';
					$menu_list .= '</ul>' . "\n";
				}
			}

			if ($parent_id == $menu_item->menu_item_parent) {

				if (!$submenu) {
					$submenu = true;
				}
				$menu_list .= '<li>';
				$menu_list .= '<i class="fas fa-less-than"></i>';
				$menu_list .= '<a class="nav-link" href="' . $link . '">' . $title . '</a>' . "\n";
				$menu_list .= '</li>';


				if ($menu_items[$count + 1]->menu_item_parent != $parent_id && $submenu) {
					$menu_list .= '</ul>' . "\n";
					$submenu = false;
				} else {
				}
			}

			if ((isset($menu_items[$count + 1]) && $menu_items[$count + 1]->menu_item_parent != $parent_id) || !isset($menu_items[$count + 1])) {
				$menu_list .= '</div>' . "\n";
				$submenu = false;
			}

			$count++;
		}
	} else {
		$menu_list = '<!-- no menu defined in location "' . $theme_location . '" -->';
	}
	echo $menu_list;
}


function my_language_switcher()
{
	$languages = apply_filters('wpml_active_languages', NULL, 'orderby=id&order=desc');

	if (!empty($languages)) {
		foreach ($languages as $l) {
			if (!$l['active']) echo ' <a href="' . esc_url($l['url']) . '" class="nav-link">' . $l['tag'];
			if (!$l['active']) echo '</a> ';
		}
	}
}

# ------------------------------------------------------------------------ api ------------------------------------------------
# add_action('rest_api_init', function () {
#     register_rest_route('generaldata/v1', '/getimage/(?P<id>\d+)', array(
#         'methods' => 'GET',
#         'callback' => 'get_image',
#         'args' => array(
#             'id' => array(
#                 'validate_callback' => function ($param, $request, $key) {
#                     return is_numeric($param);
#                 }
#             ),
#         ),
#         'permission_callback' => '__return_true'
#     ));
# });
# 
# function get_image($data)
# {
#     $imageId = $data['id'];
#     $image = wp_get_attachment_image($imageId, 'full', true);
#     return $image;
# }