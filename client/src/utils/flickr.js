// @flow strict
import dayjs from 'dayjs';
import sw from 'stopword';

export function getAuthor({ author }: {| author: string |}) {
  let authorTrim = author.split(' ').slice(1).join(' ').replace(/[(")]/g, '');
  return authorTrim;
}

export function getDate({ published }: {| published: string |}) {
  let date = dayjs(published).format('D MMM, YYYY');
  return date;
}

// Remove stop words from the tags as they are irrelevant
export function prepareTags(searchTerm: string) {
  return sw.removeStopwords(searchTerm.split(' ')).join(',');
}
