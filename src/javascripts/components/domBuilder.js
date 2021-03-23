const domBuilder = () => {
  const domString = `<div class="search-form-container mx-auto" id="search-form-container"></div>
                     <div class="lyrics-container mx-auto" id="lyrics-container"></div>`;
  $('#app').html(domString);
};

export default domBuilder;
