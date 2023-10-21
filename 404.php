<?php get_header(); ?>

<?php
$front_page_id = get_option('page_on_front');
?>
<section class="page-not-found padding-bottom">
    <?php get_template_part('templates/template-parts/common/goback', null, ["page_id" => $front_page_id, "label" => __('Home', '_themename'), "transparent" => false]); ?>
    <div class="container content">
        <div class="row">
            <div class="col-12 empty-results d-flex justify-content-center align-items-center flex-column">
                <img src="<?php echo get_template_directory_uri() ?>/dist/images/404.png" class="404-img" alt="">
                <h5><?php _e('Page not found', '_themename'); ?></h5>
            </div>
        </div>
    </div>
</section>
<?php get_footer(); ?>