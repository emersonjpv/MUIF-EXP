import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import '../runtime/dms_pdf_style.css'

// Set worker path for PDF.js
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

console.log('pdfjs.version',pdfjs.version)


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();



interface PDFViewerProps {
  dt: any;
}

const PDFViewer: React.FC<PDFViewerProps> = ( {dt} ) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [error, setError] = useState<Error | null>(null);
  const [pdfData, setPDF] = useState(null);

  setTimeout(() => {
       console.log('dt',dt)
  //  JSON.parse(dt);
  if(dt){
   
  // setPDF(dt)
  // let pdfbffr = dt
  // let pdfbffr = dt.d.results[0]
  // let pdfbffr = dt.d.results[0].__metadata.uri
  let pdfbffr = _displayPDFjs(dt.d.results[0].EData)
  setPDF(pdfbffr)
  console.log('pdfData',pdfData)
    }

  }, 5000);

    
      function _displayPDFjs( Base64PDF ) {

                let pdfData = atob(Base64PDF);

                var pdfBuffer = new Uint8Array(new ArrayBuffer(pdfData.length));

                
                for (var i = 0; i < pdfData.length; i++) {
                    pdfBuffer[i] = pdfData.charCodeAt(i);
                }

                let pdfJsVieweriframe : any = document.getElementById('sede-tecnica-pdfjs')
              
                let pdfjsLib = pdfJsVieweriframe.pdfjsLib;

                pdfjsLib.GlobalWorkerOptions.workerSrc = '../build/pdf.worker.js';

                let pdfJsViewer = pdfJsVieweriframe.PDFViewerApplication;

                pdfJsViewer.open(pdfBuffer)
                // this.pdfLoaderAnimation.hide();

            }


  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {

    setNumPages(numPages);
    setError(null);
  };

  const onDocumentLoadError = (error: Error) => {
    setError(error);
  };

  const changePage = (offset: number) => {
    setPageNumber(prevPageNumber => {
      const newPageNumber = prevPageNumber + offset;
      return numPages ? Math.min(Math.max(1, newPageNumber), numPages) : prevPageNumber;
    });
  };

  const changeScale = (delta: number) => {
    setScale(prevScale => Math.min(Math.max(0.5, prevScale + delta), 2));
  };

  const rotate = () => {
    setRotation(prevRotation => (prevRotation + 90) % 360);
  };

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-[600px] bg-gray-50 rounded-lg">
        <p className="text-gray-600">Error loading PDF: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto p-4">
    <div className="w-full bg-white rounded-lg shadow-lg p-4 mb-4">
      <div className="flex items-center justify-between mb-4 dms_center_items">

        <div className="flex items-center">
          <button
            onClick={() => changeScale(-0.1)}
            className="p-2 rounded hover:bg-gray-100"
            title="Zoom Out"
          >
          </button>
          <span className="mx-2">{Math.round(scale * 100)}%</span>
          <button
            onClick={() => changeScale(0.1)}
            className="p-2 rounded hover:bg-gray-100"
            title="Zoom In"
          >
          </button>
        </div>
      </div>

          <div className="App">
    </div>
 <div className="flex flex-col items-center dms_center_items">
</div>

      {pdfData && (
        <div className="flex flex-col items-center dms_center_items">
          <div id="sede-tecnica-pdfjs"></div>
          <Document
            file={pdfData}
            onLoadSuccess={onDocumentLoadSuccess}
            className="border rounded-lg document_css"
          >
            <Page
              pageNumber={pageNumber}
              scale={scale}
              className="shadow-lg"
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>

          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={() => changePage(-1)}
              disabled={pageNumber <= 1}
              className="p-2 rounded hover:bg-gray-100 disabled:opacity-50"
            >
            </button>
            <span>
              Page {pageNumber} of {numPages}
            </span>
            <button
              onClick={() => changePage(1)}
              disabled={pageNumber >= numPages}
              className="p-2 rounded hover:bg-gray-100 disabled:opacity-50"
            >
            </button>
          </div>
        </div>
      )}

    </div>
  </div>
  );
};

export default PDFViewer;