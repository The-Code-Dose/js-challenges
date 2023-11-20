const btn = document.getElementById('btn_save');
const clickAction = () => {
    btn.style.backgroundColor = '#212529';
    btn.innerText = 'Saved';
}
btn.addEventListener('click', clickAction);