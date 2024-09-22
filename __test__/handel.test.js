import {app} from '../src/client/js/app';
import { handelsubment, getCountry, getweather, getcityImage } from '../src/client/js/app';

// Mocking the DOM
document.body.innerHTML = `
  <input id="city" value="Sample City" />
  <input id="date" value="2023-10-01" />
  <div id="Rdays"></div>
  <div id="cityname"></div>
  <div id="travelDate"></div>
  <div id="temp"></div>
  <div id="weather"></div>
  <div id="cityImage"></div>
`;

// Mocking the fetch function
global.fetch = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

test('handelsubment updates UI correctly', async () => {
  // Mocking the responses for the API calls
  fetch.mockImplementation((url) => {
    if (url.includes('getcity')) {
      return Promise.resolve({
        json: () => Promise.resolve({ lng: 1, lat: 2, name: 'Sample City' }),
      });
    }
    if (url.includes('getweather')) {
      return Promise.resolve({
        json: () => Promise.resolve({
          temp: 20,
          app_max_temp: 25,
          app_min_temp: 15,
          description: 'Sunny',
        }),
      });
    }
    if (url.includes('getimage')) {
      return Promise.resolve({
        json: () => Promise.resolve({ image: 'sample-image-url' }),
      });
    }
  });

  // Mocking getdays
  const getdaysMock = jest.fn(() => 5);
  jest.spyOn(global, 'getdays').mockImplementation(getdaysMock);

  const event = { preventDefault: jest.fn() };

  await handelsubment(event);

  expect(document.getElementById('Rdays').innerHTML).toBe('The Reaming Days To Travel 5');
  expect(document.getElementById('cityname').innerHTML).toContain('the City he wents To Travell Sample City');
  expect(document.getElementById('travelDate').innerHTML).toContain('The Travell Date is: 2023-10-01');
  expect(document.getElementById('temp').innerHTML).toContain('The Temperature is:20');
  expect(document.getElementById('weather').innerHTML).toContain('The weather is :Sunny');
  expect(document.getElementById('cityImage').innerHTML).toContain('<img src="sample-image-url" alt="The image Is Not Found">');
});

test('getdays calculates remaining days correctly', () => {
  const result = getdays('2023-10-01');
  expect(result).toBeGreaterThanOrEqual(0);
});