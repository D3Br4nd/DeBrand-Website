<?php
/**
 * Plugin Name: SMTP Configuration
 * Description: Configures PHPMailer via environment variables.
 */

add_action( 'phpmailer_init', function( $phpmailer ) {
    if ( getenv( 'SMTP_HOST' ) ) {
        $phpmailer->isSMTP();
        $phpmailer->Host       = getenv( 'SMTP_HOST' );
        $phpmailer->SMTPAuth   = true;
        $phpmailer->Port       = getenv( 'SMTP_PORT' );
        $phpmailer->Username   = getenv( 'SMTP_USER' );
        $phpmailer->Password   = getenv( 'SMTP_PASS' );
        $phpmailer->SMTPSecure = getenv( 'SMTP_SECURE' );
        $phpmailer->From       = getenv( 'SMTP_FROM' );
        $phpmailer->FromName   = getenv( 'SMTP_NAME' );
    }
});
