students = [
    {id:1,name:"jithu",place:"kkd"},
    {id:2,name:"manu",place:"mlp"},
    {id:3,name:"sanu",place:"pld"},
    {id:4,name:"balu",place:"knr"},
    {id:5,name:"mahesh",place:"idk"},
]

data =''

students.forEach((student)=>{
    data += `<tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.place}</td>
            </tr>`

            console.log(data);
            
})
document.getElementById("tbody").innerHTML = data