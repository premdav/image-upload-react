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
      files: []
    };
  }

  handleInit() {
    console.log('Filepond instance initialized', this.pond);
  }
  
  render() {
    return(
      <div className='App'>
        <FilePond ref={ref => this.pond = ref}
          files={this.state.files}
          allowMultiple={true}
          maxFiles={3}
          oninit={() => this.handleInit()}
          onupdatefiles={fileItems => {
            this.setState({
              files: fileItems.map(fileItem => fileItem.file)
            });
          }} />
      </div>
    );
  }
}

export default App;
