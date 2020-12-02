import React from 'react';

import Dropzone from 'react-dropzone';
import { DropContainer, UploadMessage } from './style';

const ImageUpload = ({ onUpload }) => {
  function renderDragMessage(isDragActive, isDragRejest) {
    if (!isDragActive) {
      return (
        <UploadMessage>Selecione ou arraste o arquivo aqui.</UploadMessage>
      );
    }

    if (isDragRejest) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    }

    return <UploadMessage type="success">Solte o arquivo aqui</UploadMessage>;
  };
  return (
    <>
     <Dropzone multiple={false} accept="image/*" onDropAccepted={files => onUpload(files)}>
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DropContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input {...getInputProps()} data-testid="upload"/>
            {renderDragMessage(isDragActive, isDragReject)}
          </DropContainer>
        )}
      </Dropzone>
    </>
  );
};

export default ImageUpload;