import { HttpException, HttpStatus } from '@nestjs/common';

export class NotUniqueException extends HttpException {
  constructor(message: string) {
    super(message, HttpStatus.UNPROCESSABLE_ENTITY);
  }
}
