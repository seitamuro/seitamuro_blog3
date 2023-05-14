import { Button, Image } from "@chakra-ui/react";
import * as firebase from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCta833k8W1TGbr9tGa60y-uOOpZihd4Zw",
  authDomain: "seitamuro-blog3-experiment.firebaseapp.com",
  projectId: "seitamuro-blog3-experiment",
  storageBucket: "seitamuro-blog3-experiment.appspot.com",
  messagingSenderId: "1061901812373",
  appId: "1:1061901812373:web:9f2ba98b1c1b0bf7b0119c",
};
const app = firebase.initializeApp(firebaseConfig);

const storage = getStorage(app);
const storageRef = ref(storage, "image/");

const ImageUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [image_url, setImageURL] = useState<string | null>(null);
  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  const onClickSubmit = () => {
    uploadBytes(storageRef, file!).then((snapshot) => {
      console.log("Upload a blob or file!");
      console.log(snapshot);
    });
  };

  const getImageURL = () => {
    getDownloadURL(ref(storage, "image")).then((url) => {
      setImageURL(url);
    });
  };

  return (
    <div className="App-form">
      <input name="file" type="file" accept="image/*" onChange={onChangeFile} />
      <input type="button" disabled={!file} value="Upload" onClick={onClickSubmit} />
      <Button onClick={getImageURL}>Get Image URL</Button>
      <Image src={image_url!} alt="" />
    </div>
  );
};

export default ImageUpload;
