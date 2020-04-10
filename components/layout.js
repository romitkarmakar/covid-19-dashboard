import React from "react";
import Head from "next/head";

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Head>
          <link
            href="https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css"
            rel="stylesheet"
          />
        </Head>
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default Layout;
