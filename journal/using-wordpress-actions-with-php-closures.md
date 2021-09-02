---
date: 2021-09-02
author: Jez R. Emery
title: Using Wordpress Actions with PHP Closures
excerpt: Using Wordpress Actions with PHP Closures to allow for parameter passing
  to custom functions

---
Say we have this function 
```php
public function addAdditionalEditorFiles(string $param)
{
  // do something
}
```

Now in order to enqueue files to the Wordpress Admin area, we need to utilise an `add_action` call, however these normally only allow for usage without parameters. e.g.

```php
add_action('enqueue_block_editor_assets', [$this, 'loadAdditionalEditorFiles']);
```

So how do we pass a custom parameter to this function call? Using Closures.

```php
$param = 'something';
add_action('enqueue_block_editor_assets', function() with ($param) {
  $this->loadAdditionalEditorFiles($param);
});
```