export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51HBoMoA7yhDelcjhc3SPgo7wSU6qwul6Z3ghqUjZPf3J1MX9EbrK3UOB1FcwTJ4omb6wJXhHxbHoKGWXgMxRYp7N00xh2pN5x9",
  s3: {
    REGION: "eu-west-1",
    BUCKET: "croced-notes-app-upload"
  },
  apiGateway: {
    REGION: "eu-west-1",
    URL: "https://9qppzik7lb.execute-api.eu-west-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_dW1Ce7yza",
    APP_CLIENT_ID: "5uvda6qoegm5aee1g85bketbp2",
    IDENTITY_POOL_ID: "eu-west-1:a71e3a77-d29f-49be-9874-d7f4e3f40264"
  }
};