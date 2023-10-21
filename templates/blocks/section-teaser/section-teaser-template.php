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


$background_image = mb_get_block_field('background_image');
$subtitle = mb_get_block_field('subtitle');
$middle_content = mb_get_block_field('middle_content');
// $bottom_title = mb_get_block_field('bottom_title');
$description = mb_get_block_field('description');

?>
<section id="<?= $id ?>" class="<?= $class ?>">
    <div class="stage aem-GridColumn aem-GridColumn--default--12" style='margin-top:200px;'>
        <div class="c-stage c-stage--landing c-stage--theme-disabled c-stage--dynamic-xs" style="background-color:transparent;">
            <div class="c-stage__wrapper">
                <div class="c-stage__image-container">
                    <picture class="cmp-image c-image  c-stage__image c-stage__image--cover ">
                        <img src="<?php echo wp_get_attachment_image_url($background_image['ID'], 'full', false) ?>" class="c-image__img abovethefoldimage">
                    </picture>
                    <div class="l-grid l-grid--max-width c-stage__promotional-element u-hidden-small-down">
                    </div>
                </div>
                <div class="l-grid l-grid--max-width c-stage__content  " style="margin-top: unset;">
                    <div class="l-grid__row c-stage__content__grid">
                        <?php if ($subtitle) { ?>
                            <div class="l-grid__column-large-12">
                                <div>
                                    <h3 class="c-heading  c-heading--subsection-large c-stage__topline c-link--capitalize u-text-hyphen-auto u-text-align-center">
                                        <span style="color: rgb(255,255,255);" class="c-rte-dialog-background-color-grey"><?php echo $subtitle ?></span>
                                    </h3>
                                </div>
                            </div>
                        <?php } ?>
                        <?php if ($middle_content) { ?>
                            <div class="l-grid__column-large-12">
                                <div>
                                    <h1 class="c-heading  c-heading--section c-stage__headline c-link--capitalize u-text-hyphen-auto u-text-align-center">
                                        <span class="c-rte-dialog-background-color-grey"><?php if ($middle_content) echo wpautop($middle_content) ?>
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
                        <?php if ($description) { ?>
                            <div class="l-grid__column-medium-12 l-grid__column-large-12">
                                <div>
                                    <div class="c-copy   c-stage__additional-info  u-text-hyphen-auto">
                                        <span style="color: rgb(255,255,255);" class="c-rte-dialog-background-color-grey"><?php echo $description ?></span>
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
</section>