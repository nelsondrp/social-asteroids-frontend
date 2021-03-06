# JSTable

The JSTable is a lightweight, dependency-free JavaScript plugin which makes a HTML table interactive.

The plugin is similar to the [jQuery datatables](https://datatables.net/) but without the jQuery dependencies.

The implementation is inspired by [Vanilla-DataTables](https://github.com/Mobius1/Vanilla-DataTables). Unlike Vanilla-Datatables this implementation is using the in ES6 introduced [classes](https://www.w3schools.com/js/js_classes.asp).  
Additionally JSTable includes the possibility for server side rendering, which is inspired by [jQuery datatables](https://datatables.net/manual/server-side).

You can get more information about the usage on [https://jstable.github.io/](https://jstable.github.io/).

## Install

* Clone the [github repository](https://github.com/jstable/JSTable)
* Include the stylesheet and JavaScript files from the `dist` folder:

```
<link rel="stylesheet" type="text/css" href="/dist/jstable.css">
```
```
<script type="text/javascript" src="/dist/jstable.min.js"></script>
```
* If the target browser does not support not all ES2015+ features you need to include the `es5` version:
```
<script type="text/javascript" src="/dist/jstable.es5.min.js"></script>
```
* If the target browser does not support fetch you need to include the following polyfills:
```
<script type="text/javascript" src="/dist/polyfill-fetch.min.js"></script>
```

## Initialize

The HTML table needs a `thead` and `tbody` section.

#### Example table
```
<table id="basic">
    <thead>
        <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Date</th>
            <th>Number</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Norman Small</td>
            <td>Tokelau</td>
            <td>2020-02-01 07:22:40</td>
            <td>8243</td>
        </tr>
            ...
    </tbody>
</table>
```

#### JavaScript

The JSTable can be initialized by passing a reference or a CSS3 selector as string:
```
let myTable = new JSTable("#basic");
```
or
```
let table = document.getElementById('basic');
let myTable = new JSTable(table);
```
[Options](https://jstable.github.io/options.html) can be passed as second argument:

```
let myTable = new JSTable("#basic", {
    sortable: true,
    searchable: false,
    ...
});
```
