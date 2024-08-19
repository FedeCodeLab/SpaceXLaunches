export const getLaunchBy = async ({ id }) => {
  const res = await fetch(`https://api.spacexdata.com/v4/launches/${id}`);
  const launch = await res.json();
  return launch;
};

export const getLatestLaunches = async () => {
  const res = await fetch("https://api.spacexdata.com/v4/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: "asc",
        },
        limit: 12,
      },
    }),
  });
  const { docs: launches } = await res.json();
  return launches;
};
