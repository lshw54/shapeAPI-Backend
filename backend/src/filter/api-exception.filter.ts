import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { ErrorEnum } from '../common/constant/error';
import { ApiException } from '../common/exception/api.exception';
import type { IBaseResponse } from '../interface/response';
import { Response, Request } from 'express';

@Catch()
export class ApiExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    // Response result code judgment
    const httpStatus: number =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const apiErrorCode: number =
      exception instanceof ApiException ? exception.getErrorCode() : httpStatus;

    let errorMessage = `${exception}`;

    // Handling DTO internationalization errors
    if (exception instanceof ApiException) {
      errorMessage = exception.message;
    } else if (exception instanceof HttpException) {
      errorMessage = exception.message;
    }

    // Hide specific exception messages in production mode in case of internal system errors
    if (
      process.env.NODE_ENV === 'production' &&
      httpStatus === HttpStatus.INTERNAL_SERVER_ERROR
    ) {
      errorMessage = ErrorEnum.CODE_500;
    }

    // Return base response results
    const resBody: IBaseResponse = {
      code: apiErrorCode,
      message: errorMessage,
      data: null,
    };

    response.status(httpStatus);
    response.send(resBody);
  }
}
