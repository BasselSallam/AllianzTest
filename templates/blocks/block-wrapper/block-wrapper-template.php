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
$padding_top = mb_get_block_field('padding_top');
$padding_bottom = mb_get_block_field('padding_bottom');
$border_bottom = mb_get_block_field('border_bottom');
$padding_start = mb_get_block_field('padding_left');
$padding_end = mb_get_block_field('padding_right');
$add_container = mb_get_block_field('add_container');
$style = '';
if ($border_bottom) {
    $style .= 'border-bottom: 2px solid #3A3A3A;';
}
?>
<section id="<?= $id ?>" class="<?= $class ?>" style="<?php echo $style; ?>" data-padding-top="<?php echo $padding_top . 'rem'; ?>" data-padding-bottom="<?php echo $padding_bottom . 'rem'; ?>" data-padding-start="<?php echo $padding_start . 'rem'; ?>" data-padding-end="<?php echo $padding_end . 'rem'; ?>">
    <?php if ($add_container) : ?>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <InnerBlocks />
                </div>
            </div>
        </div>
    <?php else : ?>
        <InnerBlocks />
    <?php endif; ?>
</section>