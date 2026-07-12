import { WHATSAPP_URL } from "../config";
export default function WhatsApp() {
  return <a className="whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp</a>;
}
