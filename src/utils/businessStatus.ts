export interface BusinessStatus {
  isOpen: boolean;
  text: string;
  nextChangeText: string;
}

export const BUSINESS_NAME_EN = "SRI SARAVANAVELS DRIVING SCHOOL";
export const BUSINESS_NAME_TA = "ஶ்ரீ சரவணவேல்ஸ் டிரைவிங் ஸ்கூல்";
export const PHONE_NUMBER = "7299367999";
export const TEL_LINK = "tel:7299367999";
export const WHATSAPP_LINK = "https://wa.me/917299367999";

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

export const MAPS_DIRECTIONS_URL = "https://www.google.com/maps/search/?api=1&query=SRI+SARAVANAVELS+DRIVING+SCHOOL+No+3+PH+Road+Iyyankulam+Paruthipattu+Avadi+Chennai+71";
export const MAPS_EMBED_URL = "https://maps.google.com/maps?q=13.093313,80.108221&t=&z=16&ie=UTF8&iwloc=&output=embed";
