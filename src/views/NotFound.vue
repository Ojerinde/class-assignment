<template>
  <div className="error__page">
    <p>Seems as if you are lost in the cloud.</p>
    <h2>Error 404! This page doesn't exist.</h2>
    <BaseButton @click.prevent="">Go Home</BaseButton>
  </div>
</template>

<script>
import BaseButton from "../components/UI/BaseButton.vue";

export default {
  name: "NotFound",
  components: { BaseButton },
  computed: {},
  methods: {},
};
</script>
