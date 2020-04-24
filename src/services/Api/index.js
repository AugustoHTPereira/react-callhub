import Axios from "axios";

const api = Axios.create({
  baseURL: "http://localhost:5000/",
});

export const get = async (url, headers = null) => {
  const response = await api.get(url, { headers: headers });
  if (response.status === 401) {
    window.location.href = "/login?redirect=" + window.location.pathname;
    return false;
  } else return response;
};

export const post = async (url, body, headers = null) => {
  const response = await api.post(url, body, headers);

  if (response.status === 401) {
    window.location.href = "/login?redirect=" + window.location.pathname;
    return false;
  } else return response;
};

export const put = async (url, headers = null) => {
  const response = await api.put(url, headers);

  if (response.status === 401) {
    window.location.href = "/login?redirect=" + window.location.pathname;
    return false;
  } else return response;
};

export const del = async (url, headers = null) => {
  const response = await api.del(url, headers);

  if (response.status === 401) {
    window.location.href = "/login?redirect=" + window.location.pathname;
    return false;
  } else return response;
};

export default api;
