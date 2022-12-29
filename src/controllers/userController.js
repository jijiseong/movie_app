import fetch from "cross-fetch";

export const githubLoginStart = (req, res) => {
  const baseUrl = "https://github.com/login/oauth/authorize";
  const client_id = process.env.CLIENT_ID;
  const scope = "user";

  const startUrl = `${baseUrl}?client_id=${client_id}&scope=${scope}`;
  return res.redirect(startUrl);
};

export const githubLoginFinish = async (req, res) => {
  const baseUrl = "https://github.com/login/oauth/access_token";
  const config = {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    code: req.query.code,
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;

  const data = await (
    await fetch(finalUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    })
  ).json();

  const apiUrl = "https://api.github.com/user";
  const user = await (
    await fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${data.access_token}`,
      },
    })
  ).json();

  console.log(user);
  return res.redirect("/");
};
