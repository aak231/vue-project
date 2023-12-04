<!-- src/components/Api.vue -->
<template>
  <div>
    <h1>API Page</h1>
    <button @click="getData">Press me</button>
    <div v-if="responseData !== null">
      <p>Client IP: {{ responseData.clientIp }}</p>
      <p>Location: {{ responseData.location }}</p>
      <!-- Display flag based on the country code -->
      <vue-country-flag :country="responseData.location" size='big' />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";

// Define reactive data
let responseData = ref<null | { clientIp: string; location: string;}>(null);

// Define a method to fetch data from the API
const getData = async () => {
  responseData.value = await fetchData();
};

const fetchData = async (): Promise<{ clientIp: string, location: string } | null> => {
  try {
    const response = await axios.get("https://aux9nri9h5.execute-api.us-east-1.amazonaws.com/default/myLocationDetector");
    return {
      clientIp: response.data.clientIp,
      location: response.data.country,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; // Handle the error as per your requirements
  }
};
</script>
