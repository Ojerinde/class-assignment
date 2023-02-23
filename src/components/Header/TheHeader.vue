<template>
  <header class="main__header">
    <div class="logo">
      <font-awesome-icon
        icon="fa-solid fa-house-chimney"
        class="home__icon"
        @click="goHomeHandler"
      />
      <h3>AltSchool</h3>
    </div>
    <nav>
      <ul>
        <li>
          <router-link to="/frontend"> Frontend </router-link>
        </li>
        <li>
          <router-link to="/backend"> Backend </router-link>
        </li>
        <li>
          <router-link to="/cloud"> Cloud </router-link>
        </li>
        <li>
          <router-link to="/users"> Staffs </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const goHomeHandler = () => {
      router.push("/");
    };
    return { goHomeHandler };
  },
};
</script>
