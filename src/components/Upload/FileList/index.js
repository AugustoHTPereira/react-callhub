import React from "react";
import "./style.css";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdError, MdCheck } from "react-icons/md";

const FileList = ({ files }) => (
  <ul className="Files">
    {!!files.length &&
      files.map((file) => (
        <li key={file.id}>
          <div className="FileInfo">
            <img src={file.preview} alt={file.name} className="Preview" />

            <div className="Details">
              <p className="Title">{file.name}</p>
              <i className="Size">{file.size}</i>
            </div>

            {file.uploaded && (
              <button onClick={() => {}} title="Remover" className="Remove">
                <IoMdCloseCircleOutline size={22} />
              </button>
            )}

            <span className="Status">
              {file.error && <MdError color="red" size={22} />}
              {!file.error && file.uploaded && (
                <MdCheck title="Enviado com sucesso" color="green" size={22} />
              )}
            </span>
          </div>
        </li>
      ))}
  </ul>
);

export default FileList;
