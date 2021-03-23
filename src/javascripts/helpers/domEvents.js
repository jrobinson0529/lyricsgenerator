import showLyrics from '../components/showLyrics';
import getSong from './getSong';

const domEvents = () => {
  $('body').on('click', (e) => {
    if (e.target.id.includes('search-form-submit')) {
      e.preventDefault();
      const artist = $('#artist').val().toLowerCase();
      const song = $('#song').val().toLowerCase();
      const input = {
        artist,
        song,
      };
      getSong(song, artist).then((response) => {
        showLyrics(response.lyrics, input);
      });
    }
  });
};

export default domEvents;
