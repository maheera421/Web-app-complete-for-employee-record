$(function () {
    var but = document.getElementById("Get");
    var but2 = document.getElementById("add");
    var but6 = document.getElementById("Save");
    but.addEventListener("click", fetchEmployeeData);
    but2.addEventListener("click", postEmployeeData);
    $("#mtable2").on("click", "#Delete", deleteEmployeeData);
    $("#mtable2").on("click", "#Edit", showEmployeeModal);
    but6.addEventListener("click", putEmployeeData);
  });
  
  const employeeUrl = "http://localhost:3030/api/employees/";
  
  async function fetchEmployeeData() {
    const response = await fetch(employeeUrl, {
      method: "GET",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    });
    const data = await response.json();
    console.log(data);
    const tab = document.getElementById("mtable2");
    tab.innerHTML = " ";
    for (let i = 0; i < data.length; i++) {
      var res = data[i];
      const tr = document.createElement("tr");
      const td = document.createElement("td");
      const td2 = document.createElement("td");
      const td3 = document.createElement("td");
      const td4 = document.createElement("td");
      const td5 = document.createElement("td");
      const td6 = document.createElement("td");
      let but3 = document.createElement("button");
      but3.innerHTML = "EDIT";
      but3.setAttribute("id", "Edit");
      but3.setAttribute("type", "button");
      but3.setAttribute("data-bs-toggle", "modal");
      but3.setAttribute("data-bs-target", "#exampleModal");
      but3.classList.add("button-54");
      var but4 = document.createElement("button");
      but4.innerHTML = "REMOVE";
      but4.setAttribute("id", "Delete");
      but4.classList.add("button-54");
      tr.setAttribute("data_id", res._id);
      tr.setAttribute("id", "row");
  
      td.classList.add("data1");
      td2.classList.add("data1");
      td3.classList.add("data1");
      td4.classList.add("data1");
      td5.classList.add("data1");
  
      if (res.FirstName) {
        td.textContent = res.FirstName;
      } else {
        td.textContent = "N/A";
      }
      tr.appendChild(td);
      tab.appendChild(tr);
  
      if (res.MiddleName) {
        td2.textContent = res.MiddleName;
      } else {
        td2.textContent = "N/A";
      }
      tr.appendChild(td2);
      tab.appendChild(tr);
  
      if (res.LastName) {
        td3.textContent = res.LastName;
      } else {
        td3.textContent = "N/A";
      }
      tr.appendChild(td3);
      tab.appendChild(tr);
  
      if (res.EmployeeId) {
        td4.textContent = res.EmployeeId;
      } else {
        td4.textContent = "N/A";
      }
      tr.appendChild(td4);
      tab.appendChild(tr);
  
      if (res.Department) {
        td5.textContent = res.Department;
      } else {
        td5.textContent = "N/A";
      }
      tr.appendChild(td5);
      td6.appendChild(but3);
      tr.appendChild(td6);
      tr.appendChild(but4);
      tab.appendChild(tr);
    }
  }
  
  async function postEmployeeData() {
    let FirstName = document.getElementById("Fname").value;
    let MiddleName = document.getElementById("Mname").value;
    let LastName = document.getElementById("Lname").value;
    let EmployeeId = document.getElementById("EmpId").value;
    let Department = document.getElementById("Dept").value;
    let response = await fetch(employeeUrl, {
      method: "POST",
      body: JSON.stringify({
        FirstName: FirstName,
        MiddleName: MiddleName,
        LastName: LastName,
        EmployeeId: EmployeeId,
        Department: Department,
      }),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    });
    const data = await response.json();
    console.log(data);
    fetchEmployeeData();
  }
  
  async function deleteEmployeeData() {
    var but5 = $(this);
    var parent = but5.closest("#row");
    var id = parent.attr("data_id");
  
    const response = await fetch(employeeUrl + id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    });
    fetchEmployeeData();
  }
  
  async function showEmployeeModal() {
    var but5 = $(this);
    var parent = but5.closest("#row");
    var id = parent.attr("data_id");
  
    const response = await fetch(employeeUrl + id, {
      method: "GET",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    });
    const data = await response.json();
    console.log(data);
    document.getElementById("Fname1").value = data.FirstName;
    document.getElementById("Mname1").value = data.MiddleName;
    document.getElementById("Lname1").value = data.LastName;
    document.getElementById("EmpId1").value = data.EmployeeId;
    document.getElementById("Dept1").value = data.Department;
    document.getElementById("ID").value = data._id;
  }
  
  async function putEmployeeData() {
    var FirstName = document.getElementById("Fname1").value;
    var MiddleName = document.getElementById("Mname1").value;
    var LastName = document.getElementById("Lname1").value;
    var EmployeeId = document.getElementById("EmpId1").value;
    var Department = document.getElementById("Dept1").value;
    var id1 = document.getElementById("ID").value;
  
    let response = await fetch(employeeUrl + id1, {
      method: "PUT",
      body: JSON.stringify({
        FirstName: FirstName,
        MiddleName: MiddleName,
        LastName: LastName,
        EmployeeId: EmployeeId,
        Department: Department,
      }),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    });
    const data = await response.json();
    console.log(data);
    fetchEmployeeData();
  }
  