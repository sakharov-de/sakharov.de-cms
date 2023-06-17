export default ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        baseUrl: env('S3_CDN_DOMAIN') ? `https://${env('S3_CDN_DOMAIN')}` : undefined,
        s3Options: {
          accessKeyId: env('S3_ACCESS_KEY_ID'),
          secretAccessKey: env('S3_SECRET_ACCESS_KEY'),
          endpoint: env('S3_ENDPOINT'),
          params: {
            Bucket: env('S3_BUCKET'),
          },
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
})
