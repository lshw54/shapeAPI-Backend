import {
  CallHandler,
  ExecutionContext,
  HttpStatus,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SKIP_TRANSFORM_DECORATOR_KEY } from '../decorator/skip-transform.decorator';
import { ResOp } from '../dto/common.dto';

/**
 * Uniformly process the return interface results, or add if not required@SkipTransformDecorator
 */
export class ApiTransformInterceptor implements NestInterceptor {
  constructor(private readonly reflector: Reflector) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        const skipTransform = this.reflector.get<boolean>(
          SKIP_TRANSFORM_DECORATOR_KEY,
          context.getHandler(),
        );
        if (skipTransform) {
          return data;
        }
        const response = context.switchToHttp().getResponse();
        response.header('Content-Type', 'application/json; charset=utf-8');
        return new ResOp(HttpStatus.OK, data ?? null);
      }),
    );
  }
}
