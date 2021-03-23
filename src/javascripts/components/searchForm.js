const searchForm = () => {
  $('#search-form-container').html(`
  <form class="search-form">
  <h2 class="form-title">Song Lyrics Search Form</h2>
  <div class="form-group">
    <label for="artist">Artist</label>
    <input type="text" class="form-control" id="artist" aria-describedby="artist">
    <small id="artist" class="form-text text-muted">Welcome my son. Welcome to the machine.</small>
  </div>
  <div class="form-group">
    <label for="song">Song Name</label>
    <input type="text" class="form-control" id="song">
  </div>
  <button type="submit" class="btn btn-primary" id="search-form-submit">Submit</button>`);
};

export default searchForm;
