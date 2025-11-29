const albuns = [
  {
    nome: "Trap",
    artista: "Lil Tecca",
    capa: "assets/imgs/capas/trap.jpg",
    musicas: [
      { nome: "Ransom", artista: "Lil Tecca feat. Juice WRLD", arquivo: "assets/trap/Lil Tecca feat. Juice WRLD - Ransom (Official Audio).opus" },
      { nome: "Pique Cr7", artista: "Romariz", arquivo: "assets/trap/Pique Cr7.opus" },
    ]
  },
  {
    nome: "Nada como um dia após o outro dia",
    artista: "Racionais",
    capa: "assets/imgs/capas/racionais.jpeg",
    musicas: [
      { nome: "Estilo Cachorro", artista: "Racionais", arquivo: "assets/racionais/AUD-20250419-WA0002.opus" },
      { nome: "A vida É Desafio", artista: "Racionais", arquivo: "assets/racionais/AUD-20250419-WA0003.opus" },
      { nome: "Da Ponte pra Cá", artista: "Racionais", arquivo: "assets/racionais/AUD-20250419-WA0004.opus" },
      { nome: "Jesus Chorou", artista: "Racionais", arquivo: "assets/racionais/AUD-20250419-WA0005.opus" },
      { nome: "Eu Sou 157", artista: "Racionais", arquivo: "assets/racionais/AUD-20250419-WA0006.opus" },
    ]
  },
  {
    nome: "Reflexao",
    artista: "Artistas Variados",
    capa: "assets/imgs/capas/refexao.png",
    musicas: [
      { nome: "Antes de ser Governador", artista: "MC Kanhoto MC Magal e MC Kadu DJ Faveliano e Yuri Martins ", arquivo: "assets/reflexao/musica3.mp3" },
      { nome: "PURE NEGGA - Cnv Sound Vol.14", artista: "KionStudio (Prod_ Skillz beatz)", arquivo: "assets/reflexao/musica4.opus" },
      { nome: "Fase boa da Vida", artista: "Sidnei", arquivo: "assets/reflexao/musica7.opus" },
      { nome: "Isso vale minha Vida", artista: "Mc Sid e Tavin", arquivo: "assets/reflexao/musica9.opus" },
      { nome: "MAS EXISTE UM LUGAR ONDE ENCONTRO PAZ - VOCE TA BEM COMO CE TA", artista: "Cryzin e Kaio Viana", arquivo: "assets/reflexao/musica10.mp3" },
      { nome: "CART O BLACK", artista: "KAYBLACK E MC CAVERINHA", arquivo: "assets/reflexao/musica11.mp3" },
      { nome: "Renasci das Cinzas", artista: "MC Daniel e MC Paulin da Capital", arquivo: "assets/reflexao/musica12.m4a" },
      { nome: "3 PECADOS DESPUES", artista: "MILO J", arquivo: "assets/reflexao/musica15.opus" },
      { nome: "AMAVA SUA BOCA HOJE AMO A BOCA DO CAIXA", artista: "MC PH (TREND TIK TOK) DJ Pedro-FUNK DE DRAK", arquivo: "assets/reflexao/musica16.mp3" },
    ]
  },
  {
    nome: "Trap",
    artista: "Jerri Alves",
    capa: "assets/imgs/capas/jerri-alves.jpeg",
    musicas: [
      { nome: "Aqui é Bailão", artista: "Jerri Alves", arquivo: "assets/reflexao/musica5.m4a" },
      { nome: "Cara do Sucesso", artista: "Jerri Alves", arquivo: "assets/reflexao/musica6.opus" },
    ]
  },
  {
    nome: "Rap",
    artista: "Major RD",
    capa: "assets/imgs/capas/60k.jpg",
    musicas: [
      { nome: "60K", artista: "Major RD", arquivo: "assets/reflexao/musica13.mp3" },
    ]
  },
  {
    nome: "Rap Geek",
    artista: "É o Dan",
    capa: "assets/imgs/capas/e-o-dan.jpeg",
    musicas: [
      { nome: "Sem Magia", artista: "É o Dan", arquivo: "assets/reflexao/musica2.opus" },
    ]
  },
  {
    nome: "Trap",
    artista: "Kyan",
    capa: "assets/imgs/capas/kyan.jpeg",
    musicas: [
     { nome: "USD", artista: "Kyan", arquivo: "assets/trap/USD.opus" },
    ]
  },
  {
    nome: "Trap",
    artista: "GUXTA",
    capa: "assets/imgs/capas/camisa21.jpg",
    musicas: [
      { nome: "CAMISA 21", artista: "GUXTA", arquivo: "assets/reflexao/musica8.mp3" },
    ]
  },
  {
    nome: "Rap",
    artista: "Sidnei",
    capa: "assets/imgs/capas/gladiador.jpeg",
    musicas: [
     { nome: "Gladiador", artista: "Sidnei", arquivo: "assets/reflexao/musica1.opus" },
    ]
  },
  {
    nome: "Rap",
    artista: "Marchi",
    capa: "assets/imgs/capas/devaneios.jpeg",
    musicas: [
    { nome: "Devaneios", artista: "Marchi", arquivo: "assets/reflexao/musica14.m4a" },
    ]
  },
  {
    nome: "Funk",
    artista: "MC Marks",
    capa: "assets/imgs/capas/internet.jpeg",
    musicas: [
     { nome: "QUEM NÃO CONHECE TA SEM INTERNET", artista: "MC Marks (DJ Boy e DJ GM)", arquivo: "assets/reflexao/musica17.opus" },
    ]
  },
  {
    nome: "Phonk",
    artista: "Artistas Variados",
    capa: "assets/imgs/capas/phonk.jpeg",
    musicas: [
     { nome: "QUEM NÃO CONHECE TA SEM INTERNET", artista: "MC Marks (DJ Boy e DJ GM)", arquivo: "assets/reflexao/musica17.opus" },
    ]
  },
  {
    nome: "The Eminem Show",
    artista: "Eminem",
    capa: "assets/imgs/capas/eminem.jpg",
    musicas: [
     { nome: "Without Me", artista: "Eminem", arquivo: "assets/rap/eminem/Without_Me.mp3" },
     { nome: "Superman", artista: "Eminem", arquivo: "assets/rap/eminem/superman.mp3" },
     { nome: "Till I Collapse", artista: "Eminem", arquivo: "assets/rap/eminem/Till_I_Collapse.mp3" },
    ]
  },
  {
    nome: "Churrasquinho Menos É Mais (Ao Vivo)",
    artista: "Grupo Menos É Mais",
    capa: "assets/imgs/capas/menos-e-mais.jpg",
    musicas: [
     { nome: "Vai me Dando Corda", artista: "Grupo Menos É Mais", arquivo: "assets/pagode/menos_e_mais/vai-me-dando-corda.mp3" },
    ]
  },
  {
    nome: "Pagode do Pericão",
    artista: "Péricles",
    capa: "assets/imgs/capas/pagode-do-pericao.jpg",
    musicas: [
     { nome: "Supera", artista: "Péricles", arquivo: "assets/pagode/pericles/pericles-supera.mp3" },
     { nome: "Eu te Amo", artista: "Péricles", arquivo: "assets/pagode/pericles/pericles-eu-te-amo.mp3" },
     { nome: "Teu Segredo", artista: "Péricles", arquivo: "assets/pagode/pericles/pericles-teu-segredo.mp3" },
    ]
  },
  {
    nome: "Back in Black",
    artista: "AC/DC",
    capa: "assets/imgs/capas/back-in-black.png",
    musicas: [
     { nome: "Back in Black", artista: "AC/DC", arquivo: "assets/rock/ACDC/back-in-black.mp3" },
    ]
  }
];

let playlistAtual = []; // Playlist ativa
let favoritos = []; // Lista de músicas favoritas
let indexAtual = 0;
let isPlaying = false;

const audio = document.getElementById("audio-player");
const playButton = document.querySelector(".controls button:nth-child(2)");
const prevButton = document.querySelector(".controls button:nth-child(1)");
const nextButton = document.querySelector(".controls button:nth-child(3)");
const songInfo = document.querySelector(".song-info");

function carregarAlbum(album) {
  playlistAtual = album.musicas;
  indexAtual = 0;
  exibirListaDeMusicas(playlistAtual);
  carregarMusica(indexAtual);
}

function favoritarMusica(musica, botao) {
  const index = favoritos.findIndex(fav => fav.nome === musica.nome && fav.artista === musica.artista);
  if (index === -1) {
    favoritos.push(musica);
    botao.textContent = "★";
  } else {
    favoritos.splice(index, 1);
    botao.textContent = "☆";
  }
}

function mostrarFavoritos() {
  exibirListaDeMusicas(favoritos);
}

function carregarMusica(index) {
  const musica = playlistAtual[index];
  audio.src = musica.arquivo;
  songInfo.innerHTML = `<p><strong>${musica.nome}</strong><br>${musica.artista}</p>`;
}

function exibirListaDeMusicas(lista) {
  const musicListContainer = document.querySelector(".music-list");
  musicListContainer.innerHTML = "";

  if (lista.length === 0) {
    musicListContainer.innerHTML = "<p>Nenhuma música encontrada</p>";
    return;
  }

  lista.forEach((musica, index) => {
    const musicItem = document.createElement("div");
    musicItem.classList.add("music-item");
    const isFavorito = favoritos.some(fav => fav.nome === musica.nome && fav.artista === musica.artista);

    musicItem.innerHTML = `
      <span>${musica.nome} - ${musica.artista}</span>
      <button class="fav-btn">${isFavorito ? "★" : "☆"}</button>
    `;

    musicItem.addEventListener("click", () => {
      indexAtual = index;
      carregarMusica(indexAtual);
      audio.play();
      playButton.textContent = "II";
      isPlaying = true;
    });

    const favBtn = musicItem.querySelector(".fav-btn");
    favBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      favoritarMusica(musica, favBtn);
    });

    musicListContainer.appendChild(musicItem);
  });
}

function exibirAlbuns() {
  const albumContainer = document.querySelector(".album-list");
  albumContainer.innerHTML = "";

  albuns.forEach(album => {
    const albumItem = document.createElement("div");
    albumItem.classList.add("album-item");
    albumItem.innerHTML = `
      <img src="${album.capa}" alt="${album.nome}">
      <p>${album.nome} - ${album.artista}</p>
    `;

    albumItem.addEventListener("click", () => carregarAlbum(album));
    albumContainer.appendChild(albumItem);
  });
}


function tocarOuPausar() {
  if (isPlaying) {
    audio.pause();
    playButton.textContent = "▶";
  } else {
    audio.play();
    playButton.textContent = "II";
  }
  isPlaying = !isPlaying;
}

function proximaMusica() {
  indexAtual = (indexAtual + 1) % playlistAtual.length;
  carregarMusica(indexAtual);
  if (isPlaying) audio.play();
}

function musicaAnterior() {
  indexAtual = (indexAtual - 1 + playlistAtual.length) % playlistAtual.length;
  carregarMusica(indexAtual);
  if (isPlaying) audio.play();
}

playButton.addEventListener("click", tocarOuPausar);
nextButton.addEventListener("click", proximaMusica);
prevButton.addEventListener("click", musicaAnterior);

exibirAlbuns();

audio.addEventListener("timeupdate", () => {
  const progresso = (audio.currentTime / audio.duration) * 100;
  document.getElementById("barra-progresso").value = progresso || 0;

  document.getElementById("tempo-atual").textContent = formatarTempo(audio.currentTime);
  document.getElementById("tempo-total").textContent = formatarTempo(audio.duration);
});

function formatarTempo(segundos) {
  const minutos = Math.floor(segundos / 60);
  const segundosRestantes = Math.floor(segundos % 60);
  return `${minutos}:${segundosRestantes < 10 ? "0" : ""}${segundosRestantes}`;
}

document.getElementById("barra-progresso").addEventListener("input", (e) => {
  const novaPosicao = (e.target.value / 100) * audio.duration;
  audio.currentTime = novaPosicao;
});
const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", () => {
  const termo = searchInput.value.toLowerCase();

  // Filtra músicas de todos os álbuns que contêm o termo no nome ou artista
  const musicasFiltradas = albuns.flatMap(album =>
    album.musicas.filter(musica =>
      musica.nome.toLowerCase().includes(termo) ||
      musica.artista.toLowerCase().includes(termo)
    )
  );

  // Se não digitou nada, limpa e exibe normalmente
  if (termo === "") {
    document.querySelector(".album-list").classList.remove("hidden");
    exibirListaDeMusicas([]);
  } else {
    document.querySelector(".album-list").classList.add("hidden");
    exibirListaDeMusicas(musicasFiltradas);
  }
});
function mostrarAlbuns() {
  document.querySelector(".album-list").classList.remove("hidden");
  document.querySelector(".music-list").innerHTML = "";
}

function mostrarBiblioteca() {
  const todasAsMusicas = albuns.flatMap(album => album.musicas);
  exibirListaDeMusicas(todasAsMusicas);
  document.querySelector(".album-list").classList.add("hidden");
}

function mostrarPlaylists() {
  const musicListContainer = document.querySelector(".music-list");
  musicListContainer.innerHTML = "<p>Playlists ainda não implementadas.</p>";
  document.querySelector(".album-list").classList.add("hidden");
}

function mostrarConfiguracoes() {
  const musicListContainer = document.querySelector(".music-list");
  musicListContainer.innerHTML = `
    <h3>⚙️ Configurações</h3>
    <div class="setting-item">
      <label>
        <input type="checkbox" id="dark-mode-toggle"> Modo Escuro
      </label>
    </div>
    <div class="setting-item">
      <label for="volume-slider">Volume Padrão:</label>
      <input type="range" id="volume-slider" min="0" max="1" step="0.01" value="${audio.volume}">
    </div>
    <div class="setting-item">
      <label>
        <input type="checkbox" id="show-covers-toggle" checked> Mostrar capas dos álbuns
      </label>
    </div>
  `;

  document.querySelector(".album-list").classList.add("hidden");

  document.getElementById("dark-mode-toggle").addEventListener("change", (e) => {
    document.body.classList.toggle("dark-mode", e.target.checked);
  });

  document.getElementById("volume-slider").addEventListener("input", (e) => {
    audio.volume = parseFloat(e.target.value);
  });

  document.getElementById("show-covers-toggle").addEventListener("change", (e) => {
    const show = e.target.checked;
    document.querySelectorAll(".album-item img").forEach(img => {
      img.style.display = show ? "block" : "none";
    });
  });
}





