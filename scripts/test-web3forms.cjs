const https = require('https');

const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
const to_email = process.env.WEB3FORMS_TO_EMAIL || '12ronamabdul@gmail.com';

if (!accessKey) {
  console.error('Missing WEB3FORMS_ACCESS_KEY environment variable.');
  process.exit(1);
}

const payload = JSON.stringify({
  access_key: accessKey,
  subject: 'CLI test submission from Abdulhost',
  name: 'CLI Test',
  email: 'test+cli@local.test',
  message: 'This is a test submission to verify Web3Forms integration.',
  to_email,
});

const options = {
  hostname: 'api.web3forms.com',
  port: 443,
  path: '/submit',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(payload),
  },
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => (data += chunk));
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    try {
      console.log('Response:', JSON.parse(data));
    } catch (e) {
      console.log('Response (non-json):', data);
    }
    if (res.statusCode === 403) {
      console.error('403 Forbidden — check that your access key is active and allowed origins are configured in Web3Forms.');
    }
  });
});

req.on('error', (e) => console.error(e));
req.write(payload);
req.end();
