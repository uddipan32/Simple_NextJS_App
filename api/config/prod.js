// This is for Production Credentials Only.
// You should consider putting these keys to the env variable in the OS and not publish these in the site itself.
module.exports = {
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  redirectDomain: process.env.REDIRECT_DOMAIN,

  awsAccessKeyID: process.env.AWS_ACCESSKEY_ID,
  awsSecretAccessKey: process.env.AWS_SECTRET_ACCESS_KEY,
  s3PublicBucket: process.env.S3_PUBLIC_BUCKET,

  otpAPIkey: process.env.OTP_API_KEY,
  otpTemplate: process.env.OTP_TEMPLATE,
  otpValidity: process.env.OTP_VALIDITY,
};
  