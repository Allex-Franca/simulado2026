import { useState } from "react";
import { dadosClima } from "./dadosClima";
import { codigosWmo } from "./codigosWmo";
import "./App.css";

function App() {
  const [busca, setBusca] = useState("");
  const [cidade, setCidade] = useState(null);

  function buscar() {
    const resultado = dadosClima.find(
      (item) => item.name.toLowerCase() === busca.toLowerCase(),
    );

    setCidade(resultado);
  }
  function encontrarClima(codigo) {
    return codigosWmo.find((item) => item.codigo === codigo);
  }
  console.log(cidade?.current.weather_code);

  return (
    <div className="app">
      <div className="header">
        <img className="logo" src="/solchuva.svg" alt="logo" />
        <div>
          <h1>Sol Chuva</h1>
          <p>Tempo certo, onde você estiver</p>
        </div>
      </div>
      <div className="sim">
        <input
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Digite o nome de uma cidade..."
        />
        <button onClick={buscar}>Buscar</button>
      </div>
      {cidade && (
        <>
          <div className="resultado">
            <div className="clima-resumo">
              <h2>{cidade.name}</h2>
              <div className="clima-principal">
                <p>{cidade.current.temperature_2m} °C</p>
                <img
                  className="icon"
                  src={encontrarClima(cidade.current.weather_code)?.icone}
                  alt="Ícone do clima"
                />
              </div>
              <p className="descricao">
                {encontrarClima(cidade.current.weather_code)?.descricao}
              </p>
            </div>
            <div className="informacoes">
              <p>Umidade: {cidade.current.relative_humidity_2m}%</p>
              <p>Vento: {cidade.current.wind_speed_10m} km/h</p>
              <p>Sensação: {cidade.current.apparent_temperature} °C</p>
              <p>Índice UV: {cidade.current.uv_index}</p>
            </div>
          </div>
          <div className="previsao">
            <h3>Próximos 10 dias</h3>
            {cidade.daily.slice(0, 10).map((dia) => (
              <div key={dia.date} className="dia">
                <p>{dia.date}</p>
                <img
                  src={encontrarClima(dia.weather_code)?.icone}
                  alt="Clima"
                />
                <p>{encontrarClima(dia.weather_code)?.descricao}</p>
                <p>{dia.temperature_2m_max} °C</p>
                <p>{dia.temperature_2m_min} °C</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
