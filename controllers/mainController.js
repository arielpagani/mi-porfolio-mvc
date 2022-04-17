const controladorMain = {};

controladorMain.main = (req, res) => {
    res.sendFile('home.html', {root: 'views'});
}

module.exports = controladorMain;