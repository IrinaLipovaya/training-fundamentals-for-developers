const cloudinary = require('cloudinary');

cloudinary.v2.uploader.upload('../../assets/images/giraffe.jpg', {
        use_filename: true
    })
    .then(uploadResult => console.log(uploadResult))
    .catch(error => console.error(error));