<?php
if (!class_exists('section_card_Shortcode')) {
    class section_card_Shortcode
    {
        /**
         * Main constructor
         */
        public function __construct()
        {
            // Registers the shortcode in WordPress
            add_shortcode('section_card', __CLASS__ . '::output');
            // Map shortcode to WPBakery so you can access it in the builder
            if (function_exists('vc_lean_map')) {
                vc_lean_map('section_card', __CLASS__ . '::map');
            }
        }
        /**
         * Shortcode output
         */
        public static function output($atts, $content)
        {
            // Extract shortcode attributes (based on the vc_lean_map function - see next function)
            $atts = vc_map_get_attributes('section_card', $atts);
?>
           <h3><?php print_r($atts)?></h3>
<?php
        }
        /**
         * Map shortcode to WPBakery
         *
         * This is an array of all your settings which become the shortcode attributes ($atts)
         * for the output. See the link below for a description of all available parameters.
         *
         * @since 1.0.0
         * @link  https://kb.wpbakery.com/docs/inner-api/vc_map/
         */
        public static function map()
        {
            return array(
                'name'        => esc_html__('Hero Card', 'locale'),
                'description' => esc_html__('first page section.', 'locale'),
                'base'        => 'section_teaser',
                'params'      => array(
                    array(
                        'type'       => 'textfield',
                        'heading'    => esc_html__('title', 'locale'),
                        'param_name' => 'section_title',
                        'value' => array('', 'no title'),
                    ),
                    array(
                        'type'       => 'attach_image',
                        'heading'    => esc_html__('image', 'locale'),
                        'param_name' => 'image',
                        'value'      => array('', 'image'),
                    ),
                    array(
                        'type'       => 'textfield',
                        'heading'    => esc_html__('Description', 'locale'),
                        'param_name' => 'description',
                        'value'      => array('', 'description'),
                    ),
                    array(
                        'type'       => 'vc_link',
                        'heading'    => __('link', 'locale'),
                        'param_name' => 'content',
                    ),
                    array(
                        'type'       => 'textfield',
                        'heading'    => esc_html__('url text', 'locale'),
                        'param_name' => 'link_text',
                        'value'      => array('', 'url text'),
                    ),
                ),
            );
        }
    }
}
new section_card_Shortcode;
