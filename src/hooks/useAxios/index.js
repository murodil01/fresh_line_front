import axios from "axios";

export const usaAxios = () => {
  const request = ({ url, method = "GET", body = {}, params = {} }) => {
    return axios({
      url: `${import.meta.env.VITE_BASE_URL}/${url}`,
      method,
      data: body,
      params,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => res.data);
  };

  return request;
};
