// React
import React from "react";

function renderWithBold(text) {
  return text.split('**').map((part, index) =>
    index % 2 === 1 ? <b key={index}>{part}</b> : part
  );
}

export default renderWithBold;