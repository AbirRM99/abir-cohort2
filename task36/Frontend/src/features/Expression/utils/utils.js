import { useEffect, useRef, useState } from "react";
import { FaceLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";

export async function init({ videoRef, faceLandmarkerRef, setMood }) {
    const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
    );

    faceLandmarkerRef.current =
        await FaceLandmarker.createFromOptions(vision, {
            baseOptions: {
                modelAssetPath:
                    "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task"
            },
            runningMode: "VIDEO",
            numFaces: 1,
            outputFaceBlendshapes: true
        });

    startCamera({ videoRef });
}


export async function startCamera({ videoRef }) {
    const stream = await navigator.mediaDevices.getUserMedia({
        video: true
    });

    videoRef.current.srcObject = stream;
}


export function detectMood(blend, setMood) {
    const list = Array.isArray(blend) ? blend : Object.values(blend);

    const get = (name) =>
        list.find((b) => b.categoryName === name)?.score || 0;

    const smile =
        (get("mouthSmileLeft") + get("mouthSmileRight")) / 2;

    const mouthOpen = get("jawOpen");

    const browDown =
        (get("browDownLeft") + get("browDownRight")) / 2;

    const browUp = get("browInnerUp");

    if (smile > 0.5) {
        setMood("😊 Happy");
    }
    else if (mouthOpen > 0.6 && browUp > 0.3) {
        setMood("😮 Surprised");
    }
    else if (browDown > 0.4) {
        setMood("😠 Angry");
    }
    else if (browUp > 0.5 && smile < 0.2) {
        setMood("😢 Sad");
    }
    else {
        setMood("😐 Neutral");
    }
}


export function detect({ videoRef, faceLandmarkerRef, setMood }) {
    if (!faceLandmarkerRef.current) return;

    const results = faceLandmarkerRef.current.detectForVideo(
        videoRef.current,
        performance.now()
    );

    if (results.faceBlendshapes?.length > 0) {
        const blend = results.faceBlendshapes[0].categories;
        detectMood(blend, setMood);
    }
}