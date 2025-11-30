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
  },
  {
    nome: "Astroworld",
    artista: "Travis Scott",
    capa: "assets/imgs/capas/Astroworld.jpg",
    musicas: [
     { nome: "Sicko Mode", artista: "Travis Scott (feat. Drake)", arquivo: "assets/trap/travis/sicko-mode.mp3" },
    ]
  },
  {
    nome: "Thriller",
    artista: "Michael Jackson",
    capa: "assets/imgs/capas/Thriller.jpg",
    musicas: [
     { nome: "Billie Jean", artista: "Michael Jackson", arquivo: "assets/pop/Michael_Jackson/Billie_Jean.mp3" },
     { nome: "Beat It", artista: "Michael Jackson", arquivo: "assets/pop/Michael_Jackson/Beat_It.mp3" },
    ]
  },
  {
    nome: "Mhrap",
    artista: "Mhrap",
    capa: "assets/imgs/capas/Mhrap.jpg",
    musicas: [
     { nome: "Tipo Madara", artista: "Mhrap", arquivo: "assets/rap_geek/mhrap/Tipo-Madara.mp3" },
     { nome: "Ninja Descolado", artista: "Mhrap", arquivo: "assets/rap_geek/mhrap/Ninja-Descolado.mp3" },
     { nome: "Tipo Kakuzu", artista: "Mhrap", arquivo: "assets/rap_geek/mhrap/Tipo-Kakuzu.mp3" },
    ]
  },
  {
    nome: "Single",
    artista: "Akashi",
    capa: "assets/imgs/capas/akashi.jpg",
    musicas: [
     { nome: "Na Fumaça", artista: "Akashi", arquivo: "assets/rap_geek/akashi/na-fumaca.unknown" },
    ]
  },
  {
    nome: "Maquina do Tempo",
    artista: "Matue",
    capa: "assets/imgs/capas/matue.jpg",
    musicas: [
     { nome: "777-666", artista: "Matue", arquivo: "assets/trap/matue/777-666.mp3" },
     { nome: "Gorila Roxo", artista: "Matue", arquivo: "assets/trap/matue/Gorilla-Roxo.mp3" },
    ]
  },
  {
    nome: "GNX",
    artista: "Kendrick Lamar",
    capa: "assets/imgs/capas/kendrick.jpg",
    musicas: [
     { nome: "Squabble Up", artista: "Kendrick Lamar", arquivo: "assets/rap/kendrick/squabble-up.mp3" },
    ]
  },
  {
    nome: "Thug Theory",
    artista: "2Pac, Pop Smoke, Biggie, DMX, Eazy E, Ice Cube, Dr Dre, NWA, Nipsey, Snoop Dogg",
    capa: "assets/imgs/capas/Write_This_Down.jpg",
    musicas: [
     { nome: "Write This Down", artista: "2Pac, Pop Smoke, Biggie, DMX, Eazy E, Ice Cube, Dr Dre, NWA, Nipsey, Snoop Dogg", arquivo: "assets/rap/Write-This-Down/Write_This_Down.mp3" },
    ]
  },
  {
    nome: "Mhrap X HoodTrap",
    artista: "Mhrap",
    capa: "assets/imgs/capas/mhrap-hoodtrap.jpg",
    musicas: [
     { nome: "Tipo Madara - Hoodtrap", artista: "Mhrap", arquivo: "assets/rap_geek/mhrap/tipo-madara-hoodtrap.unknown" },
    ]
  }
];



// ------------------------------------------
// VARIÁVEIS PRINCIPAIS
// ------------------------------------------
let playlistAtual = [];
let favoritos = [];
let indexAtual = 0;
let isPlaying = false;

const audio = document.getElementById("audio-player");
const playBtn = document.getElementById("play-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const favBtn = document.getElementById("fav-btn");
const songInfo = document.querySelector(".song-info");

// ------------------------------------------
// CARREGAR ÁLBUM
// ------------------------------------------
function carregarAlbum(album) {
  playlistAtual = album.musicas;
  indexAtual = 0;
  exibirListaDeMusicas(playlistAtual);
  carregarMusica(0);
}

// ------------------------------------------
// FAVORITAR
// ------------------------------------------
function favoritarMusica(musica) {
  const index = favoritos.findIndex(f => f.nome === musica.nome && f.artista === musica.artista);

  if (index === -1) {
    favoritos.push(musica);
  } else {
    favoritos.splice(index, 1);
  }

  atualizarIconeFavorito();
  exibirListaDeMusicas(playlistAtual);
}

// Ícone do player sincronizado
function atualizarIconeFavorito() {
  const musica = playlistAtual[indexAtual];
  const isFav = favoritos.some(f => f.nome === musica.nome && f.artista === musica.artista);

  favBtn.textContent = isFav ? "★" : "☆";
}

// ------------------------------------------
// MOSTRAR FAVORITOS
// ------------------------------------------
function mostrarFavoritos() {
  playlistAtual = favoritos;
  exibirListaDeMusicas(favoritos);
}

// ------------------------------------------
// CARREGAR MÚSICA
// ------------------------------------------
function carregarMusica(index) {
  const musica = playlistAtual[index];

  audio.src = musica.arquivo;

  songInfo.innerHTML = `
    <p><strong>${musica.nome}</strong><br><small>${musica.artista}</small></p>
  `;

  atualizarIconeFavorito();
}

// ------------------------------------------
// EXIBIR MÚSICAS
// ------------------------------------------
function exibirListaDeMusicas(lista) {
  const musicList = document.querySelector(".music-list");
  musicList.innerHTML = "";
  
  lista.forEach((musica, index) => {
    const item = document.createElement("div");
    item.classList.add("music-item");
    item.style.opacity = "0";
    item.style.transform = "translateY(8px)";
    setTimeout(() => {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }, 20 * index);

    const isFav = favoritos.some(f => f.nome === musica.nome && f.artista === musica.artista);

    item.innerHTML = `
      <span>${musica.nome} - ${musica.artista}</span>
      <button class="fav-btn">${isFav ? "★" : "☆"}</button>
    `;

    // tocar ao clicar
    item.addEventListener("click", () => {
      playlistAtual = lista;
      indexAtual = index;
      carregarMusica(indexAtual);
      audio.play();
      isPlaying = true;
      playBtn.textContent = "II";
    });

    // favoritar
    item.querySelector(".fav-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      favoritarMusica(musica);
    });

    musicList.appendChild(item);
  });
}

// ------------------------------------------
// EXIBIR ÁLBUNS
// ------------------------------------------
function mostrarAlbuns() {
  const albumList = document.getElementById("album-list");
  albumList.classList.remove("hidden");
  exibirAlbuns();
  document.querySelector(".music-list").innerHTML = "";
}

function exibirAlbuns() {
  const container = document.getElementById("album-list");
  container.innerHTML = "";

  albuns.forEach((album, index) => {
    const item = document.createElement("div");
    item.classList.add("album-item");
    item.style.opacity = "0";
    item.style.transform = "translateY(10px)";

    setTimeout(() => {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }, 30 * index);

    item.innerHTML = `
      <img src="${album.capa}" alt="${album.nome}">
      <p>${album.nome}<br><small>${album.artista}</small></p>
    `;

    item.addEventListener("click", () => carregarAlbum(album));
    container.appendChild(item);
  });
}

// ------------------------------------------
// PLAYER
// ------------------------------------------
function tocarOuPausar() {
  if (isPlaying) {
    audio.pause();
    playBtn.textContent = "▶";
  } else {
    audio.play();
    playBtn.textContent = "II";
  }
  isPlaying = !isPlaying;
}

function musicaAnterior() {
  indexAtual = (indexAtual - 1 + playlistAtual.length) % playlistAtual.length;
  carregarMusica(indexAtual);
  if (isPlaying) audio.play();
}

function proximaMusica() {
  indexAtual = (indexAtual + 1) % playlistAtual.length;
  carregarMusica(indexAtual);
  if (isPlaying) audio.play();
}

playBtn.addEventListener("click", tocarOuPausar);
prevBtn.addEventListener("click", musicaAnterior);
nextBtn.addEventListener("click", proximaMusica);
favBtn.addEventListener("click", () => favoritarMusica(playlistAtual[indexAtual]));

// ------------------------------------------
// PROGRESSO
// ------------------------------------------
audio.addEventListener("timeupdate", () => {
  if (isNaN(audio.duration)) return;

  const progresso = (audio.currentTime / audio.duration) * 100;
  document.getElementById("barra-progresso").value = progresso;

  document.getElementById("tempo-atual").textContent = formatarTempo(audio.currentTime);
  document.getElementById("tempo-total").textContent = formatarTempo(audio.duration);
});

document.getElementById("barra-progresso").addEventListener("input", (e) => {
  const novaPosicao = (e.target.value / 100) * audio.duration;
  audio.currentTime = novaPosicao;
});

function formatarTempo(seg) {
  if (!seg) return "0:00";
  const m = Math.floor(seg / 60);
  const s = Math.floor(seg % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

// Ativar modo escuro
function mostrarConfiguracoes() {
  const musicListContainer = document.querySelector(".music-list");

  musicListContainer.innerHTML = `
    <h3>⚙️ Configurações</h3>

    <div class="setting-item">
      <label>
        <input type="checkbox" id="dark-mode-toggle"> Modo Escuro
      </label>
    </div>
  `;

  document.querySelector(".album-list").classList.add("hidden");

  const toggle = document.getElementById("dark-mode-toggle");

  toggle.checked = document.body.classList.contains("dark-mode");

  toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode", toggle.checked);
  });
}


// ------------------------------------------
// BUSCA DINÂMICA
// ------------------------------------------
const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", () => {
  const termo = searchInput.value.toLowerCase();

  if (termo === "") {
    mostrarAlbuns();
    return;
  }

  const filtradas = albuns.flatMap(a =>
    a.musicas.filter(m =>
      m.nome.toLowerCase().includes(termo) ||
      m.artista.toLowerCase().includes(termo)
    )
  );

  playlistAtual = filtradas;
  document.getElementById("album-list").classList.add("hidden");
  exibirListaDeMusicas(filtradas);
});

// iniciar
exibirAlbuns();





