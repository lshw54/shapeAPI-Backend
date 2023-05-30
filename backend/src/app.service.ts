import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getCatType() {
    const result = await this.httpService
      .get('https://api.thecatapi.com/v1/breeds')
      .toPromise();
    return result['data'];
  }
}
