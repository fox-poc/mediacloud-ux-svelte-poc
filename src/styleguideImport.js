import React from 'react';
import ReactDOM from 'react-dom';
import r2wc from 'react-to-webcomponent';

//imports
import { Button } from "@fox/mediacloud-ux-styleguide-poc";

//definitions
const ReactButton = r2wc(Button, React, ReactDOM, {
  props: {
    text: "string",
    onClick: "function"
  }
});

//register elements
customElements.get('react-button') || customElements.define('react-button', ReactButton);