import React, { Component } from "react";
import Dropzone from "react-dropzone";
import "./style.css";
import { MdAttachFile, MdError, MdCheck } from "react-icons/md";

// import { Container } from './styles';

export default class Upload extends Component {
  renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) return <MdAttachFile size={28} />;

    if (isDragReject) return <MdError size={28} />;

    return <MdCheck size={28} />;
  };

  render() {
    const { onUpload } = this.props;

    return (
      <div>
        <Dropzone accept="image/*" onDropAccepted={(files) => onUpload(files)}>
          {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
            <div
              {...getRootProps()}
              className={
                isDragReject
                  ? "Dropzone Invalid"
                  : isDragActive
                  ? "Dropzone Success"
                  : "Dropzone"
              }
            >
              <input {...getInputProps()} type="file" name="" id="" />
              {this.renderDragMessage(isDragActive, isDragReject)}
            </div>
          )}
        </Dropzone>
      </div>
    );
  }
}
