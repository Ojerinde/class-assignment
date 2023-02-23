<template>
  <div>
    <BaseButton @click="goBackHandler" class="back__button">Go Back</BaseButton>
    <div class="detail__card" v-if="student">
      <figure>
        <img :src="student.img" :alt="student.name" />
      </figure>
      <div class="detail__box">
        <div class="detail__box--card">
          <h4>Name:</h4>
          <h2>{{ student.title }} {{ student.name }}</h2>
        </div>
        <div class="detail__box--card">
          <h4>Username:</h4>
          <h2>{{ student.username }}</h2>
        </div>
        <div class="detail__box--card">
          <h4>Email:</h4>
          <h2>{{ student.email }}</h2>
        </div>
        <div class="detail__box--card">
          <h4>Phone:</h4>
          <h2>{{ student.phone }}</h2>
        </div>
        <div class="detail__box--cards">
          <div>
            <h4>Age:</h4>
            <h2>{{ student.age }}</h2>
          </div>
          <div>
            <h4>D.O.B:</h4>
            <h2>{{ formattedDob }}</h2>
          </div>
        </div>
        <div class="detail__box--cards">
          <div>
            <h4>Address:</h4>
            <h2>{{ student.address }}</h2>
          </div>
          <div>
            <h4>Country:</h4>
            <h2>{{ student.country }}</h2>
          </div>
        </div>
        <div class="detail__box--cards">
          <div>
            <h4>City:</h4>
            <h2>{{ student.city }}</h2>
          </div>
          <div>
            <h4>State:</h4>
            <h2>{{ student.state }}</h2>
          </div>
        </div>
      </div>
    </div>
    <h1 v-else>Student not found</h1>
  </div>
</template>

<script>
import BaseButton from "../../UI/Button/BaseButton";

export default {
  name: "StudentDetails",
  components: { BaseButton },
  data() {
    return {
      student: null,
    };
  },
  computed: {
    formattedDob() {
      const dob = new Date(`${this.student?.date}`);
      const day = `${dob.getDate()}`.padStart(2, 0);
      const month = `${dob.getMonth()}`.padStart(2, 0);
      const year = dob.getFullYear(); // Formatting the D.O.B const formattedDob =
      `${day}/${month}/${year}`;
      return `${day}/${month}/${year}`;
    },
  },
  methods: {
    findStudent() {
      // this.student = students.find((student) => student.username === params.id)
    },
    goBackHandler() {
      // navigate(`${pathname.slice(0, lastIndexOfSlash)}`);
    },
  },
};
</script>
