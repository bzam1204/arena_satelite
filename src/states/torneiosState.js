import { atom } from "recoil";

export const torneiosState = atom({
  key: "torneiosState",
  default: [
    {
      id: 1,
      foto: "poster.png",
      nome: "6 Torneio Arena Satélite",
      premios: [
        "R$ 5000,00",
        "1 Iphone 14",
        "Cinco bolas de sorvete por 1 real",
      ],
      requisitos: [
        "Ser membro da Arela Satélite",
        "Duplas Mistas",
        "Pagamento da inscrição no valor de R$ 20,00",
      ],
      cronograma: [
        "Inscrições - 01/01 a 10/01",
        "Pagamento da inscrição - 01/01 a 12/01",
        "Sorteio das duplas - 15/01",
        "Sorteio das duplas - 15/01",
      ],
    },
    {
      id: 2,
      foto: "poster2.png",
      nome: "X Torneio Arena Satélite",
      premios: [
        "R$ 20000,00",
        "R$ 10000,00",
        "R$ 8000,00",
        "Celta 2001 4 portas",
        "1 Iphone 14",
        "Cinco bolas de sorvete por 1 real",
      ],
      requisitos: [
        "Ser membro da Arela Satélite",
        "Duplas Mistas",
        "Pagamento da inscrição no valor de R$ 20,00",
      ],
      cronograma: [
        "Inscrições - 01/01 a 10/01",
        "Pagamento da inscrição - 01/01 a 12/01",
        "Sorteio das duplas - 15/01",
        "Sorteio das duplas - 15/01",
      ],
    },
    {
      id: 3,
      foto: "poster3.png",
      nome: "XX Torneio Arena Satélite",
      premios: [
        "R$ 200000,00",
        "R$ 100000,00",
        "R$ 80000,00",
        "Celta 2001 4 portas",
        "1 Iphone 14",
        "Cinco bolas de sorvete por 1 real",
      ],
      requisitos: [
        "Ser membro da Arela Satélite",
        "Duplas Mistas",
        "Pagamento da inscrição no valor de R$ 20,00",
      ],
      cronograma: [
        "Inscrições - 01/01 a 10/01",
        "Pagamento da inscrição - 01/01 a 12/01",
        "Sorteio das duplas - 15/01",
        "Torneio - 22/01",
      ],
    },
  ],
});
