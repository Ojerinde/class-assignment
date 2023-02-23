<template>
  <div class="error__box">
    <p class="error__modal--message">{{ message }}</p>
  </div>
</template>
<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
};
</script>
