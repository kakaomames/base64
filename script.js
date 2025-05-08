const base64Audio = "data:audio/mp3;base64,//uQxAAADAAAB..."
  const audio = document.getElementById("myAudio");
  const source = document.createElement("source");
  source.src = base64Audio;
  source.type = "audio/mp3";
  audio.appendChild(source);
  audio.addEventListener('canplaythrough',
                         () => { audio.play();
                               });
