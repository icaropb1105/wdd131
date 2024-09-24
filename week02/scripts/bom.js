const input = document.getElementById('favchap');
const button = document.querySelector('button[type="submit"]');
const list = document.getElementById('list');

button.addEventListener('click', function() {
    if (input.value.trim() === '') {
        input.focus(); // Retorna o foco ao campo de entrada
        return; // Sai da função se o input estiver vazio
    }
    
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = input.value; 
    deleteButton.textContent = 'x'; 
    li.append(deleteButton);
    list.append(li); 

    deleteButton.addEventListener('click', function() {
        list.removeChild(li); 
        input.focus(); 
    });

    input.value = '';

    input.focus();
});
