let fns = require('./Utils/functions');

test('katrinafairfax should return true', () => {
    // arrange & act
    let result = fns.usernameCheck('katrinafairfax')
    expect(result).toBeTruthy();
})