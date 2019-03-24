
import axios from 'axios';


/**
 * Base API class
 */
export class Api {

  /**
   * HTTP GET
   * @param url
   * @returns {AxiosPromise}
   */
  async get (url: string): Promise<any> {
    const absoluteUrl = this.buildAbsoluteUrl(url);
    return await axios(absoluteUrl);
  }

  /**
   * Build absolute url by appending tagName to url
   * @param {string} url
   * @returns {string} absoluteUrl
   */
  buildAbsoluteUrl (url) {
    return `https://www.reddit.com/r/${url}.json`;
  }

}