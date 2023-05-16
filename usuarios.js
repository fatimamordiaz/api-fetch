const URL = 'https://reqres.in/api/users/';

fetch(URL)
.then(res => res.json())
.then(data =>{
    console.log(data);
     const user1 = document.getElementById('user1');
    user1.src = data.data[0].avatar;
    const user1Nombre = data.data[0].first_name;
        document.getElementById('user1nombre').textContent = `First Name: ${user1Nombre}`;
    const user1email = data.data[0].email;
        document.getElementById('user1email').textContent = `Email: ${user1email}`;

    const user2 = document.getElementById('user2');
     user2.src = data.data[1].avatar;
    const user2Nombre = data.data[1].first_name;
         document.getElementById('user2nombre').textContent = `First Name: ${user2Nombre}`;
    const user2email = data.data[1].email;
         document.getElementById('user2email').textContent = `Email: ${user2email}`;

    const user3 = document.getElementById('user3');
     user3.src = data.data[2].avatar;
    const user3Nombre = data.data[2].first_name;
         document.getElementById('user3nombre').textContent = `First Name: ${user3Nombre}`;
    const user3email = data.data[2].email;
         document.getElementById('user3email').textContent = `Email: ${user3email}`;

    const user4 = document.getElementById('user4');
     user4.src = data.data[3].avatar;
    const user4Nombre = data.data[3].first_name;
         document.getElementById('user4nombre').textContent = `First Name: ${user4Nombre}`;
    const user4email = data.data[3].email;
         document.getElementById('user4email').textContent = `Email: ${user4email}`;
    
    const user5 = document.getElementById('user5');
     user5.src = data.data[4].avatar;
    const user5Nombre = data.data[4].first_name;
         document.getElementById('user5nombre').textContent = `First Name: ${user5Nombre}`;
    const user5email = data.data[4].email;
         document.getElementById('user5email').textContent = `Email: ${user5email}`;
    
    const user6 = document.getElementById('user6');
     user6.src = data.data[5].avatar;
    const user6Nombre = data.data[5].first_name;
         document.getElementById('user6nombre').textContent = `First Name: ${user6Nombre}`;
    const user6email = data.data[5].email;
         document.getElementById('user6email').textContent = `Email: ${user6email}`;
    
    
   
    
});

