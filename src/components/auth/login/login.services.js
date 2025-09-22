export const loginUser = (email, password, onSuccess, onError) => {
  fetch("http://localhost:3000/login", {
    headers: {
      "Content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ email, password }),
  })
    .then(async (res) => {
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Hubo un error en el servidor");
      }
      return res.json();
    })
    .then((data) => onSuccess(data.token))
    .catch((err) => onError(err));
};
