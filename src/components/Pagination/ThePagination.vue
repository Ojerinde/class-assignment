<template>
  <div class="pagination__card">
    <div className="pagination__icons--box">
      <v-icon
        name="sync"
        scale="2"
        @click="prevHandler"
        class="pagination__icons--prev"
      />
      <p className="pagination__icons--paragraph">{{ page }}</p>
      <v-icon
        name="sync"
        scale="2"
        @click="nextHandler"
        class="pagination__icons--next"
      />
    </div>
    <div className="pagination__buttons">
      {{ arrayOfButton }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    questionPerPage: String,
    totalQuestions: String,
  },
  data() {
    return {
      page: 0,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalQuestions / this.questionPerPage);
    },
    arrayOfButton() {
      return Array.from(
        { length: this.totalPages() },
        (_, index) => index + 1
      ).map((each) => (
        <button
          key={each}
          onClick={() => {
            this.$emit("onChange", each);
            this.setPage(each);
          }}
        >
          {`${each}`.padStart(2, "0")}
        </button>
      ));
    },
  },
  methods: {
    setPage(page) {
      this.page = page;
    },
    prevHandler() {
      if (this.page === 1) return;
      this.setPage(this.page - 1);
      this.$emit("onChange", this.page - 1);
    },
    nextHandler() {
      if (this.page === this.totalPages()) return;
      this.setPage(this.page + 1);
      this.$emit("onChange", this.page + 1);
    },
  },
};
</script>
