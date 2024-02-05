# Flickr's Justified Layout

> A fork of `flickr/justified-layout` containing different improvements.

Pass in box sizes and get back sizes and coordinates for a nice justified layout like that seen all
over Flickr. The <a href="https://www.flickr.com/explore">explore page</a> is a great example. Here's
another example using the `fullWidthBreakoutRowCadence` option on Flickr's
<a href="https://www.flickr.com/photos/dataichi/albums/72157650151574962">album page</a>.

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
            "left": 10
        },
        {
            "aspectRatio": 1.5,
            "top": 10,
            "width": 510,
            "height": 340,
            "left": 190
        },
        ...
    ]
}
```

Which gives you everything you need to make something like this:

![Demonstration](https://cloud.githubusercontent.com/assets/43693/14033849/f5cffb58-f1da-11e5-9763-dce7e90835e1.png)


## Install

`npm install better-justified-layout`


## Easy Usage

```js
import justifiedLayout from 'better-justified-layout';

const layoutGeometry = justifiedLayout([1.33, 1, 0.65]);
```


## Full Documentation and Examples

Find it here: http://flickr.github.io/justified-layout/


## License

Open Source Licensed under the MIT license.
