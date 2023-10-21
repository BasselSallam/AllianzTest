<?php
add_filter('rwmb_meta_boxes', 'adze_settings_meta');

function adze_settings_meta($meta_boxes)
{
    $prefix = '';

    $meta_boxes[] = [
        'title'      => __('ADZE SETTINGS', '_themename'),
        'id'         => 'adze-settings',
        'post_types' => ['page'],
        'include'    => [
            'relation' => 'AND',
            'ID'       => [THEME_SETTINGS_PAGE_ID],
        ],
        'fields'     => [
            [
                'name'       => __('Insights Archive Page', '_themename'),
                'id'         => $prefix . 'insights_archive_page',
                'type'       => 'post',
                'post_type'  => ['page'],
                'field_type' => 'select_advanced',
            ],
            [
                'name'       => __('Works Archive Page', '_themename'),
                'id'         => $prefix . 'works_archive_page',
                'type'       => 'post',
                'post_type'  => ['page'],
                'field_type' => 'select_advanced',
            ],
            [
                'name'       => __('Services Archive Page', '_themename'),
                'id'         => $prefix . 'services_archive_page',
                'type'       => 'post',
                'post_type'  => ['page'],
                'field_type' => 'select_advanced',
            ],
            [
                'name'       => __('Contact Us Page', '_themename'),
                'id'         => $prefix . 'contact_us_page',
                'type'       => 'post',
                'post_type'  => ['page'],
                'field_type' => 'select_advanced',
            ],
        ],
    ];

    return $meta_boxes;
}