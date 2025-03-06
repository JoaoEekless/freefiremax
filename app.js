let users = JSON.parse(localStorage.getItem("users")) || {};

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (users[username] && users[username] === password) {
    showMainScreen();
  } else {
    alert("Usuário ou senha incorretos.");
  }
}

function showSignup() {
  document.getElementById("login-screen").style.display = "none";
  document.getElementById("signup-screen").style.display = "block";
}

function showLogin() {
  document.getElementById("signup-screen").style.display = "none";
  document.getElementById("login-screen").style.display = "block";
}

function signup() {
  const username = document.getElementById("new-username").value.trim();
  const password = document.getElementById("new-password").value.trim();

  if (!username || !password) {
    alert("Preencha todos os campos.");
    return;
  }

  if (users[username]) {
    alert("Usuário já existe.");
  } else {
    users[username] = password;
    localStorage.setItem("users", JSON.stringify(users));
    alert("Usuário cadastrado com sucesso!");
    showLogin();
  }
}

function showMainScreen() {
  document.getElementById("login-screen").style.display = "none";
  document.getElementById("signup-screen").style.display = "none";
  document.getElementById("main-screen").style.display = "block";
}

const apps = {
  games: {
    "Roblox": { description: "Plataforma de criação de jogos online.", url: "https://www.roblox.com/pt/download/client?os=win" },
    "Point Blank": { description: "É um videogame de tiro em primeira pessoa.", url: "https://pb.ongame.net/download/zepetto-downloader/" },
  },
  tools: {
    "Discord": {description: "É uma aplicação gratuita que foi projetado inicialmente para comunidades de jogos.", url:"https://discord.com/api/downloads/distributions/app/installers/latest?channel=stable&platform=win&arch=x64"}
  },
};

function updateAppList() {
  const category = document.getElementById("category").value;
  const appList = document.getElementById("app-list");

  appList.innerHTML = "<option value=''>Selecione um aplicativo</option>";
  if (category) {
    Object.keys(apps[category]).forEach(app => {
      const option = document.createElement("option");
      option.value = app;
      option.textContent = app;
      appList.appendChild(option);
    });
  }
}

function showAppDescription() {
  const category = document.getElementById("category").value;
  const app = document.getElementById("app-list").value;
  const description = document.getElementById("app-description");

  if (category && app) {
    description.textContent = `Descrição: ${apps[category][app].description}`;
  } else {
    description.textContent = "Descrição: Selecione um app.";
  }
}

function downloadApp() {
  const category = document.getElementById("category").value;
  const app = document.getElementById("app-list").value;

  if (!app) {
    alert("Selecione um aplicativo para continuar.");
    return;
  }

  const appUrl = apps[category][app].url;
  if (appUrl) {
    window.open(appUrl, "_blank");
  } else {
    alert("URL do aplicativo não disponível.");
  }
}
