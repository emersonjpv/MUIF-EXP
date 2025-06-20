

// import PDFViewer from '../../../documentazione-dms-pdf/src/runtime/widget';
import DMSparameters from '../runtime/components/dms_parameters';
import './dms_style.css';
import React, { useState } from 'react';
import intereese_Example from '../runtime/components/intereese_Example.json'
// import config from './config.json'


function App() {
  // Using a sample PDF Mozilla's PDF.js
  const samplePdfUrl = 'https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf';
  // const pdf_data_or_url = 'https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf';
  // const [pdf_data_or_url, setPDFData] = useState(null);

  const [lastValue, setlastValue] = useState('');
  const childValueHandler = (valToHandle: any) => {
    console.log('valToHandle', valToHandle)

    setlastValue(valToHandle);

    console.log('intereese_Example', intereese_Example)

    // var pdf_to_send = intereese_Example
    // setPDFData(pdf_to_send)



  };

  return (


    <div className="min-h-screen bg-gray-100">

      {/* <button className="accordion">Parametri{lastValue} <span id="param_text"></span></button> */}


      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-6xl mx-auto">
          <DMSparameters varFromChild={childValueHandler} />
        </div>
      </div>


      {/* <button className="accordion">PDF <span id="param_text"></span></button> */}

      {/* <PDFViewer dt={samplePdfUrl} /> */}

    </div>

  );
}

export default App;