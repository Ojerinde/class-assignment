<template>
  <p className="track">School of Engineering staffs</p>
  <ul class="all__users" v-if="getAllStaffs.length > 0">
    <UserItem
      v-for="(student, index) in selectedStaffs"
      :key="index"
      :student="student"
    />
  </ul>
  <p v-else class="no__student">
    No staff founds
    <span>
      <base-button @click="window?.location.reload()">Retry</base-button>
    </span>
  </p>
  <UsersPagination
    v-if="getAllStaffs.length > 0"
    :staffPerPage="staffPerPage"
    :totalStudents="getAllStaffs.length"
    @set-page="changePageHandler"
  />
</template>

<script>
import UserItem from "./UserItem";
import UsersPagination from "./UsersPagination";

export default {
  name: "UsersHome",
  components: { UsersPagination, UserItem },
  data() {
    return {
      start: 0,
      staffPerPage: 6,
      selectedStaffs: [],
    };
  },
  computed: {
    getAllStaffs() {
      return this.$store.getters.getAllStaffs;
    },
    end() {
      return this.start + this.staffPerPage;
    },
  },
  watch: {
    start() {
      console.log("Watch");
      this.displayedStaffs();
    },
  },
  methods: {
    setStart(page) {
      this.start = page;
    },
    changePageHandler(newPage) {
      this.setStart(newPage * this.staffPerPage - this.staffPerPage);
    },
    displayedStaffs() {
      this.selectedStaffs = this.getAllStaffs.slice(this.start, this.end);
      console.log(this.selectedStaffs);
    },
  },
  // updated() {
  //   this.displayedStaffs();
  // },
};
</script>
