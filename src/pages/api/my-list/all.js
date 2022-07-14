export default async function handler(req, res) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASS_URL}/my-list/all`
  );
  const mylist = await response.json();
  res.status(200).json(mylist);
}
