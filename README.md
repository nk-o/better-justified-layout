# Justified Layout by Flickr... but better 🤩 <!-- omit in toc -->

> A fork of `flickr/justified-layout` containing different improvements.
> We maintain it because it is used in <https://github.com/nk-o/flickr-justified-gallery> and <https://visualportfolio.co/>

![better-justified-layout.min.js](https://img.badgesize.io/nk-o/better-justified-layout/master/dist/better-justified-layout.min.js?compression=gzip)

Pass in box sizes and get back sizes and coordinates for a nice justified layout like that seen all
over Flickr. The <a href="https://visualportfolio.co/justified/">Visual Portfolio site</a> is a great example.

## Table of Contents <!-- omit in toc -->

- [Quick Start](#quick-start)
  - [Usage](#usage)
  - [Example](#example)
- [Install](#install)
- [Import](#import)
  - [ESM](#esm)
  - [ESM CDN](#esm-cdn)
  - [CJS](#cjs)
- [Options](#options)
- [License](#license)

## Quick Start

### Usage

```js
import justifiedLayout from 'better-justified-layout';

const layoutGeometry = justifiedLayout([0.5, 1.5, 1, 1.8, 0.4, 0.7, 0.9, 1.1, 1.7, 2, 2.1]);
```

### Example

It converts this:

```js
[0.5, 1.5, 1, 1.8, 0.4, 0.7, 0.9, 1.1, 1.7, 2, 2.1]
```

Into this:

```js
{
  "containerHeight": 1269,
  "widowCount": 0,
  "boxes": [
    {
      "aspectRatio": 0.5,
      "top": 10,
      "width": 170,
      "height": 340,
      "left": 10,
      "row": 0
    },
    {
      "aspectRatio": 1.5,
      "top": 10,
      "width": 510,
      "height": 340,
      "left": 190,
      "row": 0
    },
    ...
  ]
}
```

## Install

`npm install better-justified-layout`

## Import

Use one of the following examples to import script.

### ESM

We provide a version of better-justified-layout built as ESM (`better-justified-layout.esm.js` and `better-justified-layout.esm.min.js`) which allows you to use it as a module in your browser, if your [targeted browsers support it](https://caniuse.com/es6-module).

```html
<script type="module">
  import justifiedLayout from "better-justified-layout.esm.min.js";
</script>
```

### ESM CDN

```html
<script type="module">
  import justifiedLayout from "better-justified-layout.esm.min.js@4.2/+esm";
</script>
```

### CJS

Import better-justified-layout by adding this line to your app's entry point (usually `index.js` or `app.js`):

```javascript
import justifiedLayout from 'better-justified-layout';
```

## Options

No configuration is required but chances are you'd like to change some things. Here are your options:

Name | Type | Default | Description
:--- | :--- | :------ | :----------
`containerWidth` | int | `1060` | The width that boxes will be contained within irrelevant of padding.
`containerPadding` | int, object | `10` | Provide a single integer to apply padding to all sides or provide an object to apply individual values to each side.
`boxSpacing` | int, object | `10` | Provide a single integer to apply spacing both horizontally and vertically or provide an object to apply individual values to each axis.
`targetRowHeight` | int | `320` | It's called a target because row height is the lever we use in order to fit everything in nicely. The algorithm will get as close to the target row height as it can.
`targetRowHeightTolerance` | float | `0.25` | How far row heights can stray from `targetRowHeight`. `0` would force rows to be the `targetRowHeight` exactly and would likely make it impossible to justify. The value must be between `0` and `1`.
`maxNumRows` | int | `Number.POSITIVE_INFINITY` | Will stop adding rows at this number regardless of how many items still need to be laid out.
`edgeCaseMinRowHeight` | float | `0.5` | Sets the minimum height for each row in a layout, based on the `targetRowHeight`
`edgeCaseMaxRowHeight` | float | `2.5` | Sets the maximum height for each row in a layout, based on the `targetRowHeight`
`forceAspectRatio` | bool, float | `true` | Provide an aspect ratio here to return everything in that aspect ratio. Makes the values in your input array irrelevant. The length of the array remains relevant.
`showWidows` | bool | `true` | By default we'll return items at the end of a justified layout even if they don't make a full row. If `false` they'll be omitted from the output.
`fullWidthBreakoutRowCadence` | bool, int | `false` | If you'd like to insert a full width box every `n` rows you can specify it with this parameter. The box on that row will ignore the `targetRowHeight`, make itself as wide as `containerWidth` - `containerPadding` and be as tall as its aspect ratio defines. It'll only happen if that item has an aspect ratio >= 1. Best to have a look at the examples to see what this does.

## License

Open Source Licensed under the MIT license.
