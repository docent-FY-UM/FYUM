const audioDecoder = (base64Audio: string) => {
  const binaryString = window.atob(base64Audio);
  const bytes = new Uint8Array(binaryString.length);

  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
};

export default audioDecoder;
