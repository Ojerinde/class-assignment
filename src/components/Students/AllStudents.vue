<template>
  <p class="track" v-if="students.length > 0">
    {{ formattedTrack }} Engineering Students
  </p>
  <div class="student__box">
    <ul class="students" v-if="students.length > 0">
      <StudentItem
        v-for="(student, index) in students"
        :key="index"
        :id="student.username"
        :fullname="student.name"
        :location="student.location"
      />
      ))
    </ul>
    <p v-else class="no__student">
      No student founds
      <span>
        <BaseButton @click="window.location.reload()">Retry</BaseButton>
      </span>
    </p>
    <ThePagination
      v-if="students.length > 0"
      questionPerPage="questionPerPage"
      totalStudents="students.length"
      @onChange="changePageHandler"
    />
  </div>
</template>

<script>
import BaseButton from "../../UI/Button/BaseButton";
import ThePagination from "../Pagination/ThePagination";
import StudentItem from "./StudentItem";
export default {
  name: "AllStudents",
  components: { BaseButton, ThePagination, StudentItem },
  data() {
    return {
      start: 0,
      questionPerPage: 5,
      students: [],
      track: "",
    };
  },
  computed: {
    end() {
      return this.start + this.questionPerPage;
    },
    formattedTrack() {
      return this.track.toUpperCase();
    },
  },
  methods: {
    setStart(page) {
      this.start = page;
    },
    changePageHandler(newPage) {
      this.setStart(newPage * this.questionPerPage - this.questionPerPage);
    },
  },
  onMounted() {
    this.track = this.$routes.path;
    console.log(this.$routes.path);
  },
};
</script>
