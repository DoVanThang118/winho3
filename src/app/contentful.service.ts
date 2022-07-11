import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

const API = {
  space: 'xz0qd8s9pds8',
  accessToken: 'BnVdapRknMGljUq11Y5gn5-SQLa81mnbhVwv9gwzvLU',

  contentTypeIds: {
    product: 'productList',
    new: 'new',
    banner: 'bannerBig',
    sale: 'bannerSale'
  }
}

@Injectable()
export class ContentfulService {
  private cdaClient = createClient({
    space: API.space,
    accessToken: API.accessToken
  });
  constructor() {}

  // fetch products
  getProducts(query?: object): Promise<Entry<any>[]> {
  return this.cdaClient.getEntries(Object.assign({
    content_type: API.contentTypeIds.product
  }, query))
      .then(res => res.items);
  }

  // fetch products with a given slug

  // fetch banner
  getBanners(): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries({
      content_type: API.contentTypeIds.banner
    })
      .then(res => res.items);
  }

  // fetch sale
  getSales(): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries({
      content_type: API.contentTypeIds.sale
    })
      .then(res => res.items);
  }

  // fetch new
  getNews(): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries({content_type: API.contentTypeIds.new})
      .then(res => res.items);
  }
}
