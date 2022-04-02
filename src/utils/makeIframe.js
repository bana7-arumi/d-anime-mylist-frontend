const makeIframe = (host, id, width, height, border) => {
  return `<iframe
    style="border-radius:12px;${border && "border: 2px #DA5019 solid;"}"
    src="${host}/myList/${id}"
    width="${width}"
    height="${height}"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  ></iframe>`;
};

export default makeIframe;
