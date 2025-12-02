<?php
/**
 * Plugin Name: WPGraphQL Contact Mutation
 * Description: Registers a GraphQL mutation to send contact emails.
 */

add_action( 'graphql_register_types', function() {
    register_graphql_mutation( 'sendContactEmail', [
        'inputFields' => [
            'name' => [
                'type' => 'String',
                'description' => 'Name of the sender',
            ],
            'email' => [
                'type' => 'String',
                'description' => 'Email of the sender',
            ],
            'company' => [
                'type' => 'String',
                'description' => 'Company of the sender',
            ],
            'message' => [
                'type' => 'String',
                'description' => 'Message content',
            ],
        ],
        'outputFields' => [
            'success' => [
                'type' => 'Boolean',
                'description' => 'Whether the email was sent successfully',
            ],
            'message' => [
                'type' => 'String',
                'description' => 'Response message',
            ],
        ],
        'mutateAndGetPayload' => function( $input ) {
            $name = sanitize_text_field( $input['name'] );
            $email = sanitize_email( $input['email'] );
            $company = sanitize_text_field( $input['company'] );
            $message = sanitize_textarea_field( $input['message'] );

            if ( empty( $name ) || empty( $email ) || empty( $message ) ) {
                return [
                    'success' => false,
                    'message' => 'Please fill in all required fields.',
                ];
            }

            $to = get_option( 'admin_email' );
            $subject = "Nuovo messaggio da $name - DeBrand Studio";
            $body = "Nome: $name\nEmail: $email\nAzienda: $company\n\nMessaggio:\n$message";
            $headers = [ 'Content-Type: text/plain; charset=UTF-8', "Reply-To: $name <$email>" ];

            error_log( "Attempting to send email to: $to" );
            $sent = wp_mail( $to, $subject, $body, $headers );
            error_log( "wp_mail result: " . ( $sent ? 'success' : 'failure' ) );

            if ( $sent ) {
                return [
                    'success' => true,
                    'message' => 'Email sent successfully.',
                ];
            } else {
                return [
                    'success' => false,
                    'message' => 'Failed to send email.',
                ];
            }
        },
    ] );
} );
