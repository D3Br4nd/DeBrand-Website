<?php
/**
 * Plugin Name: DeBrand ACF Fields
 * Description: Registers ACF fields for DeBrand Studio.
 * Version: 1.0.0
 * Author: DeBrand Studio
 */

if (!defined('ABSPATH')) {
    exit;
}

add_action('acf/init', function () {

    // 1. Page Header (Global for all Pages)
    acf_add_local_field_group(array(
        'key' => 'group_page_header',
        'title' => 'Page Header',
        'fields' => array(
            array(
                'key' => 'field_header_title',
                'label' => 'Custom Title',
                'name' => 'header_title',
                'type' => 'text',
                'instructions' => 'Override the default page title.',
                'show_in_graphql' => 1,
            ),
            array(
                'key' => 'field_header_subtitle',
                'label' => 'Subtitle',
                'name' => 'header_subtitle',
                'type' => 'text',
                'show_in_graphql' => 1,
            ),
            array(
                'key' => 'field_header_hero_image',
                'label' => 'Hero Image',
                'name' => 'header_hero_image',
                'type' => 'image',
                'return_format' => 'array',
                'show_in_graphql' => 1,
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'page',
                ),
            ),
        ),
        'show_in_graphql' => 1,
        'graphql_field_name' => 'pageHeader',
    ));

    // 2. Home Page Specific Fields
    acf_add_local_field_group(array(
        'key' => 'group_home_page',
        'title' => 'Home Page Sections',
        'fields' => array(
            // Services Section
            array(
                'key' => 'field_services_section',
                'label' => 'Services',
                'name' => 'services',
                'type' => 'repeater',
                'show_in_graphql' => 1,
                'sub_fields' => array(
                    array(
                        'key' => 'field_service_icon',
                        'label' => 'Icon Name',
                        'name' => 'icon',
                        'type' => 'text',
                        'instructions' => 'e.g., "code", "design"',
                    ),
                    array(
                        'key' => 'field_service_title',
                        'label' => 'Title',
                        'name' => 'title',
                        'type' => 'text',
                    ),
                    array(
                        'key' => 'field_service_desc',
                        'label' => 'Description',
                        'name' => 'description',
                        'type' => 'textarea',
                    ),
                ),
            ),
            // CTA Section
            array(
                'key' => 'field_cta_section',
                'label' => 'Call to Action',
                'name' => 'cta_section',
                'type' => 'group',
                'show_in_graphql' => 1,
                'sub_fields' => array(
                    array(
                        'key' => 'field_cta_title',
                        'label' => 'Title',
                        'name' => 'title',
                        'type' => 'text',
                    ),
                    array(
                        'key' => 'field_cta_link',
                        'label' => 'Link',
                        'name' => 'link',
                        'type' => 'link',
                        'return_format' => 'array',
                    ),
                ),
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'page_type',
                    'operator' => '==',
                    'value' => 'front_page',
                ),
            ),
        ),
        'show_in_graphql' => 1,
        'graphql_field_name' => 'homePageFields',
    ));
});
