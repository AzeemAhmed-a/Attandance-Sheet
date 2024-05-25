document.addEventListener('DOMContentLoaded', () => {
    addStudentRow();
});

function addStudentRow(){
    const table = document.getElementById('attendance-table').getElementsByTagName('tbody')[0];
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    const cell6 = row.insertCell(5);
    const cell7 = row.insertCell(6);
    const cell8 = row.insertCell(7);
    const cell9 = row.insertCell(8);
    
cell1.innerHTML = `01`;
cell2.innerHTML = '<input type="text" placeholder="Student Name">';
cell3.innerHTML = '<input type="text" placeholder="Father Name">';
cell4.innerHTML = '<input type="date" placeholder="date of birth">';
cell5.innerHTML = '<input type="number" placeholder="00-123">';
cell6.innerHTML = '<input type="checkbox" name="attendance${table.rows.length}" value="present">';
cell7.innerHTML = '<input type="checkbox" name="attendance${table.rows.length}" value="Absent">';
cell8.innerHTML = '<input type="checkbox" name="attendance${table.rows.length}" value="Leave">';
cell9.innerHTML = '<input type="checkbox" name="attendance${table.rows.length}" value="Total">';

    
    // cell1.innerHTML = `01 style=" "`;
    // cell2.innerHTML = <input type="text" placeholder="Student Name">;
    // cell3.innerHTML = <input type="text" placeholder="Father Name">;
    // cell4.innerHTML = <input type="date" placeholder="date of birth">;
    // cell5.innerHTML = <input type="number" placeholder="00-123">;
    // cell6.innerHTML = <input type="checkBox" name="attendance${table.rows.length}" value="present">;
    // cell7.innerHTML = <input type="checkBox" name="attendance${table.rows.length}" value="present">;
    // cell8.innerHTML = <input type="checkBox" name="attendance${table.rows.length}" value="Leave">;
    // cell9.innerHTML = <input type="checkBox" name="attendance${table.rows.length}" value="Total">;
    
    }


