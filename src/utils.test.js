import { getMatchSubstrings } from './utils.js'

describe('getMatchSubstrings util', function () {

  test('find substring matches of "END" in string "friendship never ends"', function () {
    const object = getMatchSubstrings("friendship never ends", "end");
    const subject = [{ length: 3, offset: 3 }, { length: 3, offset: 17 }]
    expect(object).toEqual(subject);
  });

  test('test for empty query argument"', function () {
    const object = getMatchSubstrings("string here", "");
    expect(object).toEqual([]);
  });

  test('test for empty string argument"', function () {
    const object = getMatchSubstrings("", "query");
    expect(object).toEqual([]);
  });

  test('test for undefined query argument"', function () {
    const object = getMatchSubstrings("something", undefined);
    expect(object).toEqual([]);
  });

});