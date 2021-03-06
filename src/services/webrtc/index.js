import firebase from "@/services/firebase";

const servers = {
  // iceServers: [
  //   {
  //     urls: ["stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302"],
  //   },
  // ],
  // iceCandidatePoolSize: 10,
  iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
};

// Global State
const pc = new RTCPeerConnection(servers);
let localStream = null;
let remoteStream = null;

// 1. Setup media sources
async function setupMediaSources() {
  // Pergunta ao navegador se há acesso a câmera
  localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
  console.debug(localStream);
  remoteStream = new MediaStream();

  // Push tracks from local stream to peer connection
  // As tracks são o video e o audio
  localStream.getTracks().forEach((track) => {
    pc.addTrack(track, localStream);
  });

  // Pull tracks from remote stream, add to video stream
  pc.ontrack = (event) => {
    console.debug("pc.ontrack", event);
    event.streams[0].getTracks().forEach((track) => {
      remoteStream.addTrack(track);
    });
  };

  return {
    localStream,
    remoteStream,
  };
}

async function createOffer() {
  const callId = await firebase.calls.createCall();
  console.debug("callId", callId);

  // Get candidates for caller, save to db
  pc.onicecandidate = (event) => {
    // console.debug("Get candidates for caller, save to db", { event }, event?.candidate?.toJSON());
    console.debug("Get candidates for caller, save to db");
    event.candidate && firebase.calls.pushIceOffer(callId, event.candidate.toJSON());
  };

  // Create offer
  const offerDescription = await pc.createOffer();
  console.debug({ offerDescription });
  await pc.setLocalDescription(offerDescription);

  const answeredCallback = (answer) => {
    console.debug("answeredCallback");
    if (!pc.currentRemoteDescription) {
      const answerDescription = new RTCSessionDescription(answer);
      pc.setRemoteDescription(answerDescription);
    }
  };

  const answeredICECallback = (ice) => {
    console.debug("answeredICECallback");
    const candidate = new RTCIceCandidate(ice);
    pc.addIceCandidate(candidate);
  };

  return await firebase.calls.createOffer(
    callId,
    offerDescription.sdp,
    offerDescription.type,
    answeredCallback,
    answeredICECallback
  );
}

async function answerCall(callId) {
  const offerDescription = await firebase.calls.getOffer(callId);
  // await pc.setRemoteDescription(new RTCSessionDescription(offerDescription));

  pc.onicecandidate = (event) => {
    // console.debug("answerCall caller", { event }, event?.candidate?.toJSON());
    console.debug("answerCall caller");
    // event.candidate && answerCandidates.add(event.candidate.toJSON());
    event.candidate && firebase.calls.pushIceAnswer(callId, event.candidate.toJSON());
  };

  await pc.setRemoteDescription(new RTCSessionDescription(offerDescription));

  const answerDescription = await pc.createAnswer();
  await pc.setLocalDescription(answerDescription);

  const offerICECallback = (ice) => {
    console.debug("offerICECallback called");
    pc.addIceCandidate(new RTCIceCandidate(ice));
  };

  const r0 = await firebase.calls.answerCall(
    callId,
    answerDescription.type,
    answerDescription.sdp,
    offerICECallback
  );
  console.debug(r0);

  return offerDescription;
}

export default {
  setupMediaSources,
  createOffer,
  answerCall,
};
