<template>
  <section class="section__home">
    <header class="header__home">
      <nav>
        <img src="../../assets/logo.png" alt="AltSchool" class="logo" />
        <ul>
          <li>
            <router-link to="/frontend">Frontend</router-link>
          </li>
          <li>
            <router-link to="/backend">Backend </router-link>
          </li>
          <li>
            <router-link to="/cloud">Cloud </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <div class="home">
      <h1>Welcome to School of Engineering</h1>
      <h3>Kindly select any of the track below</h3>
      <p @click="this.$router.push('/users')">See all staffs (Users)</p>
      <ul>
        <li>
          <font-awesome-icon
            icon="fa-brands fa-react"
            class="home__icon home__icon--1"
          />
          <router-link to="/frontend">
            Frontend
            <br />
            Engineering
          </router-link>
        </li>
        <li>
          <font-awesome-icon
            icon="fa-brands fa-node-js"
            class="home__icon home__icon--2"
          />
          <router-link to="/backend">
            Backend
            <br />
            Engineering
          </router-link>
        </li>
        <li>
          <font-awesome-icon
            icon="fa-solid fa-cloud"
            class="home__icon home__icon--3"
          />
          <router-link to="/cloud">
            Cloud <br />
            Engineering
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppHome",
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
