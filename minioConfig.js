const Minio = require('minio');

const minioClient = new Minio.Client({
  endPoint: 'localhost',
  port: parseInt(process.env.MINIO_PORT), 
  useSSL: process.env.MINIO_USE_SSL === 'true',
  accessKey: process.env.MINIO_ACCESS_KEY,
  secretKey: process.env.MINIO_SECRET_KEY,
});

module.exports = minioClient;
