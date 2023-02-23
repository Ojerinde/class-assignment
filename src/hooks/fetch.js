import { ref, reactive } from "vue";
export default function useFetch() {
  let isLoading = ref(false);
  let error = reactive({
    message: "",
    hasError: false,
  });
  const fetchRequest = async (
    requestConfig = {},
    getRequestData = () => {}
  ) => {
    isLoading.value = true;
    error = {
      message: "",
      hasError: false,
    };
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        headers: requestConfig.headers ? requestConfig.headers : {},
      });

      // If the response is not ok, throw an error
      if (!response.ok) {
        throw new Error(`${requestConfig.errorMessage}`);
      }

      // If the response is ok, get the data
      const responseBody = await response.json();

      // Formatting the body data to what I need
      const modifiedData = responseBody.results.map((student) => {
        return {
          id: student.id.value,
          name: `${student.name.first} ${student.name.last}`,
          location: `${student.location.street.name} ${student.location.street.number}`,
          email: student.email,
          img: student.picture.medium,
          title: student.name.title,
          username: student.login.username,
          phone: student.phone,
          age: student.dob.age,
          date: student.dob.date,
          address: `${student.location.street.name} ${student.location.street.number}`,
          country: student.location.country,
          city: student.location.city,
          state: student.location.state,
        };
      });

      // Send the data to the function that will use it
      getRequestData(modifiedData);
    } catch (err) {
      // If an error occured, set the error state
      (error = { hasError: true, message: err.message || "An error ocurred" }),
        setTimeout(() => {
          error = { hasError: false, message: "" };
        }, 2000);
    } finally {
      isLoading.value = false;
    }
    // After the request has been made, set the loading state to false
  };
  return { isLoading, error, fetchRequest };
}
