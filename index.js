require('dotenv').config();


const express = require('express');
const upload = require('./uploadMiddleware');
const { uploadToMinIO } = require('./uploadService');
const cors = require('cors');

const app = express();
app.use(cors({
  origin: '*',
}));
app.post('/upload', upload.single('avatar'), async (req, res) => {
  

  try {
    if (req.file) {
    

      const imageUrl = await uploadToMinIO(req.file);
      console.log(!req.file);
      console.log("url",imageUrl);
      
      res.json({ imageUrl });

    } else {
      console.log('fuck');
      return res.status(400).json({ error: 'No file uploaded' });
    }


  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(4000, () => console.log('Server running on port 4000'));
