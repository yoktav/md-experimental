// Strip id from href. This function removes #
function getHash(url) {
  const hashPos = url.lastIndexOf('#');
  return url.substring(hashPos + 1);
}

export { getHash as default };
