# This is a search engine for version 1 of the web site.

It’s purpose is to make the list page faster by adding paging.

We could add paging with our current server-side tools (Jekyll and GitHub pages), but it would be challenging to sort the results by location at the same time.

Let’s work around this by making our own search engine (we’re currently thinking of using Node hosted on Heroku). We could  send requests to it with JavaScript and return the closest results (perhaps in [JSONP](https://en.wikipedia.org/wiki/JSONP) format, so it will work across domains).

Here’s an example request…
```
https://foodoasisla.heroku.com/?latitude=34.25777331100005&longitude=-118.40466851899998
```

And a response…
```
var locations = [
  {
    name: 'All Peoples Christian Center',
    type: 'Food Bank',
    address: '822 E. 20th Street Los Angeles 90011',
    phone: '213-747-6357',
    hours: 'Fri 12pm-5pm',
    latitude: 34.0856924,
    longitude: -118.1729264
  },
  …
];
```

## Data

The list page is using data from this folder…
https://github.com/foodoasisla/site/tree/master/_data

## Logic

And the logic for the list page is here…
https://github.com/foodoasisla/site/blob/master/assets/js/list.js

## Features

Some of the features of the list page are…

It accepts an address as a query string parameter, and uses Google’s geolocation API to translate that to an address. Here’s a working example: http://foodoasis.la/list/?address=Orange%20County
If no address is available it uses the built-in Geolocation in the user’s browser: http://foodoasis.la/list/
It sorts the list on the page so that the closest locations are at the top.
