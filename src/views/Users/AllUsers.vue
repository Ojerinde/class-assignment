<template>
  <the-header></the-header>
  <the-loading-spinner v-if="isLoading"></the-loading-spinner>
  <error-modal
    v-if="!isLoading && error.hasError"
    :message="error.message"
  ></error-modal>
  <users-home></users-home>
</template>

<script>
import useFetch from "@/hooks/fetch";
import TheHeader from "@/components/Header/TheHeader";
import TheLoadingSpinner from "@/components/LoadingSpinner/TheLoadingSpinner.vue";
import ErrorModal from "@/components/ErrorModal/ErrorModal.vue";
import UsersHome from "./UsersHome.vue";
import { useStore } from "vuex";
export default {
  components: { TheHeader, TheLoadingSpinner, ErrorModal, UsersHome },

  setup() {
    const { isLoading, error, fetchRequest: fetchAllStaffs } = useFetch();
    const store = useStore();
    const getData = (responseObj) => {
      store.dispatch("fetchStaffs", responseObj);
    };
    fetchAllStaffs(
      {
        url: "https://randomuser.me/api/1.4/?results=50&?nat=au,br,ca,ch",
        errorMessage: "Could not fetch backend students",
      },
      getData
    );
    return { isLoading, error };
  },
};
</script>
