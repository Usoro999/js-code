class User {
  static usersTotal = 0;
  constructor(username, email) {
    this.username = username
    this.email = email
    User.usersTotal++;
  }
  static getTotalUsers() {
    return this.usersTotal;
  }
}
console.log(User.getTotalUsers());
const john = new User('john', 'john@example.com');
console.log(User.getTotalUsers()); // 1
const jane = new User('jane', 'jane@example.com');
console.log(User.getTotalUsers()); // 2