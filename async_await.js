

//IMPORTADO PARA ARQUIVO DO INDEX.HTML


var url=prompt("Insira a URL")
const getPosts=async() =>{
    let response=await fetch(url)
    let data=await response.json();

    console.log(data);
}

getPosts();