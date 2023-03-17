import React from 'react'

const CloudinaryUploadWidget = (props) => {

  let imageFunctionValue = props.imageFunctionValue;

   const cloudName = "dd1gg0wzh"; // replace with your own cloud name
   const uploadPreset = "mgozwakv";

     var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset
        // cropping: true, //add a cropping step
        // showAdvancedOptions: true,  //add advanced options (public_id and tag)
        // sources: [ "local", "url"], // restrict the upload sources to URL and local files
        // multiple: false,  //restrict upload to a single file
        // folder: "user_images", //upload files to the specified folder
        // tags: ["users", "profile"], //add the given tags to the uploaded files
        // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
        // clientAllowedFormats: ["images"], //restrict uploading to image files only
        // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
        // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
        // theme: "purple", //change to a purple theme
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          imageFunctionValue(result.info.secure_url)
          // document
          //   .getElementById("uploadedimage")
          //   .setAttribute("src", result.info.secure_url);
        }
      }
    );

    function upload_widget_opener(){
      myWidget.open();
      console.log("opennn");
      // imageFunctionValue("mock stringggggggg");
    }
    // var el = document.getElementById("upload_widget");
    // if(el){
    // el.addEventListener(
    //   "click",
    //   function () {
    //     myWidget.open();
    //     console.log("opennn")
    //       // imageFunctionValue("mock stringggggggg");

    //   },
    //   false
    // );

    // }
  
  return (
    <div>
      <button onClick={upload_widget_opener} className="cloudinary-button">
        Upload
      </button>
    </div>
  );
}

export default CloudinaryUploadWidget