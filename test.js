var steam = require("./steam")

test_obj = {
  price_overview: {
    initial: "10",
    discount_percent: "50%"
  },
  name: "My Game",
  header_image: "https://steamcdn-a.akamaihd.net/steam/apps/313730/header.jpg?t=1478566913"
}

describe("David's test", () => {
  test("a valid object", ()=>{
  expect(steam.process_object(test_obj)).
  toContain("My Game")
  });
});
