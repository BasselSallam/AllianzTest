<?php
add_filter('rwmb_meta_boxes', 'section_teaser_block');

function section_teaser_block($meta_boxes)
{
    $prefix = '';

    $meta_boxes[] = [
        'title'  => __( 'Section Teaser', 'allianz_domain' ),
        'icon'     => 'tablet',
        'category' => 'wk-blocks',
        'supports' => [
            'align' => [''],
        ],
        'type'     => 'block',
        'context'  => 'content',
        'render_template' => get_template_directory() . '/templates/blocks/section-teaser/section-teaser-template.php',
        'enqueue_style'   => get_stylesheet_directory_uri() . '/dist/assets/css/blocks/section-teaser-template.css',
        'fields' => [
            [
                'name'       => __( 'background image', 'allianz_domain' ),
                'id'         => $prefix . 'background_image',
                'type'       => 'single_image',
                'image_size' => 'full',
            ],
            [
                'name' => __( 'subtitle', 'allianz_domain' ),
                'id'   => $prefix . 'subtitle',
                'type' => 'text',
            ],
            [
                'name' => __( 'middle content', 'allianz_domain' ),
                'id'   => $prefix . 'middle_content',
                'type' => 'wysiwyg',
            ],
            // [
            //     'name' => __( 'bottom_title', 'allianz_domain' ),
            //     'id'   => $prefix . 'bottom_title',
            //     'type' => 'text',
            // ],
            [
                'name' => __( 'description', 'allianz_domain' ),
                'id'   => $prefix . 'description',
                'type' => 'text',
            ],
        ],
    ];

    return $meta_boxes;
}
