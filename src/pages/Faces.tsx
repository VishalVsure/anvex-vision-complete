import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye } from "lucide-react";
import { toast } from "sonner";
import DashboardLayout from "@/layout/DashboardLayout";

interface RecordData {
  id: string;
  name: string;
  timestamp: number;
  path: string;
}
export default function UploadComponent() {
  const [showModal, setShowModal] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [capturedImage, setCapturedImage] = useState<File | null>(null);
  const [textInput, setTextInput] = useState("");
  const [selectedImage, setSelectedImages] = useState<RecordData>();
  const [closeModal, setCloseModal] = useState<boolean>(false);

  const [records, setRecords] = useState<RecordData[]>([]);
  const webcamRef = useRef<Webcam>(null);

  const handleTakePicture = () => {
    setShowCamera(true);
  };

  const handleCapture = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        const blob = dataURItoBlob(imageSrc);
        const file = new File([blob], `capture_${Date.now()}.png`, {
          type: "image/png",
        });
        setCapturedImage(file);
        setShowCamera(false);
      }
    }
  };

  const dataURItoBlob = (dataURI: string) => {
    const byteString = atob(dataURI.split(",")[1]);
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeString });
  };

  const handleSubmit = async () => {
    if (capturedImage && textInput) {
      const formData = new FormData();
      formData.append("file", capturedImage);
      formData.append("name", textInput);

      try {
        const response = await axios.post(
          "http://127.0.0.1:5000/upload",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );

        if (response.status === 201) {
          setRecords((prev) => [response.data.metadata, ...prev]);
          toast.success("Image Uploaded");
          resetImage();
          setShowModal(false);
          console.log("Image saved");
        }
      } catch (error) {
        console.error("Error saving image:", error);
        alert("Failed to save image");
      }
    } else {
      alert("Please capture an image and provide a name.");
    }
  };

  const resetImage = () => {
    setCapturedImage(null);
    setTextInput("");
  };

  useEffect(() => {
    const fetchImages = async () => {
      const images = await axios.get("http://localhost:5000/list_images");
      if (images.status === 200) {
        setRecords(images.data.images);
      }
    };
    fetchImages();
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-4 pb-4">
        <div className="flex justify-end">
          <Button onClick={() => setShowModal(true)}>Upload</Button>
        </div>
        {/* Records Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Saved Records</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-md font-bold">Name</TableHead>
                  <TableHead className="text-md font-bold">Timestamp</TableHead>
                  <TableHead className="text-md font-bold">
                    Preview Image
                  </TableHead>
                  <TableHead className="text-md font-bold">Action</TableHead>
                </TableRow>
              </TableHeader>
              {records.length > 0 ? (
                <TableBody>
                  {records.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell className="font-medium">
                        {record.name}
                      </TableCell>
                      <TableCell>
                        {new Date(record.timestamp).toLocaleString()}
                      </TableCell>
                      <TableCell>
                        <img
                          src={`http://localhost:5000/${record.path}`}
                          alt="Saved"
                          className="w-16 h-16 object-cover rounded-md border"
                        />
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          onClick={() => {
                            setCloseModal(false);
                            setSelectedImages(record);
                          }}
                        >
                          <Eye />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              ) : (
                <p className="font-medium pt-4">No Records Found</p>
              )}
            </Table>
          </CardContent>
        </Card>

        {selectedImage && !closeModal && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="relative bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-2xl p-6 max-w-6xl mx-auto flex items-center">
              <button
                className="absolute top-2 right-4 text-white text-3xl font-bold z-50"
                onClick={() => setCloseModal(true)}
              >
                &times;
              </button>
              {/* Card containing image and badges */}
              <div className="flex items-center w-full">
                {/* Image container */}
                <img
                  src={`http://localhost:5000/${selectedImage.path}`}
                  alt={selectedImage.name}
                  className="max-w-full max-h-[75vh] rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        )}

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-lg relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 rounded-full p-2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close"
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold text-center mb-6">
                Click a Selfie
              </h2>

              <div className="flex flex-col items-center space-y-6">
                {capturedImage ? (
                  <>
                    <img
                      src={URL.createObjectURL(capturedImage)}
                      alt="Captured"
                      className="w-full rounded-lg border border-gray-300 shadow-sm"
                    />
                    <p>Didn't like it?</p>
                    <button
                      onClick={() => resetImage()}
                      className="w-full py-2 px-4 rounded-md bg-gray-300"
                    >
                      Retake Image
                    </button>
                  </>
                ) : (
                  <>
                    {showCamera ? (
                      <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/png"
                        className="w-full rounded-md"
                        mirrored={true}
                      />
                    ) : (
                      <img
                        src="placeholder.png"
                        alt="placeholder"
                        className="w-1/2 rounded-lg border border-gray-300 shadow-sm"
                      />
                    )}
                  </>
                )}

                {!showCamera && !capturedImage && (
                  <button
                    onClick={handleTakePicture}
                    className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700"
                  >
                    Take a Picture
                  </button>
                )}

                {showCamera && (
                  <button
                    onClick={handleCapture}
                    className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600"
                  >
                    Capture Photo
                  </button>
                )}

                <label className="flex flex-col w-full">
                  <span className="text-gray-700 font-medium mb-2">Name:</span>
                  <input
                    type="text"
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                    placeholder="Enter Your Name"
                  />
                </label>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
