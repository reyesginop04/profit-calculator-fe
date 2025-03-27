export const dateFormatter = {
  /**
   * Formats a date to a readable string (e.g., "March 27, 2025").
   * @param date - The date input (string, Date, or number)
   * @returns Formatted date string
   */
  formatLong: (date: string | Date | number): string => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(date));
  },

  /**
   * Formats a date to a short format (e.g., "03/27/2025").
   * @param date - The date input (string, Date, or number)
   * @returns Formatted date string
   */
  formatShort: (date: string | Date | number): string => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date(date));
  },

  /**
   * Formats a date to include time (e.g., "March 27, 2025, 3:45 PM").
   * @param date - The date input (string, Date, or number)
   * @returns Formatted date-time string
   */
  formatWithTime: (date: string | Date | number): string => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(new Date(date));
  },

  /**
   * Formats a date to a relative time (e.g., "5 minutes ago", "Yesterday").
   * @param date - The date input (string, Date, or number)
   * @returns Formatted relative time string
   */
  formatRelative: (date: string | Date | number): string => {
    const now = new Date();
    const timeDiff = now.getTime() - new Date(date).getTime();
    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) return "Just now";
    if (minutes < 60) return `${minutes} min ago`;
    if (hours < 24) return `${hours} hrs ago`;
    if (days === 1) return "Yesterday";
    return `${days} days ago`;
  },
};
