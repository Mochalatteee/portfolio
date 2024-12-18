export const url2path = (url: string): string =>
  import.meta.env.MODE === "production" ? "/portfolio" + url : url;
