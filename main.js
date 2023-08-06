function printname() {
    const name = document.getElementById("name").value;
    const printedname = document.getElementById("printedname");

    printedname.textContent = name;
}
function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    const add = num1 + num2;
    const subtract = num1 - num2;
    const multiply = num1 * num2;
    const divide = num1 / num2;

    document.getElementById("add").textContent = add;
    document.getElementById("subtract").textContent = subtract;
    document.getElementById("multiply").textContent = multiply;
    document.getElementById("divide").textContent = divide;
}

function calculatedate() {
    const d = new Date();
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const day = weekdays[d.getDay()];

    const dd = d.getDate();
    const mm = d.getMonth() + 1;
    const yyyy = d.getFullYear();

    let dateformat = dd + "/" + mm + "/" + yyyy;
    return {
        date: dateformat,
        day : day
    };
}
const {date, day} = calculatedate();
document.getElementById("date").textContent = date;
document.getElementById("day").textContent = day;
  