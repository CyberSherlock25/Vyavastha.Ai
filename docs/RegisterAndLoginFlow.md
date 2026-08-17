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