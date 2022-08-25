fetch('https://training202103069-00.herokuapp.com/data')
  .then((response) => response.json())
  .then(json =>{
    Student = document.getElementById('S')

    image = document.getElementById('image')
    img = document.createElement('img')
    img.src='./A.jpg';
    image.appendChild(img)
    
    json.Sheet1.forEach(e => {
        
        var option = document.createElement('option')
        option.innerHTML=e['A'];
        Student.appendChild(option);

    });

  });