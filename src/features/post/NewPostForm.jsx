import React, { useState, useRef } from "react";
import { IoDocumentText, IoImageOutline } from "react-icons/io5";
import { BsLink45Deg, BsMic } from "react-icons/bs";
import { BiPoll } from "react-icons/bi";

const formTabs = [
  { title: "Post", icon: IoDocumentText },
  { title: "Images & Video", icon: IoImageOutline },
  { title: "Link", icon: BsLink45Deg },
  { title: "Poll", icon: BiPoll },
  { title: "Talk", icon: BsMic },
];

const NewPostForm = () => {
  const [selectedTab, setSelectedTab] = useState(formTabs[0].title);
  const [textInputs, setTextInputs] = useState({ title: "", body: "" });
  const [selectedFile, setSelectedFile] = useState(null);
  const selectFileRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCreatePost = () => {
    setLoading(true);
    // Handle post creation logic here
    setLoading(false);
  };

  const onSelectImage = (event) => {
    const reader = new FileReader();
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      if (readerEvent.target.result) {
        setSelectedFile(readerEvent.target.result);
      }
    };
  };

  const onTextChange = (event) => {
    const { name, value } = event.target;
    setTextInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col bg-white rounded-md mt-2">
      <div className="flex w-full border-b justify-between">
        {formTabs.map((item, index) => (
          <div
            key={index}
            className={`flex items-center p-2 cursor-pointer ${
              item.title === selectedTab ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => setSelectedTab(item.title)}
          >
            <item.icon className="mr-1" />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
      <div className="p-4">
        {selectedTab === "Post" && (
          <div>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="w-full p-2 border rounded mb-2"
              value={textInputs.title}
              onChange={onTextChange}
            />
            <textarea
              name="body"
              placeholder="Text (optional)"
              className="w-full p-2 border rounded"
              rows={5}
              value={textInputs.body}
              onChange={onTextChange}
            />
            <button
              className="bg-blue-500 text-white p-2 rounded mt-2"
              onClick={handleCreatePost}
              disabled={loading}
            >
              {loading ? "Creating..." : "Create Post"}
            </button>
          </div>
        )}
        {selectedTab === "Images & Video" && (
          <div className="flex flex-col items-center">
            <input
              type="file"
              ref={selectFileRef}
              className="hidden"
              onChange={onSelectImage}
            />
            <button
              className="bg-blue-500 text-white p-2 rounded mt-2"
              onClick={() => selectFileRef.current?.click()}
            >
              Upload Image/Video
            </button>
            {selectedFile && (
              <div className="mt-4">
                <img
                  src={selectedFile}
                  alt="Selected"
                  className="max-h-60 object-cover rounded"
                />
                <button
                  className="mt-2 text-red-500"
                  onClick={() => setSelectedFile(null)}
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewPostForm;
