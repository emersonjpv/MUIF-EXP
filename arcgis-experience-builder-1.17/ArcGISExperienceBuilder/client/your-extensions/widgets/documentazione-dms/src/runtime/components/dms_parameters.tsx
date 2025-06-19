import React, { useState } from 'react';
// import esriRequest from "@arcgis/core/request.js";
import config from './config.json'
import '../components/dms_parameters_style.css'
import Query from "@arcgis/core/rest/support/Query.js";
import intereese_Example from './intereese_Example.json'
// import { Document, Page, pdfjs } from 'react-pdf';
// import { PDFService, PDFDocument } from '../components/PDFService';
import intereese_Example2 from './intereese_Example (1).json'
import wfwf from './wfwf.json'





import { jsx, css, uuidv1, DataSourceTypes, loadArcGISJSAPIModule, getAppStore, defaultMessages as jimuCoreMessages, hooks, polished, focusElementInKeyboardMode } from 'jimu-core'
import FeatureLayer from 'esri/layers/FeatureLayer';
// import PDFViewer from 'widgets/documentazione-dms-pdf/src/runtime/widget';

import PDFViewer from './PDFViewer';








// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.mjs',
//   import.meta.url,
// ).toString();



interface DMSparametersProps {
  varFromChild: any;
}

const tipologie = config.tipologie


console.log('tipologie', tipologie)



const pdf_array = config.pdf_array

console.log('pdf_array', pdf_array)

pdf_array.push(intereese_Example)
pdf_array.push(intereese_Example2)
pdf_array.push(wfwf)



console.log('pdf_array', pdf_array)


async function _getData(type: string, params: any) {

  console.log('param', params)
  let outfield
  let completeRequestUrl

  if (type == 'tipologia') {
    completeRequestUrl = tipologie[params].url

    outfield = 'SETE'
  } else if (type == 'sede_tecnica') {
    outfield = 'SETE'



    // let DMSDOCSet = 'https://muif.rfi.it/ProxyEsri/proxy.jsp?https://inreteese-wd.rfi.it/sap/opu/odata/SAP/ZMOO_SRV_SRV/DMSDOCSet?%24filter=Tplnr%20eq%20%27LO0011%27%20and%20ZmooPsf%20eq%20%27%27&$format=json'
    // let DMSDOCSet= "https://inreteese-wd.rfi.it/sap/opu/odata/SAP/ZMOO_SRV_SRV/DMSDOCSet?%24filter=Tplnr eq 'TPLNR_VALUE' and ZmooPsf eq ''&$format=json "
    let DMSDOCSet = 'https://muif.rfi.it/ProxyEsri/proxy.jsp?https://inreteese-wd.rfi.it/sap/opu/odata/SAP/ZMOO_SRV_SRV/DMSFILESet?'

    completeRequestUrl = DMSDOCSet.replace('TPLNR_VALUE', params)
  } else if (type == 'dms_pdf') {

    let DMSDOCSet = 'https://muif.rfi.it/ProxyEsri/proxy.jsp?https://inreteese-wd.rfi.it/sap/opu/odata/SAP/ZMOO_SRV_SRV/DMSFILESet?'


  }



  console.log('url', completeRequestUrl)

  const esriRequest: typeof __esri.request = await loadArcGISJSAPIModule('esri/request')

  let new_array = []


  esriRequest(completeRequestUrl, {
    query: {
      f: 'json',
      q: "where=1%3D1&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=" + outfield + "&returnGeometry=false&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&queryByDistance=&returnExtentsOnly=false&datumTransformation=&parameterValues=&rangeValues=&f=html"
    }
  }).then((result: any) => {

    if (result.features) {
      console.log('result', result)
    }
  })


  const featureLayer = new FeatureLayer({
    // URL to the service
    url: completeRequestUrl
  });

  let query = featureLayer.createQuery();
  query.where = "1 = '1'";
  query.returnGeometry = false;
  query.outFields = [outfield];

  let reslength = 0;

  let response = featureLayer.queryFeatures(query)
    .then(function (response) {
      reslength = response.features.length
      console.log('response', reslength)
      response.features.forEach(el => {
        // console.log('[0].attributes.SETE',el.attributes.SETE)

        let item_to_array = { name: el.attributes.SETE }
        if (type == 'sede_tenica') {
          item_to_array = { name: el.attributes.SETE }
        }

        new_array.push(item_to_array)
      })

      console.log('new_array', new_array)
      // returns a feature set with features containing the following attributes
      // STATE_NAME, COUNTY_NAME, POPULATION, POP_DENSITY
    });


  if (new_array.length >= reslength) {
    return new_array
  }

}


async function _sedeTecnicaPDFFilteringOnChange(Zurl) {
  console.log('Zurl', Zurl)
  // Zurl = 'https://muif.rfi.it/ProxyEsri/proxy.jsp?https://inreteese-wd.rfi.it/sap/opu/odata/SAP/ZMOO_SRV_SRV/DMSFILESet?$filter=Dokar%20eq%20%27PIS%27%20and%20Doknr%20eq%20%27LO2928-VERB.VER.TECN.P%27%20and%20Dokvr%20eq%20%2701%27%20and%20Doktl%20eq%20%27000%27%20and%20ApplicationId%20eq%20%270050568BA6DB1EDD9D969AE370AEA58C%27%20and%20FileId%20eq%20%270050568BA6DB1EDD9D969AE370AEE58C%27&$format=json'
  // Zurl = 'https://muif.rfi.it/ProxyEsri/proxy.jsp?https://inreteese-wd.rfi.it/sap/opu/odata/SAP/ZMOO_SRV_SRV/DMSFILESet?$filter=Dokar%20eq%20%27PIS%27%20and%20Doknr%20eq%20%27LO0011-VERB.%20VER.%20TECN.%27%20and%20Dokvr%20eq%20%2701%27%20and%20Doktl%20eq%20%27001%27%20and%20ApplicationId%20eq%20%27005056BD660A1ED888BC5259D319E568%27%20and%20FileId%20eq%20%27005056BD660A1ED888BC5259D31A2568%27&$format=json'
  // Zurl = 'https://muif.rfi.it/ProxyEsri/proxy.jsp?https://inreteese-wd.rfi.it/sap/opu/odata/SAP/ZMOO_SRV_SRV/DMSFILESet?$filter'
  const esriRequest: typeof __esri.request = await loadArcGISJSAPIModule('esri/request')



  if (Zurl !== 'LO2928-VERB.VER.TECN.P') {
    console.log('Zurl', Zurl)


    // esriConfig.request.proxyUrl = "https://muif.rfi.it/ProxyEsri/proxy.jsp";

    const odataServiceUrl = "https://inreteese-wd.rfi.it/sap/opu/odata/SAP/ZMOO_SRV_SRV/DMSFILESet";

    const queryParams = {
      $filter: "Dokar eq 'PIS' and Doknr eq 'LO2928-VERB.VER.TECN.P' and Dokvr eq '01' and Doktl eq '000' and ApplicationId eq '0050568BA6DB1EDD9D969AE370AEA58C' and FileId eq '0050568BA6DB1EDD9D969AE370AEE58C'",
      $format: "json"
    };

    esriRequest(odataServiceUrl, {
      query: queryParams, // Passa i parametri OData qui
      responseType: "json" // Richiedi che la risposta venga parsificata come JSON
    })
      .then((response) => {
        console.log("Dati ricevuti:", response.data);
        // setData(response.data);
      })
      .catch((err) => {
        console.error("Errore nella richiesta OData:", err);
        // setError(err);
      })
      .finally(() => {
        // setLoading(false);
      });

    esriRequest(Zurl, {
      headers: {
        'Content-Type': 'application/json', // Tipo di contenuto
        'Access-Control-Allow-Origin': '*', // Questo di solito non è necessario in React Native
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE', // Metodi consentiti
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With', // Header consentiti
        'Access-Control-Allow-Credentials': 'true', // Se devi includere credenziali come cookie
      },
      query: {
        f: 'json',
        q: "Dokar eq 'PIS' and Doknr eq 'LO0011-VERB. VER. TECN.' and Dokvr eq '01' and Doktl eq '001' and ApplicationId eq '005056BD660A1ED888BC5259D319E568' and FileId eq '005056BD660A1ED888BC5259D31A2568'"
      }
    }).then((result: any) => {
      console.log("All request headers: ", result.getAllHeaders());


      if (result.features) {
        console.log('_displayPDFjs result', result)
        _displayPDFjs(result.d.results[0].EData)
      }
    })

    // SedeTecnicaPDFRequest.then( response => {
    //   console.log('SedeTecnicaPDFRequest',response)
    //     this._displayPDFjs( response.d.results[0].EData )
    // });

  } else {
    console.log('pdf_array[3].d.results[0].EData ', pdf_array[3].d.results[0].EData)

    _displayPDFjs(pdf_array[3].d.results[0].EData)

    return pdf_array[3].d.results[0].EData



  }
}


function _displayPDFjs(Base64PDF) {

  let pdfData = atob(Base64PDF);

  var pdfBuffer = new Uint8Array(new ArrayBuffer(pdfData.length));


  for (var i = 0; i < pdfData.length; i++) {
    pdfBuffer[i] = pdfData.charCodeAt(i);
  }

  // let pdfJsVieweriframe = dom.byId('sede-tecnica-pdfjs').contentWindow;
  // let pdfjsLib = pdfJsVieweriframe.pdfjsLib;

  // pdfjsLib.GlobalWorkerOptions.workerSrc = '../build/pdf.worker.js';

  // let pdfJsViewer = pdfJsVieweriframe.PDFViewerApplication;

  // pdfJsViewer.open(pdfBuffer)
  // this.pdfLoaderAnimation.hide();

}





const DMSparameters: React.FC<DMSparametersProps> = ({ varFromChild }) => {

  const [sedetecnica_array, setsede_tecnica_array] = useState([]);
  const [array_pdfs, setarray_pdfs] = useState([]); // QUANDO CI SARANNO I SERVIZI METTERE 'array_pdfs' al posto di 'pdf_array'
  const [currentPDFselected, setcurrentPDFselected] = useState(pdf_array[3]);



  // const [pdf_array, setPdfList] = useState([]);

  //   const pdfDoc = pdfService.parsePDFFromResponse(pdf_array[3].d.results[0].EData);
  // if (pdfDoc) {
  //   await pdfService.savePDFDocument(pdfDoc);
  // }


  function tipologiaOnChange(type: string, params: any) {
    console.log('params', params)
    console.log('config', config)
    // varFromChild(params)

    _getData(type, params).then(res => {
      setTimeout(() => {
        console.log('_getData', res)
        if (type == 'tipologia') {
          setsede_tecnica_array(res)







        } else if (type == 'sede_tecnica') {

          // setarray_pdfs(res)  // QUANDO CI SARANNO I SERVIZI METTERE togliere comment qui


        } else if (type == 'dms_pdf') {

          // setPdfList(res)  //NON RICORDO PERCHE MI SERVIVA QUESTO :D
          // _sedeTecnicaPDFFilteringOnChange(null) // QUANDO CI SARANNO I SERVIZI METTERE togliere comment qui
          console.log('pdf_array',pdf_array)
          // setcurrentPDFselected(pdf_array['LO2928-VERB.VER.TECN.P'])// LO2928-VERB.VER.TECN.P
          // [5].d.results[0].Doknr
          console.log('params',params)

          let currentPDF = pdf_array.filter(el => {return el.d.results[0].Doknr == params })
          console.log('currentPDF',currentPDF)
          setcurrentPDFselected(currentPDF[0])

        } else {
          alert('SOMETHING WENT WRONG')
        }


      }, 2000);

    })


    // if (type == 'dms_pdf') {
    //   var pdf_data = _sedeTecnicaPDFFilteringOnChange(params)

    //   console.log(pdf_data)
    //   // varFromChild(pdf_data)

    // }
    // _getData(type, params).then(res => {
    //   setTimeout(() => {
    //     console.log('_getData', res)
    //     if (type == 'tipologia') {
    //       setsede_tecnica_array(res)
    //     } else if (type == 'dms_pdf') {

    //       // setPdfList(res) 
    //       _sedeTecnicaPDFFilteringOnChange(null)

    //     } else {
    //       alert('SOMETHING WENT WRONG')
    //     }


    //   }, 2000);

    // })


  }
  return (

    <div>

      {/* <PdfGenerator /> */}

      <h3>Tipologia</h3>
      <select className='select_dms'
        onChange={e => tipologiaOnChange('tipologia', e.currentTarget.value)}
      >o

        {
          tipologie.map((x, y) =>
            <option key={y} value={x.id}>{x.name}</option>)
        }

      </select>

      <h3>Sede Tecnica:</h3>

      <select className='select_dms'
        onChange={e => tipologiaOnChange('sede_tecnica', e.target.value)}
      >

        {
          sedetecnica_array.map((x, y) =>
            <option key={y} value={x.name}>{x.name}</option>)
        }

      </select>


      <h3>Documentazione DMS</h3>

      <select className='select_dms'
        onChange={e => tipologiaOnChange('dms_pdf', e.target.value)}
      >

        {
          pdf_array.map((x, y) =>
            <option key={y} value={x.id}>{x.name || x.d.results[0].Doknr} </option>)
        }

      </select>


      <PDFViewer
        data={currentPDFselected}
        width="100%"
        height="600px"
        className="w-full"
      />
      {/* <PDFViewer dt={pdf_array[3]} /> */}
      {/* <Document
                  file={pdf_array[3].d.results[0].EData}
                  className="border rounded-lg document_css"
                ></Document> */}


    </div>
  );
};

export default DMSparameters;