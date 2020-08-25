const onSubmit = (e) => {
  e.preventDefault();
  const share = document.querySelector('#share');
  toggleView();
  const encodedUrl = encodeUrl(window.location);
  share.value = encodedUrl;
};

const encodeUrl = (url) => {
  const input = document.querySelector('.input');
  return `${url}#${btoa(input.value)}`;
};

const decodedMessage = (urlHash) => {
  let myHash = urlHash.replace('#', '');
  return `${atob(myHash)}`;
};

const toggleView = () => {
  const formSection = document.querySelector('#form-section');
  const urlSection = document.querySelector('#url-section');
  const formClassList = formSection.classList.value.split(' ');
  if (formClassList.includes('is-hidden')) {
    formSection.classList.remove('is-hidden');
    urlSection.classList.add('is-hidden');
  } else {
    formSection.classList.add('is-hidden');
    urlSection.classList.remove('is-hidden');
  }
};

const { hash } = window.location;
if (hash) {
  const message = decodedMessage(hash);
  const messageBox = document.querySelector('#message-show');
  const formBox = document.querySelector('#message-form');
  const messageAnchor = document.querySelector('h2');
  messageAnchor.innerHTML = message;
  messageBox.classList.remove('is-hidden');
  formBox.classList.add('is-hidden');
}

const submitBtn = document.querySelector('.button');
submitBtn.addEventListener('click', onSubmit);

const shareField = document.querySelector('#share');
shareField.addEventListener('click', function () {
  this.select();
  document.execCommand('copy');
  document.querySelector('.notification').classList.remove('is-hidden');
  setTimeout(() => {
    document.querySelector('.notification').classList.add('is-hidden');
  }, 1000);
});
