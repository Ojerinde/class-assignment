<template>
  <div className="user-pagination__card">
    <div className="user-pagination__icons--box">
      <font-awesome-icon
        icon="fa-solid fa-angles-left"
        @click="prevHandler"
        class="user-pagination__icons--next"
      />
      <p class="user-pagination__icons--paragraph">{{ page }}</p>
      <font-awesome-icon
        icon="fa-solid fa-angles-right"
        @click="nextHandler"
        class="user-pagination__icons--prev"
      />
    </div>
    <div class="user-pagination__buttons">
      <button v-for="each in total_pages" :key="each" @click="emitFn(each)">
        {{ each }}
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "UsersPagination",
  props: {
    staffPerPage: {
      type: Number,
      required: true,
    },
    totalStudents: {
      type: Number,
      required: true,
    },
  },
  emits: ["set-page"],
  data() {
    return {
      page: 1,
    };
  },
  computed: {
    total_pages() {
      return Math.ceil(this.totalStudents / this.staffPerPage);
    },
  },
  methods: {
    setPage(page) {
      this.page = page;
    },
    prevHandler() {
      if (this.page === 1) return;
      this.setPage(this.page - 1);
      // Sending page number to the parent component where the pagination components is used
      this.$emit("set-page", this.page - 1);
    },
    nextHandler() {
      if (this.page === this.total_pages) return;
      this.setPage(this.page + 1);
      // Sending page number to the parent component where the pagination components is used
      this.$emit("set-page", this.page + 1);
    },
    emitFn(each) {
      this.$emit("set-page", each);
      this.setPage(each);
    },
  },
};
</script>
