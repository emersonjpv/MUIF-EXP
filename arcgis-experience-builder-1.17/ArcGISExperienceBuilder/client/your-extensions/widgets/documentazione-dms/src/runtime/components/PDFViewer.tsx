import React, { useMemo } from 'react';

interface PDFViewerProps {
  data: {
    d: {
      results: Array<{
        EData: string;
        Doknr?: string;
        [key: string]: any;
      }>;
    };
  };
  width?: string | number;
  height?: string | number;
  className?: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({
  data,
  width = '100%',
  height = '600px',
  className = ''
}) => {
  const pdfUrl = useMemo(() => {
    try {
      // Estrai i dati base64 dal JSON
      console.log('PDFViewer', data)
      const pdfData = data?.d?.results?.[0]?.EData;

      if (!pdfData) {
        console.error('Nessun dato PDF trovato nel JSON');
        return null;
      }

      // Converti base64 in blob
      const binaryString = atob(pdfData);
      const bytes = new Uint8Array(binaryString.length);

      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }

      const blob = new Blob([bytes], { type: 'application/pdf' });
      return URL.createObjectURL(blob);
    } catch (error) {
      console.error('Errore nella conversione del PDF:', error);
      return null;
    }
  }, [data]);

  // Cleanup dell'URL quando il componente viene smontato
  React.useEffect(() => {
    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [pdfUrl]);

  if (!pdfUrl) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg ${className}`}
        style={{ width, height }}
      >
        <div className="text-center p-4">
          <div className="text-gray-500 mb-2">
          </div>
          <p className="text-gray-600 font-medium">Impossibile caricare il PDF</p>
          <p className="text-gray-500 text-sm">Verifica che i dati siano corretti</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`border border-gray-300 rounded-lg shadow-sm ${className}`}>
      <iframe
        src={pdfUrl}
        width={width}
        height={height}
        title="Visualizzatore PDF"
        className="w-full h-full rounded-lg"
        style={{ minHeight: height }}
      >
        <p className="p-4 text-center text-gray-600">
          Il tuo browser non supporta la visualizzazione PDF.{' '}
          <a
            href={pdfUrl}
            download
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Scarica il PDF
          </a>
        </p>
      </iframe>
    </div>
  );
};

export default PDFViewer;