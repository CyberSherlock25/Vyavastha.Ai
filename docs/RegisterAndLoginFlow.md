# Registerflow -
                 EVENT HOST
                     │
                     │ registration
                     ▼
              RegisterRequest
                     │
                     ▼
              AuthController
                     │
                     ▼
                AuthService
                  ↙     ↘
                 ↓       ↓
        RoleRepository  UserRepository
                 ↓       ↓
              roles     users
                 └───┬───┘
                     ↓
                  Neon DB

# Login flow -
Email + Password
       ↓
LoginRequest
       ↓
AuthService.login()
       ↓
UserRepository.findByEmail()
       ↓
User found?
   ↙        ↘
 NO         YES
 ↓           ↓
Error    Check password
             ↓
        Correct?
        ↙      ↘
      NO        YES
      ↓          ↓
    Error    LoginResponse 