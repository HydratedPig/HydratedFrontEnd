
function getAudio() {
  let audio = document.createElement('audio');
  return (src: string) => {
    audio?.pause?.();
    audio.src = src;
    audio.play();
  }
}

function getSingleton(fn: Function) {
  let res;
  return (...args: any[]) => {
    if (res) return res;
    res = fn(...args);
    return res;
  }
}

const getSingletonAudio = getSingleton(getAudio)

export function autoPlayAudio(src: string) {
  console.log('click');
  const audio = getSingletonAudio();
  audio(src);
} 