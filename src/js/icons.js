const icons = {
  blockquote: 'M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z',
  
  bold: 'M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z',
  
  fontSize: 'M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z',
  
  h1: 'M20.1,4.3c-2.2,0.2-2.4,0.3-2.4,2.5v10.4c0,2.2,0.2,2.4,2.4,2.5v0.8h-7.4v-0.8c2.3-0.2,2.5-0.3,2.5-2.5v-5.1H6v5.1 c0,2.2,0.2,2.4,2.4,2.5v0.8H1.2v-0.8c2.1-0.2,2.3-0.3,2.3-2.5V6.8c0-2.2-0.2-2.3-2.4-2.5V3.5h7.2v0.8C6.2,4.5,6,4.6,6,6.8v4.1 h9.2V6.8c0-2.2-0.2-2.3-2.3-2.5V3.5h7.2V4.3z',
  
  h2: 'M20.1,4.3c-2.2,0.2-2.4,0.3-2.4,2.5v10.4c0,2.2,0.2,2.4,2.4,2.5v0.8h-7.4v-0.8c2.3-0.2,2.5-0.3,2.5-2.5v-5.1H6v5.1 c0,2.2,0.2,2.4,2.4,2.5v0.8H1.2v-0.8c2.1-0.2,2.3-0.3,2.3-2.5V6.8c0-2.2-0.2-2.3-2.4-2.5V3.5h7.2v0.8C6.2,4.5,6,4.6,6,6.8v4.1 h9.2V6.8c0-2.2-0.2-2.3-2.3-2.5V3.5h7.2V4.3z',
  
  html: 'M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z',
  
  image: 'M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z',
  
  indent: 'M3 21h18v-2H3v2zM3 8v8l4-4-4-4zm8 9h10v-2H11v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z',
  
  italic: 'M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z',
  
  justifyCenter: 'M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z',
  
  justifyFull: 'M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z',
  
  justifyLeft: 'M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z',
  
  justifyRight: 'M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z',
  
  p: 'M12.4,2.5c2.1,0,3.9,0.3,5.1,1.2c1.2,0.9,2,2.2,2,4.2c0,3.8-2.9,5.7-5.8,6c-0.5,0.1-1.1,0.1-1.4,0L10,13.3v4.5 c0,2.5,0.3,2.7,3,2.9v0.8H4.6v-0.8c2.4-0.2,2.6-0.4,2.6-2.9V6.3c0-2.6-0.3-2.7-2.5-2.9V2.5H12.4z M10,12.3c0.4,0.1,1.2,0.4,2.1,0.4 c1.9,0,4.2-1,4.2-4.7c0-3.2-2-4.5-4.4-4.5c-0.8,0-1.4,0.2-1.6,0.4C10.1,4,10,4.4,10,5.2V12.3z',
  
  pre: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z',
  
  removeFormat: 'M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z',
  
  strikeThrough: 'M7.24 8.75c-.26-.48-.39-1.03-.39-1.67 0-.61.13-1.16.4-1.67.26-.5.63-.93 1.11-1.29.48-.35 1.05-.63 1.7-.83.66-.19 1.39-.29 2.18-.29.81 0 1.54.11 2.21.34.66.22 1.23.54 1.69.94.47.4.83.88 1.08 1.43.25.55.38 1.15.38 1.81h-3.01c0-.31-.05-.59-.15-.85-.09-.27-.24-.49-.44-.68-.2-.19-.45-.33-.75-.44-.3-.1-.66-.16-1.06-.16-.39 0-.74.04-1.03.13-.29.09-.53.21-.72.36-.19.16-.34.34-.44.55-.1.21-.15.43-.15.66 0 .48.25.88.74 1.21.38.25.77.48 1.41.7H7.39c-.05-.08-.11-.17-.15-.25zM21 12v-2H3v2h9.62c.18.07.4.14.55.2.37.17.66.34.87.51.21.17.35.36.43.57.07.2.11.43.11.69 0 .23-.05.45-.14.66-.09.2-.23.38-.42.53-.19.15-.42.26-.71.35-.29.08-.63.13-1.01.13-.43 0-.83-.04-1.18-.13s-.66-.23-.91-.42c-.25-.19-.45-.44-.59-.75-.14-.31-.25-.76-.25-1.21H6.4c0 .55.08 1.13.24 1.58.16.45.37.85.65 1.21.28.35.6.66.98.92.37.26.78.48 1.22.65.44.17.9.3 1.38.39.48.08.96.13 1.44.13.8 0 1.53-.09 2.18-.28s1.21-.45 1.67-.79c.46-.34.82-.77 1.07-1.27s.38-1.07.38-1.71c0-.6-.1-1.14-.31-1.61-.05-.11-.11-.23-.17-.33H21z',
  
  text: 'M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z',
  
  underline: 'M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z'
}

export default icons;
