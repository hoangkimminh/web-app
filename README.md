# Night Watch web app

## INSTALLATION

### Requirements

- Node.js >= 12.0.0

## DOCUMENTATION

## Environment Variables

- `NODE_ENV` (string): "development" or "production" environment
- `PORT` (number): Port number to run the server
- `USER_MANAGER_ADDRESS` (string): Address of user-manager
- `WATCH_MANAGER_ADDRESS` (string): Address of watch-manager
- `SCHEDULER_ADDRESS` (string): Address of scheduler
- `CRAWLER_ADDRESS` (string): Address of crawler
- `NOTIFICATION_SERVICE_ADDRESS` (string): Address of notification-service
- `FB_APP_ID` (string): Facebook app ID
- `FB_APP_SECRET` (string): Facebook app secret
- `JWT_SECRET` (string): JWT secret

### API Routes

#### 1. `/api/user-manager`

> Proxy to [user-manager](https://github.com/night-watch-project/user-manager#routes)

#### 2. `/api/watch-manager`

> Proxy to [watch-manager](https://github.com/night-watch-project/watch-manager#routes)

#### 3. `/api/scheduler`

> Proxy to [scheduler](https://github.com/night-watch-project/scheduler#routes)

#### 4. `/api/crawler`

> Proxy to [crawler](https://github.com/night-watch-project/crawler#routes)

#### 5. `/api/notification-service`

> Proxy to [notification-service](https://github.com/night-watch-project/notification-service#routes)

### Root Routes

#### 1. `/auth/facebook`

> Authenticate with Facebook

#### 2. `/auth/facebook/cb`

<<<<<<< HEAD
> Callback after authenticating with Facebook

##### Response body

User object attached with the JWT as an additional field. See [User schema](https://github.com/night-watch-project/user-manager/blob/master/src/models/user.js).
=======
> Callback after authenticating with Facebook. Redirect to `/dashboard` on success, to `/login` on failure.
>>>>>>> 8933b858c15cca378f33529e1c22186b47616ffb
