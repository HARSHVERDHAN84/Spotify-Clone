// Play the selected song
function playSong(songUrl) {
    var audioPlayer = document.querySelector('audio');
    audioPlayer.src = songUrl;
    audioPlayer.play();
  }
  
  // Get all song list items
  var songListItems = document.querySelectorAll('.song-list li');
  
  // Add a click event listener to each song list item
  for (var i = 0; i < songListItems.length; i++) {
    songListItems[i].addEventListener('click', function() {
      playSong(this.querySelector('a').href);
    });
  }
  