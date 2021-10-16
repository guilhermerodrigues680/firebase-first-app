<template>
  <!-- Grid Principal -->
  <div class="container my-5">
    <div class="row gx-5">
      <div class="col-10">
        <!-- Navbar Video conferencia -->
        <div class="row pb-3">
          <div class="col-2">logo</div>
          <div class="col-10 bg-1 d-flex justify-content-between rounded">
            <div>
              <h2 class="h6">Reunião de estreia webapp Guilherme</h2>
              <small class="text-black-50">Produtividade</small>
            </div>

            <div class="d-flex align-items-center justify-content-end">
              <button class="btn bg-white rounded-circle shadow-sm">
                <i class="material-icons">tune</i>
              </button>

              <button class="btn bg-white rounded-circle shadow-sm">
                <i class="material-icons">share</i>
              </button>
            </div>
          </div>
        </div>

        <!-- VideoConferencia -->
        <div class="row pb-3">
          <div class="col-12 bg-dark rounded">
            <div class="video-meeting">
              <video ref="webcamVideo" autoplay playsinline></video>
            </div>
            <div class="video-meeting">
              <video ref="remoteVideo" autoplay playsinline></video>
            </div>
          </div>
        </div>

        <!-- Controles VideoConferencia  -->
        <div class="row bg-1 rounded">
          <div class="col-12">
            <span>Cam</span>
            <span>Mic</span>
            <span>Share</span>
            <span>Chat</span>
            <span>Leave</span>
          </div>
        </div>
      </div>

      <!-- Chat -->
      <div class="col-2 bg-1 rounded">col-2</div>
    </div>

    <button @click="createOffer()">Criar oferta</button>

    {{ callId }}

    <form @submit.prevent="joinInCallFormSubmit($event)">
      <input type="text" placeholder="ID" name="call_id" />
      <button>Entrar na chamada</button>
    </form>
  </div>
</template>

<script>
import webrtc from "@/services/webrtc";

export default {
  name: "VideoMeeting",

  data: () => ({
    callId: null,
  }),

  mounted() {
    this.init();
  },

  methods: {
    async init() {
      const { webcamVideo, remoteVideo } = this.$refs;
      console.debug({ webcamVideo, remoteVideo });

      let res;
      try {
        res = await webrtc.setupMediaSources();
      } catch (error) {
        console.debug(error);
        return;
      }
      console.debug({ res });
      const { localStream, remoteStream } = res;
      // webcamVideo.srcObject = localStream;
      localStream;
      remoteVideo.srcObject = remoteStream;
    },

    async createOffer() {
      let res;
      try {
        res = await webrtc.createOffer();
      } catch (error) {
        console.debug(error);
        return;
      }
      console.debug({ res });
      this.callId = res.callId;
    },

    async joinInCallFormSubmit(event) {
      /**@type HTMLFormElement */
      const form = event.target;
      const callId = form.elements.call_id.value;
      console.debug(callId);
      if (!callId) {
        return;
      }

      let res;
      try {
        res = await webrtc.answerCall(callId);
      } catch (error) {
        console.debug(error);
        alert("offer não encontrada");
        return;
      }

      console.debug({ res });
      alert("offer encontrada");
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-1 {
  background: #f0f4f9;
}

.video-meeting {
  background: gray;
  // min-height: 50vh;
}
</style>
