interface Series {
  id: number;
  title: string;
  category: string;
  description: string;
}

export const series: Series[] = [
  {
    id: 1,
    title: "Spiderman",
    category: "Aventuras",
    description:
      "Un joven llamado Peter Parker es mordido por una araña radiactiva y adquiere habilidades extraordinarias. Con su nuevo poder, decide luchar contra el crimen en la ciudad de Nueva York como el superhéroe conocido como Spiderman.",
  },

  {
    id: 2,
    title: "Breaking Bad",
    category: "Drama",
    description:
      "Walter White, un profesor de química de secundaria, se convierte en fabricante de metanfetaminas después de ser diagnosticado con cáncer. Junto a su exalumno Jesse Pinkman, se adentran en el peligroso mundo del narcotráfico mientras intentan asegurar el futuro financiero de su familia.",
  },

  {
    id: 3,
    title: "The Walking Dead",
    category: "Terror",
    description:
      "En un mundo postapocalíptico infestado de zombis, un grupo de sobrevivientes liderados por el exsheriff Rick Grimes lucha por mantenerse con vida mientras enfrentan no solo a los muertos vivientes, sino también a otros humanos desesperados por recursos y poder.",
  },

  {
    id: 4,
    title: "Batman",
    category: "Aventuras",
    description:
      "Bruce Wayne, un multimillonario traumatizado por la muerte de sus padres, se convierte en el vigilante enmascarado conocido como Batman. Utilizando su inteligencia, habilidades de combate y tecnología avanzada, lucha contra el crimen en Gotham City mientras enfrenta a villanos icónicos como el Joker y el Pingüino.",
  },

  {
    id: 5,
    title: "Peaky Blinders",
    category: "Drama",
    description:
      "En la década de 1920 en Birmingham, Inglaterra, la familia Shelby lidera una banda criminal conocida como los Peaky Blinders. A medida que buscan expandir su imperio, enfrentan desafíos tanto de la ley como de otras bandas rivales, mientras el carismático líder Tommy Shelby navega por un mundo peligroso de poder, traición y ambición.",
  },

  {
    id: 6,
    title: "It",
    category: "Terror",
    description:
      "En la ciudad de Derry, Maine, un grupo de niños conocidos como el Club de los Perdedores se enfrenta a una entidad maligna que toma la forma de un payaso llamado Pennywise. A medida que el grupo lucha por sobrevivir, deben confrontar sus peores miedos y unirse para derrotar a esta amenaza aterradora.",
  },
];
