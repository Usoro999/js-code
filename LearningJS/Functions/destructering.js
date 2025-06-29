const userInfo = {
  userName: "Yurii",
  email: "usoro999@gmail.com",
  password: "password"
}

const login = ({ email, password }) => {
  console.log(`Enter this email ${email}`)
  console.log(`Enter this email ${password}`)
}

login(userInfo)