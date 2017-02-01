<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
    <?php wp_head(); ?>
</head>
<body>


    <section class="b-mainWrapper b-doc">
        <div id="app">
            <app-header></app-header>

            <app-menu></app-menu>
            <router-view></router-view>

            <app-footer></app-footer>
        </div>
    </section>

    <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/build/app.bundle.js"></script>
    <?php wp_footer(); ?>

</body>
</html>