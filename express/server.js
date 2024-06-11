const app = require('./app');
const PORT = process.env.PORT || 4000;
// Start the server and listen on the defined port
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});