const express = require('express');
const app = express();

//app.use(express.static('public'));
app.use(express.static('./'));


//app.listen(3000, () => {
//    console.log('Server conected on port 3000');
//});

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server conected on port ${PORT}`);
});