promise = fetch('https://fakestoreapi.com/users')
promise.then((res)=>(res.json())).then((result)=>{
    console.log(result);
    
    user = result 
    data =''
    user.forEach((user)=>{
        data+=`<tr>
                <td>${user.id}</td>
                <td>${user.username}</td>
                <td>${user.name.firstname+" "+user.name.lastname}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${user.address.city}</td>
            </tr>`
    });
    document.getElementById("tdata").innerHTML = data
})