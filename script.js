document.addEventListener('DOMContentLoaded', function() {
  fetch('https://script.google.com/macros/s/AKfycbxYVDcQlamq8gCUB4Fx0yGvLruz754a57IDmTFjkFDagc3nsk0qTjFJGkFX9Gz79QBX/exec')
    .then(response => response.json())
    .then(data => {
      const musicList = document.getElementById('music-list');
      console.log(data);
      data.forEach(row => {
        if (row[0] !== 'Artist' && row[1] !== 'Song') { // Skip the header row
          
          const [artist, song, chordsLink, tabsLink, sheetLink] = row;
          const li = document.createElement('li');
          
          let links = [];
          if (chordsLink) links.push(`[<a href="${chordsLink}">chords</a>]`);
          if (tabsLink) links.push(`[<a href="${tabsLink}">tabs</a>]`);
          if (sheetLink) links.push(`[<a href="${sheetLink}">sheet</a>]`);
          
          li.innerHTML = `${artist} - ${song} ${links.join(' ')}`;
          musicList.appendChild(li);
        }
      });
    })
    .catch(error => console.error('Error:', error));
});