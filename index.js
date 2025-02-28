require('dotenv').config();


const express = require('express');
const upload = require('./uploadMiddleware');
const { uploadToMinIO } = require('./uploadService');
const cors = require('cors');

const app = express();
app.use(cors());
  app.post('/upload', upload.single('avatar'), async (req, res) => {
      
      
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }
      
      const imageUrl = await uploadToMinIO(req.file);
      console.log(imageUrl);
      
      return res.status(200).json({ imageUrl });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

app.listen(4000, () => console.log('Server running on port 4000'));
