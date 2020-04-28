import Axios from "axios";
import { toast } from "react-toastify";

const api = Axios.create({
  baseURL: "https://localhost:44379/",
});

export const get = async (url, headers = null) => {
  try {
    const response = await api.get(url, { headers: headers });
    return response;
  } catch (error) {
    if (error.response) {
      handleRequestError(error.response.status);
      throw error;
    } else window.location.href = "/error";
  }
};

export const post = async (url, body, headers = null) => {
  try {
    const response = await api.post(url, body, headers);
    return response;
  } catch (error) {
    if (error.response) {
      handleRequestError(error.response.status);
      throw error;
    } else window.location.href = "/error";
  }
};

export const put = async (url, headers = null) => {
  try {
    const response = await api.put(url, headers);
    return response;
  } catch (error) {
    if (error.response) {
      handleRequestError(error.response.status);
      throw error;
    } else window.location.href = "/error";
  }
};

export const del = async (url, headers = null) => {
  try {
    const response = await api.del(url, headers);
    return response;
  } catch (error) {
    if (error.response) {
      handleRequestError(error.response.status);
      throw error;
    } else window.location.href = "/error";
  }
};

export default api;

const handleRequestError = (code) => errors[code]();

const errors = {
  500: () =>
    toast.error(`Falha ao processar sua solicitação no servidor. Código: 500`, {
      autoClose: false,
    }),
  401: () =>
    toast.warn(
      `Não autorizado. Seu acesso está expirado e será redirecionado ao login.`,
      {
        onClose: () => (window.location.href = "/app"),
      }
    ),
};
