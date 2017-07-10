import { getMatchSubstrings, matchQuery } from './utils.js'

describe('getMatchSubstrings util', function () {

  test('find substring matches of "END" in string "friendship never ends"', function () {
    const object = getMatchSubstrings("friendship never ends", "end");
    const subject = [{ length: 3, offset: 3 }, { length: 3, offset: 17 }]
    expect(object).toEqual(subject);
  });

  test('empty query argument"', function () {
    const object = getMatchSubstrings("string here", "");
    expect(object).toEqual([]);
  });

  test('empty string argument"', function () {
    const object = getMatchSubstrings("", "query");
    expect(object).toEqual([]);
  });

  test('undefined query argument"', function () {
    const object = getMatchSubstrings("something", undefined);
    expect(object).toEqual([]);
  });

});

describe('matchQuery util', function () {

  const colors = ['red', 'blue', 'yellow', 'dark-blue', 'light-blue', 'pink', 'green', 'light-green', 'purple', 'brown', 'yellow', 'orange']

  test('find query "blue" in an array of colors"', function () {
    const object = matchQuery(colors, "blue");
    const subject = [{ title: 'blue', matchList: [{ length: 4, offset: 0 }], score: 0 },
    { title: 'dark-blue', matchList: [{ length: 4, offset: 5 }], score: 5 / 4 * 9 },
    { title: 'light-blue', matchList: [{ length: 4, offset: 6 }], score: 6 / 4 * 10 }];
    expect(object).toEqual(subject);
  });

  test('empty query argument"', function () {
    const object = matchQuery(colors, "");
    expect(object).toEqual([]);
  });

  test('empty array argument"', function () {
    const object = getMatchSubstrings([], "query");
    expect(object).toEqual([]);
  });

  test('undefined query argument"', function () {
    const object = getMatchSubstrings(colors, undefined);
    expect(object).toEqual([]);
  });

});