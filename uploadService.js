const minioClient = require('./minioConfig');

const bucketName = 'avatars';

const uploadToMinIO = async (file) => {
  console.log(file, "file");
    
  if (!file) throw new Error('No file provided');

  const uniqueFileName = `image_${Date.now()}_${file.originalname}`;
  
  await minioClient.putObject(bucketName, uniqueFileName, file.buffer);
  console.log("name", await minioClient.putObject(bucketName, uniqueFileName));
  console.log("File uploaded successfully:", uniqueFileName);
  return `http://127.0.0.1:9000/${bucketName}/${uniqueFileName}`;
};

module.exports = { uploadToMinIO };
