import { fetchData } from "./fetchData.js";

const originalTable = document.getElementById("table");
const newTable = document.createElement("table");

const headerRow = document.createElement("tr");
const headerCells = [
  document.createElement("th"),
  document.createElement("th"),
  document.createElement("th"),
  document.createElement("th"),
  document.createElement("th"),
];
headerCells[0].textContent = "Game:";
headerCells[1].textContent = "Teams:";
headerCells[2].textContent = "1";
headerCells[3].textContent = "X";
headerCells[4].textContent = "2";
headerRow.append(...headerCells);
newTable.appendChild(headerRow);

fetchData().then((data) => {
  data.gamesPlayed.forEach((game, index) => {
    const row = document.createElement("tr");
    const numberCell = document.createElement("td");
    numberCell.textContent = game.game;
    row.appendChild(numberCell);

    const teamCell = document.createElement("td");
    const team1Link = `<a href="${game.competitors["1"].homepage}">${game.competitors["1"].teamName}</a>`;
    const team2Link = `<a href="${game.competitors["2"].homepage}">${game.competitors["2"].teamName}</a>`;
    teamCell.innerHTML = `${team1Link} -VS- ${team2Link}`;
    row.appendChild(teamCell);

    for (let i = 1; i <= 3; i++) {
      const outcomeCell = document.createElement("td");
      if (i == 1 && game.outcome == "1") {
        outcomeCell.innerHTML =
          '<span class="checkmark"><div class="stem"></div><div class="kick"></div></span>';
      } else if (i == 2 && game.outcome == "X") {
        outcomeCell.innerHTML =
          '<span class="checkmark"><div class="stem"></div><div class="kick"></div></span>';
      } else if (i == 3 && game.outcome == "2") {
        outcomeCell.innerHTML =
          '<span class="checkmark"><div class="stem"></div><div class="kick"></div></span>';
      }
      row.appendChild(outcomeCell);
    }
    newTable.appendChild(row);
  });
  originalTable.parentNode.replaceChild(newTable, originalTable);
});
