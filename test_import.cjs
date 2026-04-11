console.log('Test log');
try {
  require('react-helmet-async');
  console.log('SUCCESS: react-helmet-async found');
} catch (e) {
  console.log('FAILURE: react-helmet-async NOT found');
}
