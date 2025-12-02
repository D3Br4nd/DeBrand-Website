<?php
/**
 * Plugin Name: DeBrand Headless Configuration
 * Description: Disables frontend and configures Headless mode.
 * Version: 1.0.0
 * Author: DeBrand Studio
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Redirect frontend requests to the Next.js app or show a JSON message.
 */
add_action('template_redirect', function () {
    // Allow GraphQL requests
    if (strpos($_SERVER['REQUEST_URI'], '/graphql') !== false) {
        return;
    }

    // Allow Admin and Login
    if (is_admin() || is_user_logged_in() || strpos($_SERVER['REQUEST_URI'], '/wp-json') !== false || strpos($_SERVER['REQUEST_URI'], '/wp-login.php') !== false) {
        return;
    }

    // Redirect or block everything else
    // Ideally, redirect to the Next.js frontend URL if defined
    $frontend_url = getenv('FRONTEND_URL');
    
    if ($frontend_url) {
        wp_redirect($frontend_url . $_SERVER['REQUEST_URI'], 301);
        exit;
    } else {
        // Fallback JSON response
        wp_send_json([
            'message' => 'DeBrand Studio Headless WordPress. Frontend is separate.',
            'status' => 'headless'
        ], 200);
    }
});

/**
 * Enable CORS for GraphQL
 */
add_action('init', function () {
    // Prevent headers error during WP-CLI execution
    if ( defined( 'WP_CLI' ) && WP_CLI ) {
        return;
    }
    
    if ( ! headers_sent() ) {
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
        header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
    }
});
