const songs = [
  {
    id: 1,
    name: "Suniya Suniys",
    artist: "Jas Preet",
    img: "https://i.ytimg.com/vi/AKH6ZNSnWOA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBdT2g9BI_495yYfVQdUN9i7rzudQ", // Replace with actual image URL
    genre: "Pop",
    source: "../multimedia/sunyia.crdownload",
  },
  {
    id: 2,
    name: "Tauba Tauba",
    artist: "Karan Aujla",
    img: "../multimedia/Tauba.jpg", // Replace with actual image URL
    genre: "Pop",
    source: "../multimedia/HusnTera.mp3", // Replace with actual song source URL
  },
  {
    id: 3,
    name: "Guli Mata",
    artist: "Shreya Ghoshal",
    img: "../multimedia/GuliMata.jpg", // Replace with actual image URL
    genre: "Pop",
    source: "../multimedia/Guli.mp3", // Replace with actual song source URL
  },
  {
    id: 4,
    name: "Jaanam",
    artist: "Arjit Singh",
    img: "https://i.ytimg.com/vi/Rs2_6wepwlk/maxresdefault.jpg", // Replace with actual image URL
    genre: "Rock",
    source: "../multimedia/Jaanam.mp3", // Replace with actual song source URL
  },
  {
    id: 5,
    name: "Illuminati",
    artist: "Sushub Shyan,Dabzee",
    img: "https://i.ytimg.com/vi/tOM-nWPcR4U/maxresdefault.jpg", // Replace with actual image URL
    genre: "Pop",
    source: "../multimedia/illuminati.mp3", // Replace with actual song source URL
  },
  {
    id: 6,
    name: "Millionaire",
    artist: "Yo Yo Honey Singh",
    img: "data:image/jpeg;base64,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", // Replace with actual image URL
    genre: "Hip-Hop",
    source: "../multimedia/Millionaire.mp3", // Replace with actual song source URL
  },
];
// Global variables
let currentSongId = 1;
let playlist = [];

// Them function
function toggleTheme() {
  const toggle = document.getElementById("themeToggle");
  //   console.log(toggle);
  const body = document.body;

  // Load the theme from localStorage if it exists
  const savedTheme = localStorage.getItem("theme") || "light";
  //   console.log(savedTheme);
  body.setAttribute("data-theme", savedTheme);
  toggle.checked = savedTheme === "dark";
  //   console.log(toggle.checked);
  // Toggle between light and dark themes
  toggle.addEventListener("change", () => {
    // console.log(toggle.checked);
    const themeName = document.getElementById("themeName");
    if (toggle.checked) {
      body.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      themeName.innerText = "Dark";
    } else {
      body.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      themeName.innerText = "Light";
    }
  });
}
toggleTheme();

// LEFT DIV SONG FILTER SECTION
function showSongs(filteredSongs) {
  const songList = document.getElementById("ulist");
  console.log(songList);
  songList.innerHTML = "";

  filteredSongs.forEach((element) => {
    const songDiv = document.createElement("li");
    songDiv.classList.add("song");
    songDiv.innerHTML = `${element.name} - ${element.artist}`;
    songList.appendChild(songDiv);
    songDiv.addEventListener("click", () => {
      currentSongId = element.id;
      renderCurrentSong(element);
    });
  });
}
showSongs(songs);
const filterGenre = document.getElementById("genre");
filterGenre.addEventListener("change", () => {
  const selectedGenre = filterGenre.value;
  //   console.log(selectedGenre);
  const filteredSongs = filterSongs(selectedGenre);
  //   console.log(filteredSongs);
  showSongs(filteredSongs);
});
function filterSongs(genre) {
  if (genre === "All") {
    return songs;
  }

  const songfit = songs.filter((song) => {
    // console.log(song.genre);
    // console.log(genre);
    return song.genre === genre;
  });
  return songfit;
}

// Mid Div Song card Rendering
function renderCurrentSong(song) {
  const container = document.getElementsByClassName("main-player")[0];
  container.innerHTML = "";

  const cardDiv = document.createElement("div");
  cardDiv.className = "player-card";

  const image = document.createElement("img");
  image.className = "cover-image";
  image.src = song.img;
  image.alt = "Song Image";

  const songDetails = document.createElement("div");
  songDetails.className = "song-details";

  const h2 = document.createElement("h2");
  h2.innerText = song.name;

  const h3 = document.createElement("h3");
  h3.innerText = song.artist;

  songDetails.appendChild(h2);
  songDetails.appendChild(h3);

  const audioEl = document.createElement("audio");
  audioEl.controls = true;
  audioEl.src = song.source;
  audioEl.autoplay = true;

  cardDiv.appendChild(image);
  cardDiv.appendChild(songDetails);

  container.appendChild(cardDiv);
  container.appendChild(audioEl);
}

// ADD TO PLAY LIST
function currentSong(index) {
  const song = songs[index];
  renderCurrentSong(song);
}
currentSong(currentSongId - 1);

// EXTRACTING BUTTON ELEMENTS
const nextBtn = document.getElementsByClassName("Btn")[1];
// console.log(nextBtn);
const prevBtn = document.getElementById("prevBtn");
// console.log(prevBtn);
const addBtn = document.getElementById("addPlaylist");

nextBtn.addEventListener("click", () => {
  currentSongId = (currentSongId + 1) % songs.length;
  currentSong(currentSongId);
});

prevBtn.addEventListener("click", () => {
  currentSongId = (currentSongId - 1 + songs.length) % songs.length;
  currentSong(currentSongId);
});

// CREATEING A PLAYLIST
let playlists = [];
let selectedPlayList = null;
const createBtn = document.getElementsByClassName("create-playlist-btn")[0];
createBtn.addEventListener("click", () => {
  const inputElement = document.getElementsByClassName("playlist-input")[0];
  const inputValue = inputElement.value;
  if (inputValue === "") {
    alert("Please Enter a play list Name");
    return;
  }
  if (playlists.some((playlist) => playlist.name === inputValue)) {
    alert("a playlist with this name already exists");
    return;
  }
  const newPlaylist = {
    name: inputValue,
    songs: [],
  };
  playlists.push(newPlaylist);
  inputElement.value = "";
  displayPlayList();
});

// DISPLAYING A PLAYLIST NAMES
function displayPlayList() {
  const playListContainer = document.getElementById("playlistEl");
  playListContainer.innerHTML = "";

  playlists.forEach((list) => {
    const newLi = document.createElement("li");
    // console.log(inputValue);
    newLi.innerText = list.name;

    newLi.addEventListener("click", () => {
      selectedPlayList = list;
      document.getElementById(
        "playlistTitle"
      ).innerText = `Selected Playlist: ${list.name}`;
      updatePlaylistSongsUI();
    });
    playListContainer.appendChild(newLi);
  });
}
displayPlayList();

// FUNCTION TO DISPLAY THE SONGS OF A PLAYLIST
function updatePlaylistSongsUI() {
  const playlistSongsContainer = document.getElementById("currentList");
  playlistSongsContainer.innerHTML = ""; // Clear existing songs
  if (selectedPlayList) {
    selectedPlayList.songs.forEach((song) => {
      const songItem = document.createElement("li");
      const deleteBtn = document.createElement("button");
      deleteBtn.className = "deleteBtn";
      deleteBtn.innerHTML = "&times";
      songItem.innerText = `${song.name} - ${song.artist}`;

      // TO DELETE THE SONG FROM THE PLAYLIST
      deleteBtn.addEventListener("click", () => {
        playlistSongsContainer.removeChild(songItem);
        selectedPlayList.songs = selectedPlayList.songs.filter(
          (s) => s !== song
        );
        updatePlaylistSongsUI();
      });
      playlistSongsContainer.appendChild(songItem);
      songItem.appendChild(deleteBtn);
    });
  }
}

addBtn.addEventListener("click", () => {
  const crntSong = songs[currentSongId - 1];

  if (selectedPlayList === null) {
    alert("Please select a playlist first.");
    return;
  }

  // Add the current song to the selected playlist

  selectedPlayList.songs.push(crntSong);

  // Update the UI to show the updated playlist
  updatePlaylistSongsUI();
});

// SEARCH SONGS FUNCTION

function displaySongs(songArray) {
  const songList = document.getElementById("songList");
  songList.innerHTML = ""; // Clear the previous list
  songArray.forEach((song) => {
    console.log(song);

    const songItem = document.createElement("div");
    songItem.className = "song-item";
    songItem.innerText = `${song.name} by ${song.artist}`;
    songItem.addEventListener("click", () => {
      renderCurrentSong(song);
    });
    songList.appendChild(songItem);
  });
}

// Function to filter songs based on search input
function searchSongs(searchTerm) {
  const filteredSongs2 = songs.filter(
    (song) =>
      song.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (searchTerm === "") {
    songList.style.display = "none";
  } else {
    if (filteredSongs2.length > 0) {
      songList.style.display = "block";
      displaySongs(filteredSongs2);
    } else {
      songList.style.display = "none";
    }
  }
}

// Initialize: Display all songs initially
// displaySongs(songs);

// Search input event listener
const searchInput = document.getElementsByClassName("search-input")[0];
searchInput.addEventListener("input", (event) => {
  const searchTerm = event.target.value;
  console.log(searchTerm);
  searchSongs(searchTerm);
});
