import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form  textarea'),
  email: document.querySelector('.feedback-form input[name="email"]'),
};

const storageKey = 'feedback-form-state';
const obj = {};

refs.form.addEventListener('input', throttle(addInputDataToLocalStorage, 500));
refs.form.addEventListener('submit', onFormSubmit);

onTextAreaInput();

function addInputDataToLocalStorage(event) {
  obj[event.target.name] = event.target.value;

  localStorage.setItem(storageKey, JSON.stringify(obj));
}

function onTextAreaInput() {
  if (localStorageData.message) {
    refs.textarea.value = localStorageData.message;
  }

  if (localStorageData.email) {
    refs.email.value = localStorageData.email;
  }
}

function onFormSubmit(event) {
  event.preventDefault();

  const userEmail = event.target.email.value;
  const userMessage = event.target.message.value;

  if (userEmail === '' || userMessage === '') {
    return false;
  }

  event.target.reset();
  const localStorageData = JSON.parse(localStorage.getItem(storageKey));

  if (localStorageData) {
    console.log(localStorageData);
  }

  localStorage.removeItem(storageKey);
}
