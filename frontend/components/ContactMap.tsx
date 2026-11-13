/**
 * Google Maps embed (no API key needed).
 * To pin the exact office: Google Maps → Share → Embed a map → copy the
 * iframe `src` and replace MAP_SRC below.
 */
const MAP_SRC =
  "https://www.google.com/maps?q=Grand+Delvista,+Gulshan-2,+Dhaka&z=15&output=embed";

export default function ContactMap() {
  return (
    <div className="overflow-hidden rounded-[24px] border-2 border-white bg-white shadow-[0_10px_40px_-24px_rgba(15,23,42,0.18)] sm:rounded-[28px]">
      <iframe
        title="Automatrix Services Ltd — Grand Delvista, Gulshan-2, Dhaka"
        src={MAP_SRC}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="block h-[320px] w-full border-0 sm:h-[460px] lg:h-[600px]"
      />
    </div>
  );
}
