const courses = [
  { name: 'Matemática' },
  { name: 'Letras' },
  { name: 'Geografia' },
];

const states = [
  {
    name: 'São Paulo',
    cities: [
      { name: 'Mogi das Cruzes' },
      { name: 'Suzano' },
      { name: 'Poá' },
      { name: 'Guararema' }
    ]
  },
  {
    name: 'Rio de Janeiro',
    cities: [
      { name: 'Angra dos Reis' },
      { name: 'Niterói' },
      { name: 'Itaboraí' }
    ]
  },
  {
    name: 'Minas Gerais',
    cities: [
      { name: 'Belo Horizonte' },
      { name: 'Monte Azul' },
      { name: 'Muzambinho' }
    ]
  }
];

function getStateCities(stateName) {
  for (const state of states) {
    if (state.name === stateName) return state.cities
  }

  return null
}

export { courses, states, getStateCities }