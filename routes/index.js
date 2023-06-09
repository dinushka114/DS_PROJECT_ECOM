const router = require("express").Router()
const multer = require("multer")
const categoryController = require("../controllers/category.controller");
const eventController = require("../controllers/event.controller");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});


const upload = multer({ storage: storage });

router.post('/add-category' , upload.single("thumbnail"), categoryController.addCategory);
router.get('/get-categories' , categoryController.getCategories);
router.post('/events' , eventController.event);


module.exports = router;