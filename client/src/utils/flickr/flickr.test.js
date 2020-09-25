import { getAuthor, getDate, prepareTags } from '.';

describe('getAuthor', () => {
  test('trims author name appropriately from received data', () => {
    expect(getAuthor('nobody@flicker.com richard zhang')).toBe('richard zhang');
    expect(getAuthor('randomtext richardzhang')).toBe('richardzhang');
    expect(getAuthor('randomtext ("Super man")')).toBe('Super man');
    expect(getAuthor('nobody@flickr.com ("MAB757200")')).toBe('MAB757200');
    expect(getAuthor('nobody@flickr.com ("Sherlock Holmes")')).toBe(
      'Sherlock Holmes',
    );
  });
});

describe('getDate', () => {
  test('converts a fixed date to desired format', () => {
    expect(getDate('2018-04-08T07:00:43.767080+00:00')).toBe('8 Apr, 2018');
    expect(getDate('2015-05-31T07:00:43.767080+00:00')).toBe('31 May, 2015');
    expect(getDate('2016-01-01T00:00:00.000000+00:00')).toBe('1 Jan, 2016');
    expect(getDate('2019-12-31T00:00:00.000000+11:00')).toBe('31 Dec, 2019');
    expect(getDate('2020-12-31T23:59:00.000000+11:00')).toBe('31 Dec, 2020');
  });
});

describe('prepareTags', () => {
  test('trims search term into appropriate format for tags', () => {
    expect(prepareTags('batman')).toBe('batman');
    expect(prepareTags('batman superman')).toBe('batman,superman');
    expect(prepareTags('batman     superman')).toBe('batman,superman');
    expect(prepareTags('batmansuperman   wonder woman')).toBe(
      'batmansuperman,wonder,woman',
    );
  });

  test('removes stop words', () => {
    expect(prepareTags('batman and superman')).toBe('batman,superman');
    expect(prepareTags('batman   as superman')).toBe('batman,superman');
    expect(prepareTags('the amazing spiderman')).toBe('amazing,spiderman');
    expect(prepareTags('and bruce wayne as himself')).toBe('bruce,wayne');
  });

  test('does not remove stop word(s) if it is the only word(s)', () => {
    expect(prepareTags('the')).toBe('the');
    expect(prepareTags('as')).toBe('as');
    expect(prepareTags('a')).toBe('a');
    expect(prepareTags('yourselves')).toBe('yourselves');
    expect(prepareTags('their and')).toBe('their and');
    expect(prepareTags('been your')).toBe('been your');
  });
});
