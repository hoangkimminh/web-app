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
- `FACEBOOK_APP_ID` (string): ID of the app created on Facebook
- `FACEBOOK_APP_SECRET` (string): Secret of the app created on Facebook
- `FACEBOOK_CALLBACK_URL` (string): Callback URL after authenticated
- `JWT_SECRET` (string): Secret to authenticate jwt

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

> Callback after authenticating with Facebook
