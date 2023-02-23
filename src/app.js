import './app.css';
import cat from './cat.png';

document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = `
    <img src="${cat}" />
  `
})

console.log(process.env.NODE_ENV);
console.log(TWO); // 2
console.log(api.domain)