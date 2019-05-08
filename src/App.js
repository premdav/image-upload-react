import React from 'react';
import './App.css';

import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: []
    };
  }

  handleInit() {
    console.log('Filepond instance initialized', this.pond);
  }

  onUploadPhoto() {
    
    console.log('Sent : ', this.state.file.file, ' to server');
  }
  
  render() {
    return(
      <div className='App'>
        <FilePond ref={ref => this.pond = ref}
          files={this.state.files}
          allowMultiple={false}
          maxFiles={1}
          oninit={() => this.handleInit()}
          onupdatefiles={fileItems => {
            this.setState({
              file: fileItems[0]
            });
            console.log(this.state.file);
          }} />
          <button onClick={this.onUploadPhoto.bind(this)}>Click to upload</button>
      </div>
    );
  }
}

export default App;
