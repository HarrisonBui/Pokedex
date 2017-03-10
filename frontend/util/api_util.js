export const fetchAllPokemon = () => (
  $.ajax({
    method: 'GET',
    url: '/api/pokemon'
  })
);

export const fetchSinglePokemon = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/pokemon/${id}`
  })
);

export const createPokemon = (data) => (
  $.ajax({
    method: 'POST',
    url: `/api/pokemon`,
    data: {data}
  })
);
