<template>
  <div className="user__card">
    <div className="user__box user__box--front">
      <figure>
        <img :src="`${student?.img}`" :alt="`${student?.name}`" />
      </figure>
      <div className="user__detail-box">
        <div className="user__detail-card">
          <h4>Name:</h4>
          <h2>{{ student.name }}</h2>
        </div>
        <div className="user__detail-card">
          <h4>Username:</h4>
          <h2>{{ student?.username }}</h2>
        </div>
        <div className="user__detail-card">
          <h4>Email:</h4>
          <h2>{{ student?.email }}</h2>
        </div>
        <div className="user__detail-card">
          <h4>Phone:</h4>
          <h2>{{ student?.phone }}</h2>
        </div>
      </div>
    </div>
    <div className="user__box user__box--back">
      <base-buton @click="$router.push(`/users/${student.username}`)">
        See more
      </base-buton>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserItem",
  props: {
    student: Object,
  },
};
</script>
