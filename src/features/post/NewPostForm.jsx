import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { IoDocumentText, IoImageOutline } from "react-icons/io5";
import { BsLink45Deg } from "react-icons/bs";
import { useMutation } from "@tanstack/react-query";
import { createPost } from "../../services/apiPost";
import toast from "react-hot-toast";
const formTabs = [
  { title: "Post", icon: IoDocumentText },
  { title: "Images & Video", icon: IoImageOutline },
  { title: "Link", icon: BsLink45Deg },
];

function NewPostForm(){
  const [selectedTab, setSelectedTab] = useState(formTabs[0].title);
  const [selectedFile, setSelectedFile] = useState(null);
  const selectFileRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, setValue, watch, formState: { errors }, reset } = useForm();
  const {mutate} = useMutation({
    mutationFn: createPost,
    onSuccess: (data) => {
      console.log(data);
      toast.success("Create post successfully")
    },
    onError: (err) => toast.error(err.response?.data?.message || "An error occured during creating post")
  })

  function onSubmit(data){
    let postData = {
      caption: data.title,
      type: selectedTab.toLowerCase(),
    };

    switch (selectedTab) {
      case "Post":
        postData = { ...postData, content: data.body || "" };
        break;
      case "Images & Video":
        if (selectedFile) {
          postData = { ...postData, media: selectedFile };
        } else {
          alert("Please select an image or video.");
          return;
        }
        break;
      case "Link":
        postData = { ...postData, url: data.url };
        break;
      default:
        break;
    }

    mutate(postData);
  }

  

  const onSelectImage = (event) => {
    const reader = new FileReader();
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      if (readerEvent.target.result) {
        setSelectedFile(readerEvent.target.result);
        setValue("file", readerEvent.target.result); // Save file to react-hook-form
      }
    };
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
        <form onSubmit={handleSubmit(onSubmit)}>
          {selectedTab === "Post" && (
            <div>
              <input
                type="text"
                id="title"
                placeholder="Title"
                className="w-full p-2 border rounded mb-2"
                {...register("title", { required: "Title is required" })}
              />
              {errors.title && <p className="text-red-500">{errors.title.message}</p>}
              <textarea
                id="body"
                placeholder="Text (optional)"
                className="w-full p-2 border rounded"
                rows={5}
                {...register("body")}
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded mt-2"
                disabled={loading}
              >
                {loading ? "Creating..." : "Create Post"}
              </button>
            </div>
          )}
          {selectedTab === "Images & Video" && (
            <div className="flex flex-col items-center">
              <input
                type="text"
                id="title"
                placeholder="Title"
                className="w-full p-2 border rounded mb-2"
                {...register("title", { required: "Title is required" })}
              />
              {errors.title && <p className="text-red-500">{errors.title.message}</p>}
              <input
                type="file"
                ref={selectFileRef}
                className="hidden"
                onChange={onSelectImage}
              />
              <button
                type="button"
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
                    type="button"
                    className="mt-2 text-red-500"
                    onClick={() => {
                      setSelectedFile(null);
                      setValue("file", null);
                    }}
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
          )}
          {selectedTab === "Link" && (
            <div>
              <input
                type="text"
                id="title"
                placeholder="Title"
                className="w-full p-2 border rounded mb-2"
                {...register("title", { required: "Title is required" })}
              />
              {errors.title && <p className="text-red-500">{errors.title.message}</p>}
              <input
                type="url"
                id="url"
                placeholder="Link Url"
                className="w-full p-2 border rounded"
                {...register("url", { required: "URL is required" })}
              />
              {errors.url && <p className="text-red-500">{errors.url.message}</p>}
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded mt-2"
                disabled={loading}
              >
                {loading ? "Creating..." : "Create Post"}
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default NewPostForm;
