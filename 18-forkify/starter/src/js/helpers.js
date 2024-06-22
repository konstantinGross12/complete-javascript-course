const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const fetchPro = fetch(url);

    const res = await Promise.race([fetchPro, timeout(10)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`Something went wrong (${res.status})`);

    return await data;
  } catch (err) {
    throw err;
  }
};
