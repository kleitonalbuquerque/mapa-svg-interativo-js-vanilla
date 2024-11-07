document.addEventListener("DOMContentLoaded", () => {
  // Carregar o JSON com fetch
  fetch("data/estados.json")
    .then((response) => response.json())
    .then((data) => {
      const estados = data;
      console.log("data", data);

      // Atribuir cores e eventos aos estados
      estados.forEach((estado) => {
        console.log("estado", estado);
        const pathElement = document.getElementById(estado.id);
        if (pathElement) {
          pathElement.style.fill = estado.cor;

          // Adiciona o evento de clique para mostrar nome e projetos
          pathElement.addEventListener("click", () => {
            document.getElementById(
              "estado-nome"
            ).textContent = `Estado: ${estado.nome}`;
            document.getElementById(
              "projetos"
            ).textContent = `Projetos: ${estado.quantidade}`;
          });
        }
      });
    })
    .catch((error) => console.error("Erro ao carregar o arquivo JSON:", error));
});
