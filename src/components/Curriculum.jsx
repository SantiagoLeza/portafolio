import { Worker, Viewer } from '@react-pdf-viewer/core';
import './Curriculum.css';

import PDF from './assets/CV.pdf';

function Curriculum() {

  var interval;

  const deleteText = () => {
    
    var div1;
    const empty = () => {
      div1 = document.getElementsByClassName('rpv-core__text-layer-text');
      if(div1.length === 0)
      {
        div1 = document.getElementsByClassName('rpv-core__text-layer-text');
        if(div1.length === 0)
        {
          div1 = document.getElementsByClassName('rpv-core__annotation-layer')
          if(div1.length === 0)
          {
            return true;
          }
        }
      }
    }
    
    while(!empty()) {
      div1 = document.getElementsByClassName('rpv-core__text-layer-text');
      for (let i = 0; i < div1.length; i++) {
        div1[i].remove(); 
      }
      div1 = document.getElementsByClassName('rpv-core__text-layer-text');
      for (let i = 0; i < div1.length; i++) {
        div1[i].remove();
      }
      div1 = document.getElementsByClassName('rpv-core__annotation-layer')
      for (let i = 0; i < div1.length; i++) {
        div1[i].remove();
      }
    }

    clearInterval(interval);
  }

  const checkLoad = () => {
    interval = setInterval(deleteText, 1000);
  }

  return (
    <div className='cv' id='cv'>

      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
          <Viewer fileUrl={PDF} 
          defaultScale={1.5}
          onDocumentLoad={checkLoad()}
          />
      </Worker>
      {
        checkLoad()
      }
    </div>
  )
}

export default Curriculum