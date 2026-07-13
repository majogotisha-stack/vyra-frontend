import axios from "axios";

const API_URL = "http://localhost:5000";

export async function uploadVideo(file) {
  const formData = new FormData();

  formData.append("video", file);

  const response = await axios.post(
    `${API_URL}/upload`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
}