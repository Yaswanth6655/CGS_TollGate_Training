const form = document.getElementById('tableForm');
const tableContainer = document.getElementById('tableContainer');


form.addEventListener('submit', function(event) {
    event.preventDefault();
    const rows = document.getElementById('rows').value;
    const columns = document.getElementById('columns').value;
    generateTable(rows, columns);
});


function generateTable(rows, columns) {
    let tableHTML = '<table class="table table-bordered"><tbody>';


    for (let i = 0; i < rows; i++) {
        tableHTML += '<tr>';
        for (let j = 0; j < columns; j++) {
            tableHTML += `<td><input type="text" class="form-control" placeholder="Cell (${i + 1}, ${j + 1})"></td>`;
        }
        tableHTML += '</tr>';
    }

    tableHTML += '</tbody></table>';
    tableContainer.innerHTML = tableHTML;
}