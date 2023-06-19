import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

let currentTime;

player.on('timeupdate', function (data) {
  currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime));
});

try {
  currentTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));
} catch (error) {
  console.log(error);
}

player
  .setCurrentTime(currentTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
