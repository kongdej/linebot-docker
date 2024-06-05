const axios = require('axios')
const { xml2js } = require('xml-js');

const isEGATUser = (loginName, loginPassword) => {
    const url = 'http://webservices.egat.co.th/authentication/au_provi.php'
    const soapAction = 'urn:comparewsdl#validate_user'
    const xmlRequest = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:comparewsdl">
        <soapenv:Header/>
        <soapenv:Body>
          <urn:validate_user>
            <a>${loginName}</a>
            <b>${loginPassword}</b>
          </urn:validate_user>
        </soapenv:Body>
      </soapenv:Envelope>
    `;
  
    const headers = {
      'Content-Type': 'text/xml',
      'SOAPAction': soapAction
    };
  
    return axios.post(url, xmlRequest, { headers })
      .then(response => {
        const xmlResponse = response.data;
        const jsonResponse = xml2js(xmlResponse, { compact: true, spaces: 4 });
        const status = jsonResponse['soap:Envelope']?.['soap:Body']?.['validate_userResponse']?.['status']._text;
        console.log('Status:', jsonResponse['SOAP-ENV:Envelope']['SOAP-ENV:Body']['ns1:validate_userResponse']['status']['_text']);
        return jsonResponse['SOAP-ENV:Envelope']['SOAP-ENV:Body']['ns1:validate_userResponse']['status']['_text'] == 'true' ? true:false
      })
      .catch(error => {
        console.error('An error occurred:', error);
        return false
      });
  }

/// Main //////////=========================================
const handleAction = async (req, res) => {
  const body = req.body;
  console.log('register: ', body)
  const result = isEGATUser(body.email, body.password)
}

module.exports = handleAction