<template>
<nav class="navbar navbar-dark bg-dark navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Desafio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'home' }">Início</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'users' }">Usuários</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'userscreate' }">Criar usuário</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>

</template>