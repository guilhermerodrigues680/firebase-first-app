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
            <div class="video-meeting"></div>
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
  </div>
</template>

<script>
export default {
  name: "VideoMeeting",
};
</script>

<style lang="scss" scoped>
.bg-1 {
  background: #f0f4f9;
}

.video-meeting {
  background: gray;
  min-height: 50vh;
}
</style>
