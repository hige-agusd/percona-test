import React, { PureComponent } from 'react';
import axios from 'axios';
import * as environment from 'constants/constants';
import { debounced } from 'utils/utils';
import { EmbedGif } from './embed';

interface GiphyState {
  query: string;
  gifId: string;
  embedUrl: string;
}
export class Giphy extends PureComponent<any, GiphyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      query: '',
      gifId: '',
      embedUrl: '',
    };
  }

  onChange = (event: any) => {
    this.setState(
      {
        query: event.target.value,
      },
      this.debouncedSearch
    );
  };

  searchGif = () => {
    axios
      .get(`${environment.BASE_URL}search?api_key=${environment.API_KEY}&q=${this.state.query}`)
      .then((res: any) => {
        if (res.data.data && res.data.data.length) {
          this.setState({ gifId: res.data.data[0].id }, this.getGif);
        }
      })
      .catch((err: any) => console.log(err));
  };

  debouncedSearch = debounced(this.searchGif, 200);

  getGif = () => {
    axios
      .get(`${environment.BASE_URL}${this.state.gifId}?api_key=${environment.API_KEY}`)
      .then((res: any) => {
        console.log(res);
        if (res.data.data) {
          this.setState({ embedUrl: res.data.data.embed_url });
        }
      })
      .catch((err: any) => console.log(err));
  };

  render() {
    const gif = this.state.embedUrl ? <EmbedGif url={this.state.embedUrl} /> : null;
    return (
      <>
        <input name="query" value={this.state.query} onChange={this.onChange} type="text" placeholder="Search a gif" />
        {gif}
      </>
    );
  }
}
