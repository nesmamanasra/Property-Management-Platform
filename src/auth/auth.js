export const auth = {
  isAuthed: () => localStorage.getItem("tmp_authed") === "1",
  login: () => localStorage.setItem("tmp_authed", "1"),
  logout: () => localStorage.removeItem("tmp_authed"),
};