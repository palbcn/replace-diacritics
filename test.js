const replaceDiacritics = require('./index');

test('Çón is Con', () => {
  expect(replaceDiacritics("Çón dïèz cañönès pôr bándà"))
   .toBe("Con diez canones por banda");
});

