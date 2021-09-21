---
date: 2021-09-21
author: Jez R. Emery
title: Prevent Wordpress Admin Updating, Installing Plugins
excerpt: How to prevent Wordpress checking for plugin updates, and installing plugins
  from wp-admin

---
This will prevent new plugins being installed, plugin update status showing in the admin bar, and prevent updating on plugins on production servers.
```php
define('DISALLOW_FILE_MODS',true);
```