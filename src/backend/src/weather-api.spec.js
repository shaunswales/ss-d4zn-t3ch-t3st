import axios from 'axios';
import { validData, invalidData } from '../../testdata/index';

const postEndpoint = '/api';
const api = axios.create({
  baseURL: process.env['API_BASE_URL'],
  headers: { 'Content-Type': 'application/json' },
});

describe('Weather Checker API', () => {
  describe('Schema Structure', () => {
    it('successful response should match the schema and types', async () => {
      const { data } = await api.post(postEndpoint, {
        address: 'W6 0NW',
      });
      expect(data).toMatchObject({
        latitude: expect.any(Number),
        longitude: expect.any(Number),
        timezone: expect.any(String),
        currently: {
          time: expect.any(Number),
          summary: expect.any(String),
          icon: expect.any(String),
          nearestStormDistance: expect.any(Number),
          nearestStormBearing: expect.any(Number),
          precipIntensity: expect.any(Number),
          precipProbability: expect.any(Number),
          temperature: expect.any(Number),
          apparentTemperature: expect.any(Number),
          dewPoint: expect.any(Number),
          humidity: expect.any(Number),
          pressure: expect.any(Number),
          windSpeed: expect.any(Number),
          windGust: expect.any(Number),
          windBearing: expect.any(Number),
          cloudCover: expect.any(Number),
          uvIndex: expect.any(Number),
          visibility: expect.any(Number),
          ozone: expect.any(Number),
        },
        minutely: expect.any(Object),
        hourly: expect.any(Object),
        daily: expect.any(Object),
        flags: expect.any(Object),
        offset: expect.any(Number),
      });
    });
  });
  describe('Invalid Scenarios', () => {
    invalidData.map(
      ([testDesc, postcode, expectedStatusCode, expectedErrorMessage]) => {
        it(`should ${postcode} (${testDesc}) be provided, we expect ${expectedStatusCode} with the error message: ${expectedErrorMessage}`, async () => {
          const postResponse = await api
            .post(postEndpoint, {
              address: postcode,
            })
            .catch((err) => err);
          expect(postResponse.response.status).toEqual(expectedStatusCode);
          expect(postResponse.response.data.errorMessage).toEqual(
            expectedErrorMessage,
          );
        });
      },
    );
  });
  describe('Validid Scenarios', () => {
    validData.map(([testDesc, postcode, expectedStatusCode]) => {
      it(`should ${postcode} (${testDesc}) be provided, we expect ${expectedStatusCode}`, async () => {
        const postResponse = await api.post(postEndpoint, {
          address: postcode,
        });
        expect(postResponse.statusText).toEqual('OK');
        expect(postResponse.status).toEqual(expectedStatusCode);
        const responseData = postResponse.data;
        expect(responseData.errorMessage).toBeUndefined();
        expect(responseData.currently.temperature).not.toBeUndefined()
        expect(responseData.currently.humidity).not.toBeUndefined()
        expect(responseData.currently.time).not.toBeUndefined()
      });
    });
  });
});
