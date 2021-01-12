export const fetchAllPokemon = () => {
  return $.ajax({
    method: "GET",
    url: "/api/pokemon"
  })
}

export const fetchOnePokemon = (PokeId) => {
  return $.ajax({
    method: "GET",
    url: `/api/pokemon/${PokeId}`
  })
}