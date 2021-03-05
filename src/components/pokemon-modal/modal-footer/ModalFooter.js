import React from 'react';
import { Row } from 'react-bootstrap';
import { XAxis, YAxis, BarChart, Bar } from 'recharts';

import './style.css';

const GraphsMaker = ({ data }) => {
  const fistPokemonStats = data.pokemonData.stats.map((stat) => stat.base_stat);
  const comparedStats = data.comparedPokemon ? data.comparedPokemon.stats.map((stat) => stat.base_stat) : null;
  let dataSet;

  if (comparedStats !== null) {
    dataSet = [
      { name: 'hp', pokemonData: fistPokemonStats[0], comparedPokemon: comparedStats[0] },
      { name: 'attack', pokemonData: fistPokemonStats[1], comparedPokemon: comparedStats[1] },
      { name: '', pokemonData: fistPokemonStats[2], comparedPokemon: comparedStats[2] },
      { name: 'special', pokemonData: fistPokemonStats[3], comparedPokemon: comparedStats[3] },
      { name: '', pokemonData: fistPokemonStats[4], comparedPokemon: comparedStats[4] },
      { name: 'speed', pokemonData: fistPokemonStats[5], comparedPokemon: comparedStats[5] },
    ];
  } else {
    dataSet = [
      { name: 'hp', pokemonData: fistPokemonStats[0] },
      { name: 'attack', pokemonData: fistPokemonStats[1] },
      { name: '', pokemonData: fistPokemonStats[2] },
      { name: 'special', pokemonData: fistPokemonStats[3] },
      { name: '', pokemonData: fistPokemonStats[4] },
      { name: 'speed', pokemonData: fistPokemonStats[5] },
    ];
  }

  return (
    <BarChart width={350} height={200} data={dataSet} margin={{ top: 0, right: 25, bottom: 0, left: 0 }} className="stats-chart">
      <Bar dataKey="pokemonData" barSize={35} fill="#096700" />

      {comparedStats !== null && <Bar dataKey="comparedPokemon" barSize={35} fill="#12d400" />}

      <XAxis dataKey="name" />
      <YAxis />
    </BarChart>
  );
};

const ModalPokemonFooter = ({ data }) => (
  <div>
    <Row className="row-footer">
      <h4 className="footer-title">Stats</h4>
    </Row>
    <Row className="row-footer">
      <GraphsMaker data={data} />
    </Row>
  </div>
);

export default ModalPokemonFooter;
