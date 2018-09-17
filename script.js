let arr = ["Bình tông", "Ghế Hòa Phát", "Bật lửa điện", "Laptop Vaio", "Điện thoại iPhone", "Máy tính bảng"];
let tam = null;

function addValue() {
    let a = document.getElementById("a").value;
    arr.push(a);
    displayArr();
}

function displayArr() {
    let content = "";
    for (let i = 0; i < arr.length; i++) {
        content = content + "<li class='list-group-item li" + i + "'>" + arr[i] + "<button class='btn btn-danger' type='button' onclick='delArr(" + i + ")'>Delete</button><button class='btn btn-info' type='button' onclick='editArr\(" + i + "\)'>Rename</button></li>";
    }
    document.getElementById("show").innerHTML = content;
}

function editArr(i) {
    tam = i;
    document.getElementById("formedit").style = "display: block;";
    document.getElementById("nameproduct").value = arr[i];
}

function clickEdit() {
    let idValue = document.getElementById("nameproduct").value;
    arr.splice(tam, 1, idValue);
    document.getElementById("formedit").style = "display: none;";
    displayArr();
}

function delArr(i) {
    arr.splice(i, 1);
    displayArr();
}

console.log(arr.join(", "));