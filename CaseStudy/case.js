var data = [];

function addInformation() {
    var item_name = document.getElementById("name").value;
    var item_age = document.getElementById("age").value;
    var item_id = document.getElementById("id").value;

    var item = {
        name:item_name,
        age:item_age,
        id:item_id,
    }

    var index = data.findIndex((c)=>c.id == item.id);
    if (index>=0) {
        data.splice(index, 1, item)
    } else {
            data.push(item);
    }
render();
clear();
}

function render() {
    let i = 0;
    table =`<tr>
            <th>Họ và tên</th>
            <th>Số tuổi</th>
            <th>Mã sinh viên</th>
            <th class="sua">Chỉnh sửa</th>
        </tr>`;
    for (let i = 0;i<data.length;i++){
        table += `<tr>
            <td>${data[i].name}</td>
            <td>${data[i].age}</td>
            <td>${data[i].id}</td>
            <td class="sua">
                <button onclick="deleteItem(${data[i].id})">Xóa bỏ</button>
                <button onclick="editItem(${data[i].id})">Chỉnh sửa</button>
            </td>
        </tr>`;
    }
    document.getElementById("render").innerHTML = table;

}

function clear() {
    document.getElementById("name").value="";
    document.getElementById("age").value="";
    document.getElementById("id").value="";
}

function deleteItem(a) {
    for (let i = 0; i<data.length; i++) {
        if (data[i].id == a) {
            data.splice(i,1)
            render()
        }
    }
}

function editItem(a) {
    for (let i = 0; i<data.length; i++) {
        if (data[i].id == a) {
            document.getElementById('name').value = data[i].name;
            document.getElementById('age').value = data[i].age;
            document.getElementById('id').value = data[i].id;
        }
    }
}