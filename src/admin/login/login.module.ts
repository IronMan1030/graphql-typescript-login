import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginResolver } from './login.resolver';
import { MongooseModule } from '@nestjs/mongoose';
// import { Login, LoginSchema } from './schemas/login.schema';
import { LoginSchema } from './schemas/login.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'Login',
        useFactory: async () => {
          return LoginSchema;
        },
      },
    ]),
    // MongooseModule.forFeature([{ name: 'Login', schema: LoginSchema }]),
  ],
  providers: [LoginService, LoginResolver],
})
export class LoginModule {}
