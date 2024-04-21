import User from '../models/user.model.js'

const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email })

  if (!user) {
    return res.status(400).json({
      message: 'An account with that email does not exist. Sign up instead.',
    })
  }

  //validate password
  //on success, create jwt
}

const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body

  //check if email already exists
  const user = await User.findOne({ email: req.body.email })

  if (user) {
    return res.status(400).json({
      message: 'An account with that email does already exists. Login instead.',
    })
  }

  //hash password
  

  //create new user
  try {
    await User.create({
      first_name: firstName,
      last_name: lastName,
      email: email,
    })
  } catch (error) {
    return res.status(500).json({ message: error })
  }
}

export default { login, register }
