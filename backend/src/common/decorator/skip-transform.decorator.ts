import { SetMetadata } from '@nestjs/common';

export const SKIP_TRANSFORM_DECORATOR_KEY = 'decorator:skip_transform';

/**
 * Add this decorator when conversion to base return format is not required
 */
export const SkipTransform = () =>
  SetMetadata(SKIP_TRANSFORM_DECORATOR_KEY, true);
