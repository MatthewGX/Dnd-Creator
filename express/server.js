const app = require('./hello');
const PORT = process.env.PORT || 3000;
// Start the server and listen on the defined port
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});