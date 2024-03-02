import yup from "./yup";

const validationSchema = yup.object().shape({
  api: yup.object().shape({
    private: yup.object().shape({
      key: yup.string().required(),
    }),
  }),
});

export type ServerConfig = yup.InferType<typeof validationSchema>;

const serverConfig = validationSchema.validateSync(
  {
    api: {
      private: {
        key: process.env.MARVEL_PRIVATE_API_KEY,
      },
    },
  },
  { stripUnknown: true }
);

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MARVEL_PRIVATE_API_KEY: string;
    }
  }
}

export default serverConfig;
