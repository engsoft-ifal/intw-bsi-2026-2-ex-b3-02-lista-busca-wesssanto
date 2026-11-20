const cursos = [
  "HTML5 e CSS3",
  "JavaScript Moderno",
  "Lógica de Programação",
  "Git e GitHub",
  "Banco de Dados SQL",
  "React Básico"
];

const lista = document.querySelector("#lista");
const busca = document.querySelector("#busca");

function render(filtro = "") {
  const termo = filtro.trim().toLowerCase();

  const filtrados = cursos.filter((curso) =>
    curso.toLowerCase().includes(termo)
  );

  if (filtrados.length === 0) {
    lista.innerHTML = "<li>Nada encontrado</li>";
    return;
  }

  lista.innerHTML = filtrados
    .map((curso) => `<li>${curso}</li>`)
    .join("");
}

busca.addEventListener("input", () => render(busca.value));

render();
