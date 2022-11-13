export const routes = {
  login: {
    name: 'Login',
    url: '/auth/login'
  },
  register: {
    name: 'Register',
    url: '/auth/signup'
  },
  pm: {
    name: 'Pm',
    url: '/pm/manage'
  },
  chat: {
    name: 'Chat',
    url: '/'
  },
  chatRoom: {
    name: 'ChatRoom',
    url: '/chatroom'
  },
  verify: {
    name: 'Verify',
    url: '/auth/verify'
  },
  profile: {
    name: 'Profile',
    url: '/profile'
  },
  project: {
    name: 'Project',
    url: '/pm/project/[id]'
  },
  forgotPassword: {
    name: 'ForgotPassword',
    url: '/auth/forgot-password'
  },
  forgotPasswordSuccess: {
    name: 'ForgotPassword',
    url: '/auth/forgot-password/success'
  },
  resetPassword: {
    name: 'ResetPassword',
    url: '/auth/reset-password/[token]'
  }
};
