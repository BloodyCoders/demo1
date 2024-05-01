// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Sample data for each semester
  const semestersData = {
    'Sem-1': ['xx', 'yy', 'zz'],
    'Sem-2': ['aa', 'bb', 'cc'],
    // ... Add data for other semesters ...
  };

  // Initial content for Academics table
  showSemester('Sem-1');
});

function showSemester(semester) {
  const academicsTable = document.getElementById("academicsTable");
  academicsTable.innerHTML = ""; // Clear existing content

  const semesterData = semestersData[semester];
  if (semesterData) {
    for (let i = 0; i < semesterData.length; i++) {
      const row = document.createElement("tr");
      const th = document.createElement("th");
      const td = document.createElement("td");
      th.textContent = `${semester} Subject-${i + 1}:`;
      td.textContent = semesterData[i];
      row.appendChild(th);
      row.appendChild(td);
      academicsTable.appendChild(row);
    }
  }
}
