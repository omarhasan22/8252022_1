fetch('https://training202103069-00.herokuapp.com/data')
  .then((response) => response.json())
  .then(json =>{
    Student = document.getElementById('S')

    image = document.getElementById('image')
    img = document.createElement('img')
    img.src='https://github.com/omarhasan22/8252022_1/blob/main/%D8%B3%D9%8A%D8%AF%D9%8A%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D8%B9%D8%A7%D8%AF%D9%84%20%D8%A7%D9%8A%D9%88%20%D8%B4%D9%86%D8%A8%20%D9%8A%D8%B1%D8%AD%D9%85%D9%87%20%D8%A7%D9%84%D9%84%D9%87%20%D8%A2%D9%85%D9%8A%D9%86%20(30).jpg'
    image.appendChild(img)
    
    json.Sheet1.forEach(e => {
        
        var option = document.createElement('option')
        option.innerHTML=e['A'];
        Student.appendChild(option);

    });

  });