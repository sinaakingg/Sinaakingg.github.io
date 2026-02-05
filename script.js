const PASSWORD = "1234"; // فقط برای تست

function login(){
    if(document.getElementById('pass').value === PASSWORD){
        document.getElementById('loginBox').classList.add('hidden');
        document.getElementById('panel').classList.remove('hidden');
        loadPosts();
    } else alert('رمز اشتباه است');
}

function addPost(){
    const file = document.getElementById('file').files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = () => {
        const posts = JSON.parse(localStorage.getItem('posts') || '[]');
        posts.unshift(reader.result);
        localStorage.setItem('posts', JSON.stringify(posts));
        loadPosts();
    };
    reader.readAsDataURL(file);
}

function loadPosts(){
    const box = document.getElementById('posts');
    box.innerHTML = '';
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    posts.forEach(src => {
        const d = document.createElement('div');
        d.className = 'post';
        d.innerHTML = `<img src="${src}" />`;
        box.appendChild(d);
    });
}