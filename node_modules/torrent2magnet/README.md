# torrent2magnet

[![npm Package](https://img.shields.io/npm/v/torrent2magnet.svg)](https://www.npmjs.org/package/torrent2magnet)
[![License](https://img.shields.io/npm/l/torrent2magnet.svg)](https://github.com/honzahommer/node-torrent2magnet/blob/master/LICENSE)
[![build status](https://img.shields.io/travis/honzahommer/node-torrent2magnet/master.svg)](http://travis-ci.org/honzahommer/node-torrent2magnet)
[![downloads per month](http://img.shields.io/npm/dm/torrent2magnet.svg)](https://www.npmjs.org/package/torrent2magnet)
[![Greenkeeper badge](https://badges.greenkeeper.io/honzahommer/node-torrent2magnet.svg)](https://greenkeeper.io/)

> Takes a torrent file and returns it's magnet uri.

## Install

Install via
`npm install torrent2magnet`

## Usage

```js
const torrent2magnet = require('torrent2magnet');

# Async
torrent2magnet(torrentUrl, options, (err, uri) => {
  if (err) {
    return console.error(err);
  }

  console.log(uri);
});

# Promise
torrent2magnet(torrentUrl, options).then(uri => {
  console.log(uri);
}).catch(err => {
  console.error(err);
});

# Sync
try {
  console.log(torrent2magnet(torrentUrl));
} catch (err) {
  console.log(err);
}
```

## License

MIT

*Fork of [apsdehal/torrent-to-magnet](https://github.com/apsdehal/torrent-to-magnet).*
