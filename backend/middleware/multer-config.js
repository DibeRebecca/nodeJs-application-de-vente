const multer=require('multer');

const MIME_TYPE=[{
    'Images/jpeg':'jpg',
    'Images/jpg':'jpg',
    'Images/png':'png',


}]
const storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'images')
    },
    filename:(req,file,callback)=>{
        const name=file.originalname.split(' ').join('_');
        const extension=MIME_TYPE[file.mimetype];
        callback(null,name + Date.now()+ '.'+ extension);

    }
});

module.exports=({storage}).single('image');