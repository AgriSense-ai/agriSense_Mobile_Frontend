import { CameraView, useCameraPermissions } from "expo-camera";
import { useRef } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import axios from "axios";
import CameraButton from "@/components/ui/CameraButton";
import NavBarLayout from "@/components/navBar/NavBarLayout";
import { useDispatch } from "react-redux";
import { imageCaptureAction } from "@/store/imagePrediction";
import { useRouter } from "expo-router";

export default function App() {
  const dispatch = useDispatch();
  const [permission, requestPermission] = useCameraPermissions();
  const ref = useRef<CameraView>(null);
  const formData = new FormData();
  const router = useRouter();
  if (!permission) {
    return null;
  }

  const uploadImage = async (imageUri: string) => {
    console.log("Uploading image:", imageUri);
    router.push("(tabs)/cameraScreen/predictionPage" as any);
    try {
      formData.append("file", {
        uri: imageUri,
        type: "image/jpeg",
        name: "image.jpg",
      } as any);
      console.log("Form data prepared for upload:", formData);
      // FormData entries method not available in React Native

      const response = await axios.post(
        `https://e218-2c0f-3d00-64a-cc00-4071-bce0-2231-439c.ngrok-free.app/predict/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Image uploaded successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  };

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to use the camera
        </Text>
        <Button onPress={requestPermission} title="Grant permission" />
      </View>
    );
  }

  const takePicture = async () => {
    const photo = await ref.current?.takePictureAsync();
    try {
      if (photo?.uri) {
        console.log("Photo taken:", photo.uri);
        try {
          const prediction = await uploadImage(photo.uri);
          console.log("Prediction:", prediction);
        } catch (error) {
          console.error("Error during image upload:", error);
        }
        dispatch(imageCaptureAction(photo?.uri ?? null));
        // setUri(photo?.uri ?? null);
      } else {
        console.log("No photo URI returned");
      }
    } catch (error) {
      console.error("Error taking picture:", error);
    }
  };

  const renderCamera = () => {
    return (
      <>
        <CameraView
          style={styles.camera}
          ref={ref}
          mute={false}
          responsiveOrientationWhenOrientationLocked
        />
        <CameraButton onPress={takePicture} />
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          position: "absolute",
          alignItems: "center",
          top: "5%",
          zIndex: 10,
        }}
      >
        <NavBarLayout />
      </View>
      {renderCamera()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    flex: 1,
    width: "100%",
  },
});
