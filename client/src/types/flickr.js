// @flow strict\
export type FlickrResults = Array<{|
  author: string,
  author_id: string,
  date_taken: string,
  description: string,
  link: string,
  media: {|
    m: string,
  |},
  published: string,
  tags: string,
  title: string,
|}>;
