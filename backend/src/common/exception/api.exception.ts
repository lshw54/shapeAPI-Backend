import { HttpException, HttpStatus } from '@nestjs/common';

import { ErrorEnum } from '../constant/error';
/**
 * This exception can be thrown in case of error
 */
export class ApiException extends HttpException {
  private errorCode: number;

  /**
   * Error, the request result HTTP status code is still 200
   */
  constructor(key: string, private readonly _args?: any) {
    super(`${key}`, HttpStatus.OK);

    this.errorCode =
      Number(
        Object.entries(ErrorEnum)
          .find(([_, val]) => val === key)?.[0]
          ?.replace('CODE_', ''),
      ) || HttpStatus.BAD_REQUEST;
  }

  getErrorCode(): number {
    return this.errorCode;
  }
}
