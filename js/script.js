let counter = 0;
const goURLs = () => {
  const txtArea = document.getElementById('urlList');
  const theURLs = txtArea.value.split(/\r?\n/);


  theURLs.forEach((nameUrlPair) => {
    counter++;
    if (nameUrlPair[1]) {
      createPod(nameUrlPair, counter);
    }
  });

  txtArea.value = '';
}


const createPod = (theUrlPair, theCounter) => {
  urlObj = theUrlPair.split(',');
  const podName = urlObj[0].trim();
  const theURL = urlObj[1].trim();

  const iframe = document.createElement('iframe');
  const pod = document.createElement('div');
  const overlay = document.createElement('div');
  const label = document.createElement('label');
  const btnRfsh = document.createElement('button');

  label.innerHTML = podName;
  btnRfsh.innerHTML = `<i class="fa fa-sync"></i>`;

  pod.classList.add('ifHolder', 'col-xl-3', 'col-lg-4', 'col-md-6');
  //overlay.classList.add('overlay');
  btnRfsh.classList.add('btn', 'btn-light', 'btn-refresh');

  btnRfsh.setAttribute('onclick', `frameReset('pod-${theCounter}')`);

  iframe.setAttribute('id', `pod-${theCounter}`);
  iframe.setAttribute('src', theURL);
  

  pod.appendChild(label);
  pod.appendChild(btnRfsh);
  pod.appendChild(overlay);
  pod.appendChild(iframe);

  document.getElementById('podsHolder').appendChild(pod);
}

const frameReset = (id) => {
  document.getElementById(id).src += '';
}

const allFramesRest = () => {
  let i;
  for (i = 1; i <= counter; i++) {
    //console.log(`reseting ${i}`);
    frameReset(`pod-${i}`);
  }
}
