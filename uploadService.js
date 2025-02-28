const minioClient = require('./minioConfig');

const bucketName = 'avatars';

const uploadToMinIO = async (file) => {
  if (!file) throw new Error('No file provided');
console.log('====================================');
console.log(file);
console.log('====================================');
  const uniqueFileName = `image_${Date.now()}_${file.originalname}`;
  
  try {
    console.log(`Uploading ${uniqueFileName} to MinIO...`);
    
    await minioClient.putObject(bucketName, uniqueFileName, file.buffer, file.size, {
      'Content-Type': file.mimetype,
    });

    console.log("✅ File uploaded successfully:", uniqueFileName);
    return `http://127.0.0.1:9000/${bucketName}/${uniqueFileName}`;
  } catch (error) {
    console.error("❌ MinIO Upload Error:", error);
    throw new Error('Failed to upload file to MinIO');
  }
};



module.exports = { uploadToMinIO };
