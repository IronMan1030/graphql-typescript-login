import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { LoginType } from './types/login.type';
import { LoginService } from './login.service';
import { LoginInput } from './input-login.input';

const pubSub = new PubSub();
@Resolver()
export class LoginResolver {
  constructor(private readonly loginService: LoginService) {}

  @Query(() => [LoginType])
  async login(): Promise<LoginType[]> {
    return this.loginService.findAll();
  }
  @Query(() => LoginType)
  async loginOne(@Args('qrKey') qrKey: string): Promise<LoginInput> {
    return this.loginService.findOne(qrKey);
  }

  @Mutation(() => LoginType)
  async createLogin(@Args('input') input: LoginInput): Promise<LoginInput> {
    const login: any = this.loginService.create(input);
    pubSub.publish('commentAdded', { commentAdded: login });
    return login;
  }
  @Subscription(returns => LoginType, {
    name: 'commentAdded',
  })
  async qrCodeAdded() {
    return pubSub.asyncIterator('commentAdded');
  }
}
