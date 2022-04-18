export default async function handler(req, res) {
  const { method } = req;
  console.log(method);

  if (method == "GET") {
    const {
      query: { id },
    } = req;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASS_URL}/my-list?id=${id}`
    );
    const mylist = await response.json();
    res.status(200).json(mylist);
  } else if (method == "POST") {
    const { url } = req.body;
    console.log(url);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASS_URL}/my-list`,
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({ url: url }), // 本文のデータ型は "Content-Type" ヘッダーと一致させる必要があります
      }
    );
    const mylist = await response.json();
    res.status(response.status).json(mylist);
  } else {
    const { url } = req.body;
    console.log(url);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASS_URL}/my-list`,
      {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({ url: url }), // 本文のデータ型は "Content-Type" ヘッダーと一致させる必要があります
      }
    );
    const mylist = await response.json();
    res.status(response.status).json(mylist);
  }
}
