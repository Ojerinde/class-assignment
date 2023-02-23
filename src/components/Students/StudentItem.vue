<template>
  <li className="student">
    <div className="student__detail">
      <h2>{fullname}</h2>
      <h4>{location}</h4>
    </div>
    <BaseButton className="student__button" onClick="{LearnMoreHandler}">
      Learn more
    </BaseButton>
  </li>
</template>
<script>
import BaseButton from "../../UI/Button/BaseButton";

export default {
  name: "StudentItem",
  components: { BaseButton },
  props: {
    fullname: String,
    location: String,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    LearnMoreHandler() {
      // this.student = students.find((student) => student.username === params.id)
    },
  },
};
</script>

<style scoped></style>
