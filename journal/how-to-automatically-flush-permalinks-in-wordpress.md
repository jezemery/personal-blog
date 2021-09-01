---
date: 2021-08-31
author: Jez R. Emery
title: How to automatically flush permalinks in Wordpress
excerpt: This will show you how to automatically flush permalinks when you enable
  a Wordpress plugin for the first time.

---
Flushing permalinks when you enable a plugin is REALLY simple, it can be done with the following snippet. This snippet needs to be in the root file of your plugin, e.g. `wp-content/plugins/plugin/plugin.php`
```php
  function pluginActivated()
  {
      flush_rewrite_rules();
  }
  register_activation_hook(__FILE__, 'pluginActivated');
```