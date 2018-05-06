var steam = require("./steam")
var sql = require("./sql_db.js")

beforeAll(() => {
    return steam.steam(590380).then((result) => {
        test_obj = result
    });
});

describe("David's test", () => {
  test("a valid object", () => {
      expect(steam.process_object(test_obj)).
      toContain("Into the Breach")
  });
});

describe('SQL DB Tests', () => {
    beforeEach(() => {
        return sql.fetch_wishlist(29).then((result) => {
            wishlist = result
        });
    })

    test("Fetch Wishlist from MySQL Database", () => {
        expect(wishlist).toContain('288610')
    });
});
