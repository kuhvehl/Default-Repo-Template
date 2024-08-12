import './style.css';

console.log('testing');

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
  } else if (process.env.NODE_ENV === 'production') {
    console.log('Looks like we are in production mode!')
  }
