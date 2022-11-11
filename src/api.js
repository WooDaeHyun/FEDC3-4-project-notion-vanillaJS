const API_END_POINT = "https://kdt-frontend.programmers.co.kr/documents";

const sleep = (ms) => {
  //sleep 함수
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const request = async (url, options = {}) => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        "x-username": "shkim061198",
      },
    });

    if (res.ok) {
      const resJson = await res.json();
      return resJson;
    }

    throw new Error("서버에서 응답이 정상적으로 완료되지 않았습니다.");
  } catch (e) {
    alert(e.message);
  }
};
