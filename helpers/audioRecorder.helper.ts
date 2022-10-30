export let audioRecorder = {
  audioBlob: [] as Blob[],
  mediaRecorder: {} as MediaRecorder,
  mediaStream: {} as MediaStream,

  /*
   * start recording
   * */

  startRecording: async () => {
    if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
      new Error(
        'Browser API navigator.mediaDevices.getUserMedia not available'
      );
    } else {
      try {
        return await navigator.mediaDevices
          .getUserMedia({
            audio: true
          })
          .then(stream => {
            audioRecorder.mediaStream = stream;
            audioRecorder.mediaRecorder = new MediaRecorder(stream);
            audioRecorder.audioBlob = [];
            audioRecorder.mediaRecorder.ondataavailable = event => {
              audioRecorder.audioBlob.push(event.data);
            };
            audioRecorder.mediaRecorder.start();
          });
      } catch (err) {
        console.log('err', err);
        new Error('The following error occurred: ' + err);
      }
    }
  },

  /*
   * stop recording
   * */

  stopRecording: async () => {
    return new Promise(resolve => {
      let mimeType = 'audio/webm';
      audioRecorder.mediaRecorder.onstop = () => {
        let blob = new Blob(audioRecorder.audioBlob, {
          type: mimeType
        });
        resolve(blob);
      };
      audioRecorder.mediaRecorder.stop();

    });
  }
};
