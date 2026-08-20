Vyavastha.ai — Authentication, Session & Login/Logout Flow

1. Purpose

This document explains the complete authentication workflow implemented in Vyavastha.ai.

Registration
    ↓
Login
    ↓
Password verification
    ↓
HttpSession creation
    ↓
JSESSIONID cookie
    ↓
React AuthContext
    ↓
ProtectedRoute
    ↓
Dashboard
    ↓
Refresh
    ↓
GET /api/auth/me
    ↓
Session restored
    ↓
Logout
    ↓
session.invalidate()
    ↓
Protected pages blocked

The core principle is:

The backend session is the source of truth for authentication. React maintains the UI representation of that authenticated state.

2. Main Technologies

Backend

Java

Spring Boot

Spring MVC

Spring Data JPA

PostgreSQL / Neon

HttpSession

BCrypt password hashing

Frontend

React

React Router

Vite

React Context API

Fetch API

3. Important Files

Backend

vyavastha-backend/
└── src/main/java/com/vyavastha/ai/
    ├── controller/
    │   └── AuthController.java
    ├── service/
    │   └── AuthService.java
    ├── entity/
    │   └── User.java
    └── repository/
        └── UserRepository.java

AuthController.java

Handles:

POST /api/auth/register
POST /api/auth/login
GET  /api/auth/me
POST /api/auth/logout

AuthService.java

Contains authentication/business logic such as user lookup and password verification.

UserRepository.java

Communicates with the database to find/store users.

Frontend

vyavastha-frontend/
└── src/
    ├── context/
    │   └── AuthContext.jsx
    ├── services/
    │   └── api/
    │       ├── api.js
    │       └── authService.js
    └── routes/
        ├── AppRoutes.jsx
        └── ProtectedRoute.jsx

4. Registration Flow

The registration UI is in:

src/pages/auth/Register.jsx

Flow:

Register.jsx
    ↓
registerUser()
    ↓
authService.js
    ↓
POST /api/auth/register
    ↓
AuthController.java
    ↓
AuthService.java
    ↓
UserRepository
    ↓
PostgreSQL

Passwords are protected using BCrypt rather than being stored as plain text.

5. Login Flow

The login UI is in:

src/pages/auth/Login.jsx

Flow:

Login.jsx
    ↓
loginUser(credentials)
    ↓
authService.js
    ↓
POST /api/auth/login
    ↓
AuthController.java
    ↓
AuthService.java
    ↓
UserRepository
    ↓
Find user
    ↓
BCrypt verification

If the password is correct, login succeeds and the backend creates/uses an HTTP session.

6. BCrypt Password Verification

Conceptually:

Entered password
       ↓
BCrypt verification
       ↓
Stored BCrypt hash
       ↓
Match?
   ┌───┴───┐
  YES      NO
   ↓        ↓
Login     Reject

The real password is not stored as plain text.

7. HttpSession

After successful login, the backend stores authentication information in the server-side session:

USER_ID
USER_EMAIL
USER_NAME
USER_ROLE

Conceptually:

JSESSIONID = ABC123

Server-side session:
ABC123
 ├── USER_ID
 ├── USER_EMAIL
 ├── USER_NAME
 └── USER_ROLE

The browser mainly holds the session identifier:

JSESSIONID

The authenticated user attributes remain on the server.

8. Why JSESSIONID Matters

The browser sends the session cookie with authenticated requests.

Browser
   │
   │ JSESSIONID=ABC123
   ▼
Spring Boot
   │
   ▼
HttpSession ABC123
   ├── USER_ID
   ├── USER_EMAIL
   ├── USER_NAME
   └── USER_ROLE

This allows Spring to associate a request with the authenticated user.

9. Why credentials: "include" Is Used

The frontend runs on:

http://localhost:5173

and the backend runs on:

http://localhost:8081

Authentication requests therefore use:

credentials: "include"

For example:

fetch(`${API_BASE_URL}/api/auth/me`, {
    method: "GET",
    credentials: "include"
});

This allows the browser to include the relevant session cookie in the request, subject to the backend CORS configuration.

It is used for:

login
me
logout

10. GET /api/auth/me

The endpoint:

GET /api/auth/me

answers:

Who is the currently authenticated user for this session?

Flow:

React
  ↓
GET /api/auth/me
  ↓
JSESSIONID
  ↓
HttpSession
  ↓
Current user
  ↓
JSON response

Valid session:

200 OK

No valid session:

401 Unauthorized

This endpoint is especially important after a browser refresh.

11. getCurrentUser()

authService.js contains:

getCurrentUser()

It calls:

GET /api/auth/me

It returns the current user when the session is valid.

For:

401 Unauthorized

it returns:

null

This creates the bridge:

Spring HttpSession
       ↓
/api/auth/me
       ↓
authService.js
       ↓
AuthContext.jsx

12. AuthContext.jsx

AuthContext.jsx is the central React authentication state manager.

It maintains:

user
loading
isAuthenticated

user

The current authenticated user.

Example:

{
    id: 25,
    fullName: "Example User",
    email: "user@example.com",
    role: "EVENT_HOST"
}

isAuthenticated

Based on whether user exists:

Boolean(user)

loading

Indicates that React is still checking the backend session.

Initially:

loading = true

After the /me request finishes:

loading = false

13. Why loading Is Necessary

Without loading, refresh could cause an incorrect redirect.

Bad flow:

Ctrl + R
   ↓
AuthContext starts
   ↓
user = null
   ↓
ProtectedRoute runs immediately
   ↓
isAuthenticated = false
   ↓
Redirect to /login

But /api/auth/me might still be running.

Correct flow:

Ctrl + R
   ↓
AuthContext starts
   ↓
loading = true
   ↓
ProtectedRoute waits
   ↓
GET /api/auth/me
   ↓
Session checked
   ↓
User restored
   ↓
loading = false
   ↓
ProtectedRoute decides

This is why the refresh workflow now works correctly.

14. Session Restoration

When React starts:

AuthContext
    ↓
useEffect()
    ↓
checkSession()
    ↓
getCurrentUser()
    ↓
GET /api/auth/me

Valid session

200 OK
    ↓
setUser(currentUser)
    ↓
setLoading(false)

Invalid/no session

401
    ↓
setUser(null)
    ↓
setLoading(false)

15. ProtectedRoute.jsx

ProtectedRoute prevents unauthenticated users from accessing protected routes.

The first check is:

loading?

If true:

Checking authentication...

is displayed.

Only after loading finishes does it decide whether to redirect.

Then:

Authenticated?
   ├── NO → /login
   └── YES → continue

16. Role-Based Protection

Vyavastha.ai has three main roles:

EVENT_HOST
AUTHORITY
ADMIN

Routes use role restrictions.

Example:

<ProtectedRoute allowedRoles={["EVENT_HOST"]}>
    ...
</ProtectedRoute>

The role flow is:

Authenticated?
      ↓
Correct role?
   ┌──┴──┐
  YES    NO
   ↓      ↓
Allow   Reject

Frontend role protection controls route access in the UI. Sensitive backend APIs should also enforce authorization because frontend checks alone are not a security boundary.

17. AppRoutes.jsx

AppRoutes.jsx defines:

/login
/register
/event-host
/authority
/admin

Protected routes are wrapped with ProtectedRoute.

At the current stage the dashboards are placeholders, for example:

<ProtectedRoute allowedRoles={["EVENT_HOST"]}>
    <Placeholder title="Event Host Dashboard" />
</ProtectedRoute>

A simple logout button was temporarily placed in the placeholder to test the complete authentication workflow.

18. Logout Flow

Logout uses:

POST /api/auth/logout

The frontend calls:

logoutUser()

with:

credentials: "include"

The backend receives the current session and runs:

session.invalidate();

This destroys the server-side session.

19. Why session.invalidate() Is Important

Simply doing:

setUser(null);

would only clear React's UI state.

The server session could still be valid.

Correct logout is:

Logout button
     ↓
POST /api/auth/logout
     ↓
HttpSession
     ↓
session.invalidate()
     ↓
Server session destroyed
     ↓
setUser(null)
     ↓
/login

Both frontend and backend are therefore logged out.

20. AuthContext Logout

The logout function calls:

logoutUser()

and then clears:

setUser(null)

The React state is cleared in finally, so the UI does not remain authenticated if the logout request encounters an error.

21. Complete Login Flow

                    USER
                     │
                     ▼
                Login.jsx
                     │
                     ▼
              loginUser()
                     │
                     ▼
          POST /api/auth/login
                     │
                     ▼
            AuthController
                     │
                     ▼
              AuthService
                     │
                     ▼
          Find user in database
                     │
                     ▼
            BCrypt verification
                     │
                ┌────┴────┐
                │         │
              valid     invalid
                │         │
                ▼         ▼
          Create/use    Reject
          HttpSession
                │
                ▼
       Store session attributes
                │
                ▼
             JSESSIONID
                │
                ▼
              Browser
                │
                ▼
            AuthContext
                │
                ▼
             Dashboard

22. Complete Refresh Flow

                 Ctrl + R
                    │
                    ▼
              React restarts
                    │
                    ▼
              AuthContext
                    │
                    ▼
             loading = true
                    │
                    ▼
          getCurrentUser()
                    │
                    ▼
          GET /api/auth/me
                    │
                    ▼
              JSESSIONID
                    │
                    ▼
             HttpSession
                    │
                    ▼
             Current user
                    │
                    ▼
              setUser(user)
                    │
                    ▼
             loading = false
                    │
                    ▼
             ProtectedRoute
                    │
                    ▼
               Dashboard

23. Complete Logout Flow

                Logout button
                     │
                     ▼
                  logout()
                     │
                     ▼
              logoutUser()
                     │
                     ▼
         POST /api/auth/logout
                     │
                     ▼
              AuthController
                     │
                     ▼
          session.invalidate()
                     │
                     ▼
          Server session destroyed
                     │
                     ▼
              setUser(null)
                     │
                     ▼
            isAuthenticated=false
                     │
                     ▼
             ProtectedRoute
                     │
                     ▼
                  /login

24. After Logout

If the user tries:

GET /api/auth/me

after logout:

401 Unauthorized

If the user manually enters:

/event-host

the flow is:

/event-host
    ↓
ProtectedRoute
    ↓
No authenticated session
    ↓
/login

Refreshing after logout also remains on the login page.

This confirms that logout invalidated the server session instead of only changing frontend state.

25. Responsibilities by File

File

Responsibility

Register.jsx

Registration UI

Login.jsx

Login UI

authService.js

Calls authentication APIs

AuthController.java

Authentication HTTP endpoints

AuthService.java

Authentication/business logic

UserRepository.java

Database user access

AuthContext.jsx

React authentication state

ProtectedRoute.jsx

Protected routes and role checks

AppRoutes.jsx

Application routing

26. API Summary

Method

Endpoint

Purpose

POST

/api/auth/register

Register user

POST

/api/auth/login

Authenticate and create session

GET

/api/auth/me

Return current authenticated user

POST

/api/auth/logout

Destroy current server session

27. Authentication State

Before login

user = null
isAuthenticated = false

After login

user = authenticated user
isAuthenticated = true

While checking session

loading = true

After successful /me

loading = false
user = authenticated user
isAuthenticated = true

After logout

user = null
isAuthenticated = false
server session = invalidated

28. Tested Workflow

The following has been successfully tested:

Login
  ↓
Session creation
  ↓
JSESSIONID
  ↓
GET /api/auth/me
  ↓
User returned
  ↓
Dashboard

Refresh:

Dashboard
  ↓
Ctrl + R
  ↓
GET /api/auth/me
  ↓
Session restored
  ↓
Dashboard remains accessible

Logout:

Dashboard
  ↓
Logout
  ↓
POST /api/auth/logout
  ↓
session.invalidate()
  ↓
Login page

Protected access after logout:

Logout
  ↓
Try /event-host
  ↓
ProtectedRoute
  ↓
/login

29. Current Temporary Dashboard

The real dashboards are not implemented yet.

Current routes use placeholders:

/event-host
/authority
/admin

The temporary Event Host page was used to test the authentication workflow and contains the simple logout button.

Later it can be replaced with a proper dashboard component and shared navigation/header.

30. Security Notes

The authentication foundation currently uses:

Server-side HttpSession
+
JSESSIONID cookie
+
BCrypt password hashing
+
Protected frontend routes
+
Role checks

The browser does not store the user's password.

The frontend does not manually manage the session ID.

The backend maintains the authenticated session.

React maintains the current UI state.

For production, sensitive database credentials must remain outside tracked source files, and backend APIs must enforce authorization independently of frontend route protection.

31. Next Development Steps

Authentication/session workflow is now working.

Recommended next steps:

Move the database password out of application.properties.

Add the appropriate local environment configuration.

Ensure secrets are ignored by Git.

Commit and push the working authentication changes.

Replace placeholder dashboards with real dashboard components.

Build Event Host functionality.

Build Authority functionality.

Build Admin functionality.

Add backend authorization to protected business APIs.

Build the event/permission approval workflow.

32. Final Architecture

┌──────────────────── FRONTEND ────────────────────┐
│                                                  │
│  Login.jsx                                       │
│      │                                           │
│      ▼                                           │
│  authService.js                                  │
│      │                                           │
│      ▼                                           │
│  AuthContext.jsx                                 │
│      │                                           │
│      ▼                                           │
│  ProtectedRoute.jsx                              │
│      │                                           │
│      ▼                                           │
│  Dashboard                                       │
│                                                  │
└──────────────────────┬───────────────────────────┘
                       │
                  HTTP + Cookie
                       │
                       ▼
┌──────────────────── BACKEND ─────────────────────┐
│                                                  │
│  AuthController.java                             │
│      │                                           │
│      ▼                                           │
│  AuthService.java                                │
│      │                                           │
│      ▼                                           │
│  UserRepository                                  │
│      │                                           │
│      ▼                                           │
│  PostgreSQL / Neon                               │
│                                                  │
│  HttpSession                                     │
│      │                                           │
│      ├── USER_ID                                 │
│      ├── USER_EMAIL                              │
│      ├── USER_NAME                               │
│      └── USER_ROLE                               │
│                                                  │
└──────────────────────────────────────────────────┘

Core Principle

The backend decides whether the session is valid.
The frontend reflects that authentication state.

This is the current foundation of the Vyavastha.ai login, session, refresh, role protection, and logout syste