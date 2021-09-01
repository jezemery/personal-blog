---
date: 2021-08-31
author: Jez R. Emery
title: Adding a custom post type to Wordpress using NanoSoup/Nemesis
excerpt: Using Nemesis you can quickly create a custom post type for Wordpress with
  some great defaults

---
Nemesis is a simple plugin provided by the NanoSoup group which aids in the rapid setup and customisation of custom post types within Wordpress without the need for much Wordpress specific knowledge.

## Setting up the plugin

Create a new folder in the Wordpress plugin directory.

```bash 
$ mkdir location-post-type
```

Enter the directory.

```bash
$ cd location-post-type
```
The install Nemesis as a dependency using `composer`

```bash
$ composer install nanosoup/nemesis
```
Create your root plugin file `location-post-type.php`

You'll need to make this file contain the following. 
```php
<?php
/*
Plugin Name: Location Post Types
Plugin URI: https://www.hiohzo.com/
Description: Custom post type for Locations
Version: 1.0.0
Author: Jez Emery (Hiohzo)
Author URI: https://www.hiohzo.com/
*/

use NanoSoup\Nemesis\PostTypes\PostTypes;

require_once __DIR__ . '/vendor/autoload.php';
```
Once this is done, the barebones of the plugin are set up.

## Configuring your custom post type

Nemesis allows for a LOT of customisation, however in this article we'll cover the basics of setting up a simple post type.

Edit your `location-post-type.php` file to add the following.
```php
function create_posttype_locations()
{
    if (!function_exists('register_post_type')) { return false; }

    (new PostTypes())->registerPostType('location', 'Location', 'Locations', 'location', [
        'hierarchical' => true,
        'menu_icon' => 'dashicons-location'
    ]);
}
add_action('init', 'create_posttype_locations');
```
### Automatically flush Wordpress Permalinks

You'll likely notice at this point, if you enable the plugins, the URLs do not currently work as expected. You will probably experience them all 404ing. This is because you need to flush permalinks in Wordpress. You can do this via the Admin CMS, however a better idea is to flush them when you enable the plugin. 

This can be done with the following.
```php
function location_post_type_activate()
{
    flush_rewrite_rules();
}
register_activation_hook(__FILE__, 'location_post_type_activate');
```