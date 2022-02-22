const btnLogin = document.querySelector('.btn-login');
btnLogin.onclick = (ev) => {
	let texto = ev.target.innerText;
	ev.target.innerText = texto === 'Login' ? 'Logout' : 'Login';
};

const onClickLike = (e) => {
	console.log();
	e.children[0].innerText = parseInt(e.children[0].innerText) + 1;
	alert('Ninja was liked');
};

const btnAdd = document.querySelector('.btn-add');
btnAdd.onclick = (ev) => {
	btnAdd.remove();
};
