<?php
add_filter('rwmb_meta_boxes', 'block_wrapper_block');

function block_wrapper_block($meta_boxes)
{
    $prefix = '';

    $meta_boxes[] = [
        'title'    => __('Block Wrapper', '_themename'),
        'icon'     => 'tablet',
        'category' => 'wk-blocks',
        'supports' => [
            'align' => [''],
        ],
        'type'     => 'block',
        'context'  => 'side',
        'render_template' => get_template_directory() . '/templates/blocks/block-wrapper/block-wrapper-template.php',
        'enqueue_style'   => get_stylesheet_directory_uri() . '/dist/assets/css/blocks/block-wrapper-template.css',
        'fields'   => [
            [
                'name' => __('Padding Top (rem)', '_themename'),
                'id'   => $prefix . 'padding_top',
                'type' => 'text',
            ],
            [
                'name' => __('Padding Bottom (rem)', '_themename'),
                'id'   => $prefix . 'padding_bottom',
                'type' => 'text',
            ],
            [
                'name' => __('Padding start (rem)', '_themename'),
                'id'   => $prefix . 'padding_left',
                'type' => 'text',
            ],
            [
                'name' => __('Padding end (rem)', '_themename'),
                'id'   => $prefix . 'padding_right',
                'type' => 'text',
            ],
            [
                'name'     => __('Border Bottom', '_themename'),
                'id'       => $prefix . 'border_bottom',
                'type' => 'checkbox',
            ],
            [
                'name' => __('Add Container', '_themename'),
                'id'   => $prefix . 'add_container',
                'type' => 'checkbox',
            ],
        ],
    ];

    return $meta_boxes;
}
