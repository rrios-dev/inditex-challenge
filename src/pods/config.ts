import yup from "./yup";

const validationSchema = yup.object().shape({
    api: yup.object().shape({
        public: yup.object().shape({
            url: yup.string().required(),
            key: yup.string().required(),
        }),
    }),
});

export type Config = yup.InferType<typeof validationSchema>;

const config = validationSchema.validateSync({
    api: {
        public: {
            url: process.env.NEXT_PUBLIC_MARVEL_PUBLIC_API_URL,
            key: process.env.NEXT_PUBLIC_MARVEL_PUBLIC_API_KEY,
        }
    }
});

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_MARVEL_PUBLIC_API_KEY: string;
            NEXT_PUBLIC_MARVEL_PUBLIC_API_URL: string;
        }
    }
}

export default config;