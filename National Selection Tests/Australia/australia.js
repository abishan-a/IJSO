document.addEventListener("DOMContentLoaded", () => {
  const exams = [
       {
      year: 2023,
      difficulty: 3,
      paperLink: "https://example.com/australia/2023-paper.pdf",
      solutionLink: "https://example.com/australia/2023-solutions.pdf"
    },
    {
      year: 2022,
      difficulty: 3,
      paperLink: "https://example.com/australia/2022-paper.pdf",
      solutionLink: "https://example.com/australia/2022-solutions.pdf"
    },
    {
      year: 2021,
      difficulty: 3,
      paperLink: "https://example.com/australia/2021-paper.pdf",
      solutionLink: "https://example.com/australia/2021-solutions.pdf"
    },
    {
      year: 2020,
      difficulty: 3,
      paperLink: "https://example.com/australia/2020-paper.pdf",
      solutionLink: "https://example.com/australia/2020-solutions.pdf"
    },
  ];

  function renderExams(list) {
    const grid = document.getElementById("examGrid");
    grid.innerHTML = "";

    list.forEach(exam => {
      const card = document.createElement("div");
      card.className = "card";

      const year = document.createElement("div");
      year.className = "year";
      year.textContent = exam.year;

      const stars = document.createElement("div");
      stars.className = "stars";
      stars.innerHTML = "★".repeat(exam.difficulty) + "☆".repeat(5 - exam.difficulty);

      const tooltip = document.createElement("div");
      tooltip.className = "tooltip";
      tooltip.innerHTML = `
        <a href="${exam.paperLink}" target="_blank">Paper</a>
        <a href="${exam.solutionLink}" target="_blank">Solutions</a>
      `;

      card.appendChild(year);
      card.appendChild(stars);
      card.appendChild(tooltip);

      grid.appendChild(card);
    });
  }

  function sortByDifficulty(ascending = true) {
    const sorted = [...exams].sort((a, b) =>
      ascending ? a.difficulty - b.difficulty : b.difficulty - a.difficulty
    );
    renderExams(sorted);
  }

  window.sortByDifficulty = sortByDifficulty;

  renderExams(exams);
});
