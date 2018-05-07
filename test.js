var steam = require("./steam")
var sql = require("./sql_db.js")

beforeAll(() => {
    return steam.steam(590380).then((result) => {
      test_obj = result
    }).then(
      sql.fetch_wishlist(60).then((result) => {
        console.log(result)
      test_list = result
      game_id = result[1].appid
    }));
});

describe("David's test", () => {
  test("a valid object", () => {
      expect(steam.process_object(test_obj)).
      toContain("Into the Breach")
  }),
  test("a valid list", () =>{
      expect(test_list[1].appid).
      toBe(376520)
      // expect(steam.steam(test_list[1].appid)).
      // toHaveProperty('name', "Kelvin and the Infamous Machine")
  })
  // test("pull game"), () => {
  //   expect(steam.get_gameData(376520)).
  //   toHaveProperty('name', "Kelvin and the Infamous Machine")
  // }
});

// describe('SQL DB Tests', () => {
//     beforeEach(() => {
//         return sql.fetch_wishlist(29).then((result) => {
//             wishlist = result
//         });
//     })
//
//     test("Fetch Wishlist from MySQL Database", () => {
//         expect(wishlist).toContain('288610')
//     });
// });
