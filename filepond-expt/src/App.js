import React, { useState } from 'react'

// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import axios from 'axios';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileEncode)

// Our app
function App() {
  const [files, setFiles] = useState([])
  const [img, setImg] = useState({ data: '', type: '', size: '' })

  const processFile = (photo) => {

    if (!photo) {
      return;
    }
    // console.log(photo[0].getFileEncodeBase64String());
    console.log(photo[0].fileType, '/', photo[0].fileSize);
    setFiles(photo);

    setImg({
      ...img,
      data: photo[0].getFileEncodeBase64String(),
      type: photo[0].fileType,
      size: photo[0].fileSize
    });

  }

  const sendData = async () => {

    console.log(img);
    const headers = { 'Content-Type': 'application/json' };

    try {

      const response = await axios.post('http://localhost:7789/api/photos', { img }, { headers });
      console.log(response);

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className="App">
      <FilePond
        files={files}
        instantUpload={false}
        allowProcess={false}
        onupdatefiles={(files) => processFile(files)}
        server="http://localhost:7789/api/photos"
        name="files"
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
      <button type="submit" onClick={() => sendData()}>Send</button>
    </div>
  )
}

export default App;
