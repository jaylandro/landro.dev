callback(null, {
  statusCode: 200,
  body: `{
        "nes_games": [
          {
            "name": "Super Mario Bros.",
            "img": "https://upload.wikimedia.org/wikipedia/en/0/03/Super_Mario_Bros._box.png"
          },
          {
            "name": "Super Mario Bros. 2",
            "img": "https://www.mariowiki.com/images/thumb/e/ea/SMB2_Boxart.png/1200px-SMB2_Boxart.png"
          },
          {
            "name": "Super Mario Bros. 3",
            "img": "https://hb.imgix.net/4ea099299f6af1861ff8389bde0c34b6c4957224.jpg?auto=compress,format&fit=crop&h=353&w=616&s=86d8ce7ac94fb9cbb94b6322cb630cb1"
          }
        ]
      }`,
  headers: {
    "access-control-allow-origin": "*",
  },
});
