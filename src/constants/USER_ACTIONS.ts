export const USER_ACTIONS = {
  refresh: "User refreshed",
  visit: "Page visited",
  clicked: (value: string) => {
    return `clicked ${value} `;
  },
} as const;
