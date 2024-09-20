const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

test('check and add user to userController', () => {
  let user = new User(1234, "Walter", "walter@hotmail.com")
  expect(userController.users).not.toContain(user)
  userController.add(user)
  expect(userController.getUsers()).toContain(user)
})

test('remove and check user to userController', () => {
  let user = new User(1234, "Luisa", "luisa@hotmail.com")
  userController.add(user)
  userController.remove(user)
  expect(userController.users).not.toContain(user)
})

test('search user by email to userController', () => {
  let user = new User(1234, "Eduardo", "eduardo@hotmail.com")
  userController.add(user)
  expect(userController.findByEmail("eduardo@hotmail.com").email).toBe("eduardo@hotmail.com")
})

test('search user by email to userController', () => {
  let user = new User(1234, "Maritza", "maritza@hotmail.com")
  userController.add(user)
  expect(userController.findByEmail("maritza@hotmail.com").email).toBe("maritza@hotmail.com")
})

test('serach user by id to userController', () => {
  let user = new User(1023, "Lionel", "lionel@hotmail.com")
  userController.add(user)
  expect(userController.findById(1023).id).toBe(1023)
})

test('serach user by id to userController', () => {
  let user = new User(9876, "Felipe", "felipe@hotmail.com")
  userController.add(user)
  expect(userController.findById(9876).id).toBe(9876)
})



