import axios from "./axios"; // Assuming this file is named axios.js

async function fetchData() {
  try {
    const response = await axios.get("http://127.0.0.1:8000"); // Use relative paths
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
