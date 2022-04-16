const express = require('express');
const router = express.Router();


/*router.get ('/', (req, res) => {
    const dir = path.parse(__dirname);
    console.log(dir);
    const ruta = dir.dir + '\\views\\home.html'; 
    res.sendFile(ruta);
}); */

router.get ('/', (req, res) => {
    res.sendFile('home.html', { root: './views' });
});


module.exports = router;
