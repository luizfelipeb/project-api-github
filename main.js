var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');

function renderLoading(){

    listElement.innerHTML = '';

    var textElement = document.createTextNode('Carregando...');
    var loadingElement = document.createElement('li');

    loadingElement.appendChild(textElement);
    listElement.appendChild(loadingElement);

}

function renderError(){

    listElement.innerHTML = '';

    var textElement = document.createTextNode('Usuário não encontrado!');
    var errorElement = document.createElement('li');

    errorElement.style.color = '#F00';
    errorElement.style.listStyle = 'none';

    errorElement.appendChild(textElement);
    listElement.appendChild(errorElement);

}

function renderRepositories(repositories){

    listElement.innerHTML = '';

    for(repo of repositories){
        const textElement = document.createTextNode(repo.name);
        const liElement = document.createElement('li');

        liElement.appendChild(textElement);
        listElement.appendChild(liElement);
    }
}

function listRepositories(){

    var user = inputElement.value;

    if(!user) return alert('Preencher campo');

    renderLoading();


    axios.get('https://api.github.com/users/'+ user +'/repos')
    .then(function(response){
        renderRepositories(response.data);
    })
    .catch(function(){
        renderError();
    });
    

}