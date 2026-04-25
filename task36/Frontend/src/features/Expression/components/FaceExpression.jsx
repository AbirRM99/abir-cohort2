import { useEffect, useRef, useState } from "react";
import { FaceLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";
import { detect, detectMood, init, startCamera } from "../utils/utils";


export default function MoodDetector() {
    const videoRef = useRef(null);
    const [mood, setMood] = useState("Detecting...");
    const faceLandmarkerRef = useRef(null);




    useEffect(() => {

        init({videoRef, faceLandmarkerRef, setMood});
    }, []);

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Your Mood: {mood}</h1>

            <video
                ref={videoRef}
                autoPlay
                playsInline
                style={{
                    width: 400,
                    borderRadius: 10,
                    transform: "scaleX(-1)"
                }}
            />
            <button onClick={() => detect({videoRef, faceLandmarkerRef, setMood})}>Detect Expression</button>
        </div>
    );
}
