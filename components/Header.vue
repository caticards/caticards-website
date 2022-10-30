<template>
    <header class="header">
        <div class="header__logo">
            <NuxtLink to="/"> <img src="~assets/images/logo.webp" alt="logo" /></NuxtLink>
        </div>
        <nav class="nav">
            <img src="~assets/images/icon-menu.png" alt="icône de menu">

            <p class="nav__link nav__link--active ">  <NuxtLink to="/commander-une-carte">Commander</NuxtLink>  </p>
            <p class="nav__link"> <a href="./help.html">FAQ</a> </p>



        </nav>
        <div class="header__icon">
            <img src="~assets/images/header-icon.svg">
        </div>

    </header>
</template>