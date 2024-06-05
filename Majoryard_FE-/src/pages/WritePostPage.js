import React, { useState } from "react";
import "./WritePostPage.css";
import HeaderSidebarSet from "../component/HeaderSidebar/HeaderSidebarSet";
import { useDropzone } from "react-dropzone";

const WritePostPage = () => {
  const [selectedBoard, setSelectedBoard] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState([]);

  const onDrop = (acceptedFiles) => {
    const filteredFiles = acceptedFiles.filter((file) =>
      ["image/jpeg", "image/jpg", "image/png"].includes(file.type)
    );

    setFiles((prevFiles) => [
      ...prevFiles,
      ...filteredFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      ),
    ]);

    if (filteredFiles.length !== acceptedFiles.length) {
      alert("JPEG, JPG, PNG 파일만 첨부가능합니다 !");
    }
  };

  const handleRemoveFile = (fileToRemove) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file !== fileToRemove));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/jpg, image/png",
    multiple: true,
  });

  const handlePublish = () => {
    const currentDate = new Date();
    console.log("게시판:", selectedBoard);
    console.log("제목:", title);
    console.log("내용:", content);
    console.log("첨부된 파일:", files);
    console.log("발행 시간:", currentDate.toLocaleString());
  };

  return (
    <div>
      <HeaderSidebarSet />

      <div className="container">
        <h2>글쓰기</h2>
        <div>
          <select
            className="select"
            id="boardSelect"
            value={selectedBoard}
            onChange={(e) => setSelectedBoard(e.target.value)}
          >
            <option value="">게시판을 선택하세요</option>
            <option value="자유게시판">자유게시판</option>
            <option value="홍보게시판">홍보게시판</option>
            <option value="질문게시판">질문게시판</option>
            <option value="시사이슈게시판">시사이슈게시판</option>
            <option value="스터디게시판">스터디게시판</option>
          </select>
        </div>

        <div>
          <input
            className="titlearea"
            type="text"
            id="titleInput"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력해주세요"
          />
        </div>
        <div {...getRootProps()} className="dropzone">
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>여기에 이미지를 드롭하세요...</p>
          ) : (
            <p>사진 업로드 *JPG, PNG만 가능합니다</p>
          )}
        </div>
        {files.map((file) => (
          <div key={file.name} className="file-preview">
            <img src={file.preview} alt={file.name} className="preview-image" />
            <button
              className="remove-button"
              onClick={() => handleRemoveFile(file)}
            >
              x
            </button>
          </div>
        ))}

        <div>
          <textarea
            className="textarea"
            id="contentTextarea"
            rows="5"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력해주세요"
          />
        </div>
        <div className="write-buttonContainer">
          <button className="write-done-button" onClick={handlePublish}>
            발행
          </button>
        </div>
      </div>
    </div>
  );
};

export default WritePostPage;
