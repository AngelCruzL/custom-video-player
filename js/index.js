const $video = document.getElementById('video');
const $play = document.getElementById('play');
const $pause = document.getElementById('pause');
const $backward = document.getElementById('backward');
const $forward = document.getElementById('forward');

$backward.addEventListener('click', handleBackward);
$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);
$forward.addEventListener('click', handleForward);

function handlePlay() {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
}

function handlePause() {
  $video.pause();
  $play.hidden = false;
  $pause.hidden = true;
}

function handleBackward() {
  $video.currentTime -= 10;
  console.log('hello', $video.currentTime);
}

function handleForward() {
  $video.currentTime += 10;
  console.log(this, $video.currentTime);
}
