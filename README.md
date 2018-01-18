# mpritter
A Twitter mock App
____________________
## App Usage 

### Page
  - Home: contain posts from users
  - Profile: contain profile information from logged user
  - Edit Profile: edit profile page
## Feature
  - mpritt : post a text
  - display all posts
  - display posts by hashtags search
  - delete mpritt
  - edit user profile

-------
# MPRITTER API
## Users API
### List of Users API endpoint:
| Route                       | HTTP   | Description                         | 
| -------------------------   |:------ | ----------------------------------- |
| `/users/login`              | POST   | Regular Login, returns access token |
| `/users/`                   | GET    | Find All users                      |
| `/users/id`                 | GET    | Find one user by ID                 |
| `/users/`                   | POST   | Create new User / Signup            |
| `/users/:id`                | DELETE | Delete User                         |
| `/users/:id/`               | PUT    | Edit user                           |

### Endpoint Usage
- POST : `/users/login`
  - req.body.email: should contain user's email
  - req.body.password: should contain user's password
- GET : `/users/`
- GET : `/users/:id` 
- POST : `/users/`
  - req.body.email: should contain user's email
  - req.body.userName: should contain user's username
  - req.body.password: should contain user's password
- DELETE : `/users/:id`  
- PUT : `/users/:id/`
  - req.body.update: should contain updated filed and it's value (write in stringified JSON)

## Post API
### List of Posts API endpoint:
| Route                   | HTTP   | Description              | 
| ----------------------- |:------ | -----------------------  |
| `/posts/`               | GET    | Get all posts            |
| `/posts/?tag=`          | GET    | search post by hashtag   |
| `/posts/`               | POST   | Create new post          |
| `/posts/:id`            | DELETE | Delete a post            |

### Endpoint Usage
- GET : `/posts/`
- GET : `/posts/?tag=`
  - req.headers.token: contain token from login
  - req.query.tag: contain search tag
- POST : `/posts/` 
  - req.headers.token: contain token from login
  - req.body.caption: contain caption
  - req.file: contain photo/image you want to post
- DELETE : `/posts/:id`  
  - req.headers.token: contain token from login
- PUT : `/posts/:id/`
  - req.headers.token: contain token from login
  - req.body.update: should contain updated field and it's value (write in stringified JSON)

Access the website via ??? or API via `???`
