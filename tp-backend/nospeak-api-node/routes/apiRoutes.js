const express = require('express');
const router = express.Router();

const verificarToken = require('../middlewares/verificarTokenMiddleware'); 

const usuarioController = require('../controllers/usuarioController');
const artistaController = require('../controllers/artistaController');
const albumController = require('../controllers/albumController');
const cancionController = require('../controllers/cancionController');
const playlistController = require('../controllers/playlistController');
const recomendacionController = require('../controllers/recomendacionController');
const historialController = require('../controllers/historialController');

router.get('/usuarios', verificarToken,usuarioController.getUsuarios);
router.post('/usuarios', usuarioController.createUsuario);
router.get('/usuarios/:id', verificarToken, usuarioController.getUsuarioById);
router.put('/usuarios/:id', verificarToken, usuarioController.updateUsuario);
router.delete('/usuarios/:id', verificarToken, usuarioController.deleteUsuario);
router.post('/usuarios-login/', usuarioController.loginUsuario);


router.get('/artistas', verificarToken, artistaController.getArtistas);
router.post('/artistas', verificarToken, artistaController.createArtista);
router.get('/artistas/:id', verificarToken, artistaController.getArtistaById);
router.put('/artistas/:id', verificarToken, artistaController.updateArtista);
router.delete('/artistas/:id', verificarToken, artistaController.deleteArtista);

router.get('/albums', verificarToken, albumController.getAlbums);
router.post('/albums', verificarToken, albumController.createAlbum);
router.get('/albums/:id', verificarToken, albumController.getAlbumById);
router.put('/albums/:id', verificarToken, albumController.updateAlbum);
router.delete('/albums/:id', verificarToken, albumController.deleteAlbum);

router.get('/canciones', verificarToken, cancionController.getCanciones);
router.post('/canciones', verificarToken, cancionController.createCancion);
router.get('/canciones/:id', verificarToken, cancionController.getCancionById);
router.put('/canciones/:id', verificarToken, cancionController.updateCancion);
router.delete('/canciones/:id', verificarToken, cancionController.deleteCancion);
router.get('/canciones-artista/:artista_id', verificarToken, cancionController.getCancionesPorArtista);
router.get('/canciones-album/:album_id', verificarToken ,cancionController.getCancionesPorAlbum);


router.get('/playlists', verificarToken, playlistController.getPlaylists);
router.post('/playlists', verificarToken, playlistController.createPlaylist);
router.get('/playlists/:id', verificarToken, playlistController.getPlaylistById);
router.put('/playlists/:id', verificarToken, playlistController.updatePlaylist);
router.delete('/playlists/:id', verificarToken, playlistController.deletePlaylist);
router.get('/playlists-usuario/:usuario_id', verificarToken, playlistController.getPlaylistsByUsuario);


router.get('/recomendaciones', verificarToken, recomendacionController.getRecomendaciones);
router.post('/recomendaciones', verificarToken, recomendacionController.createRecomendacion);
router.get('/recomendaciones/:id', verificarToken, recomendacionController.getRecomendacionById);
router.put('/recomendaciones/:id', verificarToken, recomendacionController.updateRecomendacion);
router.delete('/recomendaciones/:id', verificarToken, recomendacionController.deleteRecomendacion);

router.get('/historiales', verificarToken, historialController.getHistoriales);
router.post('/historiales', verificarToken, historialController.createHistorial);
router.get('/historiales/:id', verificarToken, historialController.getHistorialById);
router.put('/historiales/:id', verificarToken, historialController.updateHistorial);
router.delete('/historiales/:id', verificarToken, historialController.deleteHistorial);

module.exports = router;
