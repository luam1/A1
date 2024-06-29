document.addEventListener('DOMContentLoaded', () => {
    const chatToggle = document.getElementById('chat-toggle');
    const chatBox = document.getElementById('chat-box');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    
    chatToggle.addEventListener('click', () => {
        chatBox.style.display = chatBox.style.display === 'block' ? 'none' : 'block';
    });
    
    chatSend.addEventListener('click', () => {
        const message = chatInput.value.trim();
        if (message) {
            const newMessage = document.createElement('div');
            newMessage.textContent = message;
            chatMessages.appendChild(newMessage);
            chatInput.value = '';
        }
    });
    
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            chatSend.click();
        }
    }); 

    // Exemplos de livros
    const books = [
        { title: 'Livro 1', author: 'Autor 1', description: 'Descrição do Livro 1' },
        { title: 'Livro 2', author: 'Autor 2', description: 'Descrição do Livro 2' },
        { title: 'Livro 3', author: 'Autor 3', description: 'Descrição do Livro 3' },
    ];
    
    const bookList = document.getElementById('book-list');
    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `<h3>${book.title}</h3><p>${book.author}</p><p>${book.description}</p>`;
        bookList.appendChild(bookDiv);
    });
});
