import { API_END_POINT } from "../env.js";

export const request = async (url, options = {}) => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        "x-username": "WooDaeHyun",
      },
    });

    if (res.ok) {
      return await res.json();
    }
    throw new Error("API 처리 오류");
  } catch (e) {
    alert(e.message);
  }
};
