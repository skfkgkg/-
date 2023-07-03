const acc = document.querySelectorAll('.foot-gnb');

for (let i = 0; i < acc.length; i++) {
  acc[i].firstElementChild.addEventListener('click', accClickHandle);
}

function accClickHandle(e) {
  let trget = e.target;
  let panelCli = trget.nextElementSibling;
  trget.classList.toggle('active');

  if (panelCli.style.height) {
    panelCli.style.height = null;
  }
  else {
    panelCli.style.height = panelCli.scrollHeight + 'px';
  }
}
