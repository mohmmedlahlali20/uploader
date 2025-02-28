const Minio = require('minio');

const minioClient = new Minio.Client({
  endPoint: '127.0.0.1',
  port: 9000,
  useSSL: false,
  accessKey: 'UXPbLVXbuaRKTQywBg98',
  secretKey: 'jPhvvztMccaioEqKpviZoZa5D26p0egIscrqdkzf'
});

module.exports = minioClient;
