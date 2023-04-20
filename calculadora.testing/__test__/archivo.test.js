const {arrProvincias, arrDias} = require('../archivo');

test('Probando Array ptovincias', () => {
    expect(arrProvincias()).toHavelength(8);
})