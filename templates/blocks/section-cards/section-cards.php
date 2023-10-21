<?php
add_filter('rwmb_meta_boxes', 'section_cards_block');

function section_cards_block($meta_boxes)
{
    $prefix = '';

    $meta_boxes[] = [
        'title'  => __('Section Cards', 'allianz_domain'),
        'icon'     => 'tablet',
        'category' => 'wk-blocks',
        'supports' => [
            'align' => [''],
        ],
        'type'     => 'block',
        'context'  => 'content',
        'render_template' => get_template_directory() . '/templates/blocks/section-cards/section-cards-template.php',
        'enqueue_style'   => get_stylesheet_directory_uri() . '/dist/assets/css/blocks/section-cards-template.css',
        'fields' => [
            [
                'name' => __('section title', 'your-text-domain'),
                'id'   => $prefix . 'section_title',
                'type' => 'text',
            ],
            [
                'name'       => __('single card', 'your-text-domain'),
                'id'         => $prefix . 'single_card',
                'type'       => 'group',
                'clone'      => true,
                'sort_clone' => true,
                'max_clone'  => 6,
                'fields'     => [
                    [
                        'name' => __('image', 'your-text-domain'),
                        'id'   => $prefix . 'image',
                        'type' => 'single_image',
                    ],
                    [
                        'name' => __('description', 'your-text-domain'),
                        'id'   => $prefix . 'description',
                        'type' => 'text',
                    ],
                    [
                        'name' => __('link text', 'your-text-domain'),
                        'id'   => $prefix . 'link_text',
                        'type' => 'text',
                    ],
                    [
                        'name' => __('link', 'your-text-domain'),
                        'id'   => $prefix . 'link',
                        'type' => 'url',
                    ],
                ],
            ],
            [
                'name'    => __('background color', 'your-text-domain'),
                'id'      => $prefix . 'background_color',
                'type'    => 'select',
                'options' => [
                    'transparent' => __('Transparent', 'your-text-domain'),
                    '#F1F9FA'     => __('Alice Blue', 'your-text-domain'),
                    '#FBF2F4'     => __('Lavender Blush', 'your-text-domain'),
                ],
            ]
        ],
    ];

    return $meta_boxes;
}
