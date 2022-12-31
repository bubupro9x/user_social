const torrent2magnet = require('torrent-to-magnet');

module.exports = Object.assign(torrent2magnet, {
  torrent2magnetSync: torrent2magnet.sync,
  default: torrent2magnet,
  torrent2magnet
});
