import { envValidationSchema, type EnvConfig } from './env/validation.schema';

class AppConfig {
  private static instance: AppConfig;
  private config: EnvConfig;

  private constructor() {
    const parsed = envValidationSchema.safeParse(process.env);

    if (!parsed.success) {
      console.error(
        'Invalid environment variables:',
        parsed.error.flatten().fieldErrors,
      );
      throw new Error('Invalid environment configuration');
    }

    this.config = parsed.data;
  }

  public static getInstance(): AppConfig {
    if (!AppConfig.instance) {
      AppConfig.instance = new AppConfig();
    }
    return AppConfig.instance;
  }

  public get<K extends keyof EnvConfig>(key: K): EnvConfig[K] {
    return this.config[key];
  }

  public getAll(): EnvConfig {
    return this.config;
  }
}

export { AppConfig, type EnvConfig };