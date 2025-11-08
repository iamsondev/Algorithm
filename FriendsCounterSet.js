const USER_COUNT = 50000;
let usersA = [];
let usersB = [];

const createUser = (id) => ({
  id: `user_${id}`,
  name: `user ${id}`,
});

for (let i = 0; i < USER_COUNT; i++) {
  usersA.push(createUser(i));
  usersB.push(createUser(i + 25000));
}

// slow process
const commonFriendSlow = (id) => {
  const startTime = performance.now();
  const commonFriend = [];
  usersA.forEach((userA) => {
    usersB.forEach((userB) => {
      if (userA.id === userB.id) {
        commonFriend.push(userB);
      }
    });
  });
  const endTime = performance.now();
  return { count: commonFriend.length, timeTookToFinish: endTime - startTime };
};

console.log(commonFriendSlow(usersA, usersB));
