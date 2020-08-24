const UNC_PATH_REGEX = /^[\\\/]{2,}[^\\\/]+[\\\/]+[^\\\/]+/;

/**
 * Whether the filepath is a windows [UNC](https://msdn.microsoft.com/en-us/library/gg465305.aspx) file path.
 * @param path
 */
export default function isUncPath(path: string): boolean {
  return UNC_PATH_REGEX.test(path);
}
