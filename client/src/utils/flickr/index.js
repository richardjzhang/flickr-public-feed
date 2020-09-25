// @flow strict
import dayjs from 'dayjs';
import sw from 'stopword';

export function getAuthor(author: string) {
  let authorTrim = author.split(' ').slice(1).join(' ').replace(/[(")]/g, '');
  return authorTrim;
}

export function getDate(published: string) {
  let date = dayjs(published).format('D MMM, YYYY');
  return date;
}

// Remove stop words from the tags as they are irrelevant
export function prepareTags(searchTerm: string) {
  const trimmed = sw
    .removeStopwords(searchTerm.split(' '))
    .filter((w) => w !== '')
    .join(',');
  if (trimmed.length === 0) return searchTerm;
  return trimmed;
}
