import { ExpoConfig, ConfigContext } from 'expo/config';
import dotenv from 'dotenv';

dotenv.config();

export default ({ config }: ConfigContext): ExpoConfig => {
  return {
    ...config,
    name: 'expo-storybook-poc',
    slug: 'expo-storybook-poc',
    extra: {
      storybookEnabled: process.env.STORYBOOK_ENABLED,
      chromaticProjectToken: process.env.CHROMATIC_PROJECT_TOKEN,
    },
  };
};
