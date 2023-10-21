<?php
// Fields data.
if (empty($attributes['data'])) {
    return;
}

// Unique HTML ID if available.
$id = 'block-wrapper-' . ($attributes['id'] ?? '');
if (!empty($attributes['anchor'])) {
    $id = $attributes['anchor'];
}

// Custom CSS class name.
$class = 'block-wrapper ' . ($attributes['className'] ?? '');
if (!empty($attributes['align'])) {
    $class .= " align{$attributes['align']}";
}


$section_title = mb_get_block_field('section_title');
$single_card = mb_get_block_field('single_card');
$background_color = mb_get_block_field('background_color');

?>
<section id="<?= $id ?>" class="<?= $class ?>">
    <div class="tiles-container">
        <div class="l-container l-container--full-width t-bg-" style="display:block; background-color:<?php echo $background_color?>">
            <div class="l-grid l-grid--max-width c-benefit-communication-tile c-benefit-communication-tile--full-column ">
                <div class="l-grid__row justify-content-center">
                    <!--  Top line Displaying the header information -->
                    <div class="l-grid__column-medium-12 l-grid__column-large-8">
                    </div>
                    <?php if ($section_title) { ?>
                        <div class="l-grid__column-medium-12 l-grid__column-large-10">
                            <h2 class="c-heading  c-heading--section c-benefit-communication-tile__heading u-text-center c-link--capitalize u-text-hyphen-auto">
                                <?php echo $section_title ?>
                            </h2>
                        </div>
                    <?php } ?>
                    <!--  end here -->
                </div>
                <!--  custom column parsys -->
                <div class="l-grid__row ">
                    <?php if ($single_card) { ?>
                        <?php foreach ($single_card as $card) { ?>
                            <div class="l-grid__column-large-4 l-grid__column-medium-12  l-grid__column-small-12">
                                <div class="tile container">
                                    <div class="c-tile c-tile--benefit">
                                        <picture class="cmp-image c-image  c-tile__image ">

                                            <img src="<?php echo wp_get_attachment_image_url($card['image'], 'full', false) ?>" class="c-image__img c-image__img">
                                        </picture>
                                        <h3 class="c-heading  c-heading--subsection-medium c-tile__heading-sub-section c-link--capitalize u-text-hyphen-auto">
                                            <?php echo $card['description'] ?>
                                        </h3>
                                        <a class="c-link c-link--block" href="<?php echo $card['link'] ?>" target="_self" data-link-title="SEE OUR PRODUCTS" aria-label="SEE OUR PRODUCTS" data-component-id="root/parsys/tiles_container_copy/custom-parsys/tile/link" data-component-name="SEE OUR PRODUCTS" data-component-type="Link">
                                            <span aria-hidden="true" class="c-link__icon c-icon c-icon--arrow-right "></span>
                                            <span class="c-link__text u-text-hyphen-auto"><?php echo $card['link_text'] ?></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        <?php } ?>
                    <?php } ?>
                </div>
                <!--  Button -->
                <div class="l-grid__row justify-content-center">
                    <div class="l-grid__column-small-12 l-grid__column-medium-fit">
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>