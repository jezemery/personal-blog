---
date: 2021-08-31
author: Nichlas W. Andersen
title: Adding a custom post type to Wordpress using NanoSoup/Nemesis
excerpt: Using Nemesis you can quickly create a custom post type for Wordpress with
  some great defaults

---
## Setting up the plugin

Create a new folder in the Wordpress plugin directory.

`mkdir location-post-type`

Enter the directory.

`cd location-post-type`

The install Nemesis as a dependency using `composer`

`composer install nanosoup/nemesis`

Create your root plugin file `location-post-type.php`

You'll need to make this file contain the following. 

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