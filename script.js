const correctPassword = "713713"; // 设置你的密码  
  
function checkPassword() {  
    const inputPassword = document.getElementById('passwordInput').value;  
    if (inputPassword === correctPassword) {  
        document.getElementById('login').style.display = 'none';  
        document.getElementById('passwordBook').style.display = 'block';  
    } else {  
        alert('密码错误！');  
    }  
}  
  
function saveContent() {  
    const content = document.getElementById('content').value;  
    // 这里只是简单示例，实际使用中可能需要保存到服务器或localStorage  
    console.log('已保存内容：', content);  
    // 如果需要保存到localStorage，可以使用以下代码  
    // localStorage.setItem('passwordBookContent', content);  
}
