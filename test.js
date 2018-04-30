var validatePhonenUmber = require("./validate");

// function validatePhonenUmber(num){
//   num = num.replace(/((-)(()())( )(.))/g,"")
//   if(/^(0-9)+$/).test(num)){
//     return false;
//   }
//
//   if(num.length!==10){
//     return false;
//   }
//
//   return num;
// }

test("a valid phone number", ()=>{
  expect(validatePhonenUmber("7781234567")).
  toBe("7781234567")
});

test("a valid phone number with a -", ()=>{
  expect(validatePhonenUmber("778-123-4567")).
  toBe("7781234567")
});

test("a valid phone number with a ()", ()=>{
  expect(validatePhonenUmber("(778)-123-4567")).toBe("7781234567");
  expect(validatePhonenUmber("(778)1234567")).toBe("7781234567");
  expect(validatePhonenUmber("(778)-1234567")).toBe("7781234567");
  expect(validatePhonenUmber("(778)123-4567")).toBe("7781234567");
});

test("a valid phone number with a .", ()=>{
  expect(validatePhonenUmber("(778).123.4567")).toBe("7781234567");
  expect(validatePhonenUmber("(778).123 4567")).toBe("7781234567");
});

test("a valid phone number with a +1 or just 1", ()=>{
  expect(validatePhonenUmber("+1(778).123.4567")).toBe("7781234567");
  expect(validatePhonenUmber("1(778).123 4567")).toBe("7781234567");
});

test("invalid numbers", ()=>{
  expect(validatePhonenUmber("778bbbeddd")).toBeFalsy()
  expect(validatePhonenUmber("7781234567").length).toBe(10)
});

var db = [
  {
    id:1,
    name:"blah",
    age:15
  },
  {
    id:2,
    name:"blah",
    age:15
  },
  {
    id:3,
    name:"blah",
    age:17
  }
];

// function getDBinfo(callback){
//   db.connect().then(()=>{
//     callback(data);
//   })
// }

describe.only("my data in the database", ()=>{
  test("right data?",()=>{
    // getDBinfo(()=>{
    //
    // });
    for(var i = 0;i<db.length;i++){
      expect(db[i]).toHaveProperty("id");
      expect(db[i]).toHaveProperty("age", 15);
      expect(db[i]).toHaveProperty("name");
    }
  });
});
