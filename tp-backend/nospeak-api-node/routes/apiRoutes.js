const express = require('express');
const router = express.Router();


const usuarioController = require('../controllers/usuarioController');
const artistaController = require('../controllers/artistaController');
const albumController = require('../controllers/albumController');
const cancionController = require('../controllers/cancionController');
const playlistController = require('../controllers/playlistController');
const recomendacionController = require('../controllers/recomendacionController');
const historialController = require('../controllers/historialController');


router.post('/usuarios', usuarioController.createUsuario);
router.get('/usuarios/:id', usuarioController.getUsuarioById);
router.put('/usuarios/:id', usuarioController.updateUsuario);
router.delete('/usuarios/:id', usuarioController.deleteUsuario);


router.post('/artistas', artistaController.createArtista);
router.get('/artistas/:id', artistaController.getArtistaById);
router.put('/artistas/:id', artistaController.updateArtista);
router.delete('/artistas/:id', artistaController.deleteArtista);


router.post('/albumes', albumController.createAlbum);
router.get('/albumes/:id', albumController.getAlbumById);
router.put('/albumes/:id', albumController.updateAlbum);
router.delete('/albumes/:id', albumController.deleteAlbum);


router.post('/canciones', cancionController.createCancion);
router.get('/canciones/:id', cancionController.getCancionById);
router.put('/canciones/:id', cancionController.updateCancion);
router.delete('/canciones/:id', cancionController.deleteCancion);


router.post('/playlists', playlistController.createPlaylist);
router.get('/playlists/:id', playlistController.getPlaylistById);
router.put('/playlists/:id', playlistController.updatePlaylist);
router.delete('/playlists/:id', playlistController.deletePlaylist);


router.post('/recomendaciones', recomendacionController.createRecomendacion);
router.get('/recomendaciones/:id', recomendacionController.getRecomendacionById);
router.put('/recomendaciones/:id', recomendacionController.updateRecomendacion);
router.delete('/recomendaciones/:id', recomendacionController.deleteRecomendacion);


router.post('/historiales', historialController.createHistorial);
router.get('/historiales/:id', historialController.getHistorialById);
router.put('/historiales/:id', historialController.updateHistorial);
router.delete('/historiales/:id', historialController.deleteHistorial);

module.exports = router;
