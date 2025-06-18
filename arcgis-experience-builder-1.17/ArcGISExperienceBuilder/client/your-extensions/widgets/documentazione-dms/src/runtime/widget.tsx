

import PDFViewer from '../../../documentazione-dms-pdf/src/runtime/widget';
import DMSparameters from '../runtime/components/dms_parameters';
import './dms_style.css';

import React , { useState } from 'react';



function App() {
  // Using a sample PDF from Mozilla's PDF.js examples
  const samplePdfUrl = 'https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf';

  const [lastValue, setlastValue] = useState('');
  const childValueHandler = (valToHandle: any) => {
    setlastValue(valToHandle);
  };

  return (


    <div className="min-h-screen bg-gray-100">

      <button className="accordion">Parametri{lastValue} <span id="param_text"></span></button>


      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-6xl mx-auto">
          <DMSparameters varFromChild={childValueHandler} />
        </div>
      </div>


      <button className="accordion">PDF <span id="param_text"></span></button>

      <PDFViewer url={samplePdfUrl} />

    </div>

  );
}

export default App;