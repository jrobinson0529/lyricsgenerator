const showLyrics = (object, userInput) => {
  $('#lyrics-container').html(`
  <h1>${userInput.song.toUpperCase()}</h1><h4 class="subheader">BY: ${userInput.artist.toUpperCase()}</h4>
  ${object}`);
};

export default showLyrics;
