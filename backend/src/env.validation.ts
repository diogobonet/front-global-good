import { plainToInstance } from 'class-transformer';
import { IsString, validateSync } from 'class-validator';

// Class responsible for checking that environment variables are set correctly
class EnvironmentVariables {
  @IsString()
  JWT_SECRET: string;

  @IsString()
  SKU_GENERATOR_ALGORITHM: string;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
