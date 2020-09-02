import Cookies from 'js-cookie';

async function login(username, password) {
  const res = await fetch('/api/session', {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
    },
    body: JSON.stringify({ username, password })
  });
  res.data = await res.json();
  console.log(res.data);
}

async function getCurrentUser() {
  const res = await fetch("/api/session");
  res.data = await res.json();
  console.log(res.data);
}

window.login = login;
window.getCurrentUser = getCurrentUser;