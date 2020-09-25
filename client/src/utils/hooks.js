// @flow strict
import _ from 'lodash';
import * as React from 'react';
import { prepareTags } from 'src/utils/flickr';

// Custom hook inspired by https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react
export function useWindowDimensions() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    // Use debounce to prevent re-render on all window
    // size changes
    const listener = _.debounce(() => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }, 150);

    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, []);

  return {
    width,
    height,
  };
}

export function useFlickrFetch(searchTerm: string) {
  const [results, setResults] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    let isSubscribed = true;
    if (searchTerm !== '') {
      setIsLoading(true);
      const tags = prepareTags(searchTerm);
      fetch(`/flickr/${tags}`)
        .then((res) => res.json())
        .then((data) => {
          if (isSubscribed) {
            setResults(data.items);
            setIsLoading(false);
          }
        })
        .catch((e) => {
          console.error(e.message);
        });
    }
    if (searchTerm === '') setIsLoading(false);
    return () => {
      isSubscribed = false;
    };
  }, [searchTerm]);

  return { isLoading, results };
}
