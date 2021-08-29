describe('Open Weather API', function () {

    it('Get weather of London, UK', function () {

        let londonCode = 2643741;
        let APIKey = "731d5864ddf3ce5dcd66c932a7393924";

        cy.request({
            method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/weather',
            qs: {
                id: londonCode,
                appid: APIKey            }
        })
            .then((response) => {
                console.log(response);
                expect(response.status).to.eq(200);
                expect(response.body.id).to.eq(londonCode);
                expect(response.body).to.have.all.keys(
                    'base',
                    'clouds',
                    'cod',
                    'coord',
                    'dt',
                    'id',
                    'main',
                    'name',
                    'sys',
                    'timezone',
                    'visibility',
                    'weather',
                    'wind'
                );
                assert.isObject(response.body.clouds, 'val is object');
                expect(response.body.clouds).to.have.keys('all');
                assert.isObject(response.body.coord, 'val is object');
                expect(response.body.coord).to.have.keys('lat', 'lon');
                assert.isObject(response.body.main, 'val is object');
                expect(response.body.main).to.have.keys(
                    'feels_like',
                    'humidity',
                    'pressure',
                    'temp',
                    'temp_max',
                    'temp_min'
                );
                assert.isObject(response.body.sys, 'val is object');
                expect(response.body.sys).to.have.keys(
                    'country',
                    'id',
                    'sunrise',
                    'sunset',
                    'type'
                );
                assert.isObject(response.body.wind, 'val is object');
                expect(response.body.wind).to.have.keys('speed', 'deg', 'gust');
                assert.isArray(response.body.weather, 'val is array');
            });
    });
});