export function printMessage(msg: string | string[]) {
  if (typeof msg === "string") {
    return `welcome ${msg}`;
  } else {
    return `welcome ${msg.join()}`;
  }
}