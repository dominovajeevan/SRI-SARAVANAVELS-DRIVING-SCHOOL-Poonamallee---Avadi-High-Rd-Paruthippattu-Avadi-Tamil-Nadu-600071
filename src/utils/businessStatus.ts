export interface BusinessStatus {
  isOpen: boolean;
  text: string;
  nextChangeText: string;
}

export const BUSINESS_NAME_EN = "SRI SARAVANAVELS DRIVING SCHOOL";
export const BUSINESS_NAME_TA = "ஶ்ரீ சரவணவேல்ஸ் டிரைவிங் ஸ்கூல்";
export const PHONE_NUMBER = "09840605529";
export const TEL_LINK = "tel:09840605529";
export const WHATSAPP_LINK = "https://wa.me/919840605529";

export function getBusinessStatus(): BusinessStatus {
  const now = new Date();
  const day = now.getDay();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const timeInMinutes = hours * 60 + minutes;

  const openTime = 9 * 60; // 9:00 AM
  const closeTime = 20 * 60; // 8:00 PM

  if (day === 0) {
    return {
      isOpen: false,
      text: "Closed Today (Sunday)",
      nextChangeText: "Opens Monday at 9:00 AM"
    };
  }

  if (timeInMinutes >= openTime && timeInMinutes < closeTime) {
    return {
      isOpen: true,
      text: "Open Now",
      nextChangeText: "Open until 8:00 PM"
    };
  } else if (timeInMinutes < openTime) {
    return {
      isOpen: false,
      text: "Closed Now",
      nextChangeText: "Opens today at 9:00 AM"
    };
  } else {
    return {
      isOpen: false,
      text: "Closed Now",
      nextChangeText: "Opens tomorrow at 9:00 AM"
    };
  }
}

export const MAPS_DIRECTIONS_URL = "https://www.google.com/maps/place/SRI+SARAVANAVELS+DRIVING+SCHOOL/@13.093313,80.0891666,15z/data=!4m22!1m15!4m14!1m6!1m2!1s0x3a52620de13ff343:0xa45fec4919a15cc4!2sSRI+SARAVANAVELS+DRIVING+SCHOOL,+Poonamallee+-+Avadi+High+Rd,+Paruthippattu,+Avadi,+Tamil+Nadu+600071!2m2!1d80.1082747!2d13.0933092!1m6!1m2!1s0x3a52620de13ff343:0xa45fec4919a15cc4!2sSRI+SARAVANAVELS+DRIVING+SCHOOL,+Poonamallee+-+Avadi+High+Rd,+Paruthippattu,+Avadi,+Tamil+Nadu+600071!2m2!1d80.1082747!2d13.0933092!3m5!1s0x3a52620de13ff343:0xa45fec4919a15cc4!8m2!3d13.093313!4d80.108221!16s%2Fg%2F11b77pb7pd";
export const MAPS_EMBED_URL = "https://maps.google.com/maps?q=13.093313,80.108221&t=&z=16&ie=UTF8&iwloc=&output=embed";
