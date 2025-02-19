const Minio = require('minio');

const minioClient = new Minio.Client({
  endPoint: 'localhost',
  port: 9000,
  useSSL: false,
  accessKey: 'UXPbLVXbuaRKTQywBg98',
  secretKey: 'jPhvvztMccaioEqKpviZoZa5D26p0egIscrqdkzf'
});

module.exports = minioClient;
