<?php
if (!class_exists('section_teaser_Shortcode')) {
    class section_teaser_Shortcode
    {
        /**
         * Main constructor
         */
        public function __construct()
        {
            // Registers the shortcode in WordPress
            add_shortcode('section_teaser', __CLASS__ . '::output');
            // Map shortcode to WPBakery so you can access it in the builder
            if (function_exists('vc_lean_map')) {
                vc_lean_map('section_teaser', __CLASS__ . '::map');
            }
        }
        /**
         * Shortcode output
         */
        public static function output($atts, $content)
        {
            // Extract shortcode attributes (based on the vc_lean_map function - see next function)
            $atts = vc_map_get_attributes('section_teaser', $atts);
?>
            <div class="stage aem-GridColumn aem-GridColumn--default--12" style='margin-top:200px;'>
                <div class="c-stage c-stage--landing c-stage--theme-disabled c-stage--dynamic-xs" style="background-color:transparent;">
                    <div class="c-stage__wrapper">
                        <div class="c-stage__image-container">
                            <picture class="cmp-image c-image  c-stage__image c-stage__image--cover ">
                                <img src="<?php echo wp_get_attachment_image_url($atts['image'], 'full', false) ?>" class="c-image__img abovethefoldimage">
                            </picture>
                            <div class="l-grid l-grid--max-width c-stage__promotional-element u-hidden-small-down">
                            </div>
                        </div>
                        <div class="l-grid l-grid--max-width c-stage__content  " style="margin-top: unset;">
                            <div class="l-grid__row c-stage__content__grid">
                                <?php if ($atts['subtitle']) { ?>
                                    <div class="l-grid__column-large-12">
                                        <div>
                                            <h3 class="c-heading  c-heading--subsection-large c-stage__topline c-link--capitalize u-text-hyphen-auto u-text-align-center">
                                                <span style="color: rgb(255,255,255);" class="c-rte-dialog-background-color-grey"><?php echo $atts['subtitle'] ?></span>
                                            </h3>
                                        </div>
                                    </div>
                                <?php } ?>
                                <?php if ($content) { ?>
                                    <div class="l-grid__column-large-12">
                                        <div>
                                            <h1 class="c-heading  c-heading--section c-stage__headline c-link--capitalize u-text-hyphen-auto u-text-align-center">
                                                <span class="c-rte-dialog-background-color-grey"><?php if ($content) echo wpautop($content) ?>
                                                    <?php
                                                    /*
                                            <!-- <br>
                                            <span style="letter-spacing: 0.3px;background-color: transparent;"><?php if ($bottom_title) echo $bottom_title ?></span></span> -->
                                            **/
                                                    ?>
                                            </h1>
                                        </div>
                                    </div>
                                <?php } ?>
                                <?php if ($atts['description']) { ?>
                                    <div class="l-grid__column-medium-12 l-grid__column-large-12">
                                        <div>
                                            <div class="c-copy   c-stage__additional-info  u-text-hyphen-auto">
                                                <span style="color: rgb(255,255,255);" class="c-rte-dialog-background-color-grey"><?php echo $atts['description'] ?></span>
                                            </div>
                                        </div>
                                    </div>
                                <?php } ?>
                                <div class="l-grid__column-large-12 c-stage__button__grid">
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                'name'        => esc_html__('Hero Teaser', 'locale'),
                'description' => esc_html__('first page section.', 'locale'),
                'base'        => 'section_teaser',
                'params'      => array(
                    array(
                        'type'       => 'attach_image',
                        'heading'    => esc_html__('Background image', 'locale'),
                        'param_name' => 'image',
                        'value' => array('', 'no image')
                    ),
                    array(
                        'type'       => 'textfield',
                        'heading'    => esc_html__('Subtitle', 'locale'),
                        'param_name' => 'subtitle',
                        'value'      => array('', 'subtitle'),
                    ),
                    array(
                        'type'       => 'textfield',
                        'heading'    => esc_html__('Description', 'locale'),
                        'param_name' => 'description',
                        'value'      => array('', 'description'),
                    ),
                    array(
                        'type'       => 'textarea_html',
                        'heading'    => __('Middle Content', 'locale'),
                        'param_name' => 'content',
                    ),
                ),
            );
        }
    }
}
new section_teaser_Shortcode;
