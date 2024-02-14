import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};


export default function DropZone(props) {
    const {setFilesForParent ,single=false,done=false} = props;
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps, acceptedFiles} = useDropzone({
    accept: {
      'image/*': []
    },
    maxFiles:single ? 1 : 4,
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });
  
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          alt={file.name}
          // Revoke data uri after image is loaded
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);
  useEffect(() => {
    if (single) {
      setFilesForParent(acceptedFiles[0])
    }else{
      setFilesForParent(acceptedFiles)
    }
  }, [acceptedFiles,setFilesForParent,single]);
  useEffect(() => {
    if (done) {
      setFiles([])
    }
  }, [done,setFiles]);

  return (
    <section className="container">
      <div style={{border:'1px dashed #333',padding:30,background:'lightgrey'}} {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        <em>({single ? '1' : "4"} file{single?' is':'s are'} the maximum number of files you can drop here)</em>
      </div>
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
    </section>
  );
}
