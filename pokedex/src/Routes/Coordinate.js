export const goToHome = (history) => {
  history.push("/");
};

export const goToDetails = (history, name) => {
  history.push(`/${name}`);
};

export const goToPokedex = (history) => {
  history.push("/pokedex");
};
