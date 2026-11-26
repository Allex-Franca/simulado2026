import sol from "./anexos/icones/sol.svg";
import nublado from "./anexos/icones/nublado.svg";
import neve from "./anexos/icones/neve.svg";
import tempestade from "./anexos/icones/tempestade.svg";
import vento from "./anexos/icones/vento.svg";
import chuva from "./anexos/icones/chuva.svg";
import chuvaGota from "./anexos/icones/chuva-gota.svg";

export const codigosWmo = [
  { codigo: 0, descricao: "Céu limpo", icone: sol },
  { codigo: 1, descricao: "Predominantemente limpo", icone: sol },
  { codigo: 2, descricao: "Parcialmente nublado", icone: nublado },
  { codigo: 3, descricao: "Nublado", icone: nublado },
  { codigo: 45, descricao: "Neblina", icone: vento },
  { codigo: 48, descricao: "Neblina congelante", icone: vento },
  { codigo: 51, descricao: "Garoa leve", icone: chuvaGota },
  { codigo: 53, descricao: "Garoa moderada", icone: chuvaGota },
  { codigo: 55, descricao: "Garoa intensa", icone: chuva },
  { codigo: 61, descricao: "Chuva leve", icone: chuvaGota },
  { codigo: 63, descricao: "Chuva moderada", icone: chuva },
  { codigo: 65, descricao: "Chuva intensa", icone: tempestade },
  { codigo: 71, descricao: "Neve leve", icone: neve },
  { codigo: 73, descricao: "Neve moderada", icone: neve },
  { codigo: 75, descricao: "Neve intensa", icone: neve },
  { codigo: 80, descricao: "Pancadas de chuva leves", icone: chuvaGota },
  { codigo: 81, descricao: "Pancadas de chuva moderadas", icone: chuva },
  { codigo: 82, descricao: "Pancadas de chuva intensas", icone: tempestade },
  { codigo: 95, descricao: "Tempestade", icone: tempestade },
  { codigo: 96, descricao: "Tempestade com granizo leve", icone: tempestade },
  { codigo: 99, descricao: "Tempestade com granizo intenso", icone: tempestade },
];
