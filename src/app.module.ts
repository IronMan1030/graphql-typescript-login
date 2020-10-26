import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { LoginModule } from './admin/login/login.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      context: ({ req }) => ({ req }),
      autoSchemaFile: join(process.cwd(), 'admin-schema.gql'),
      sortSchema: true,
      introspection: true,
      playground: true,
      path: 'admin',
      installSubscriptionHandlers: true,
      // include: [LoginModule],
    }),
    LoginModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.cv7fr.gcp.mongodb.net/test?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
