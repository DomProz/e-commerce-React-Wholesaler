import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjM3NzY2MDU1Y2JjNzZjZjg3M2EwYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3Mjg1NTIyMiwiZXhwIjoxNjczMTE0NDIyfQ.";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
