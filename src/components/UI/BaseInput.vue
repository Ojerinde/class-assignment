<template>
  <input :type="type" />
</template>
<script>
export default {
  name: "BaseInput",
  props: {
    type: {
      type: String,
      required: true,
      // validator: function (value) {
      //   return (
      //     ['syncing', 'synced', 'version-conflict', 'error'].indexOf(value) !==
      //     -1
      //   );
      // },
    },
  },
};
</script>
